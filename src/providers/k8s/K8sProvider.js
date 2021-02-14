const assert = require("assert");
const { map, pipe, get, tap, tryCatch, switchCase } = require("rubico");
const { defaultsDeep, first, pluck } = require("rubico/x");
const shell = require("shelljs");
const os = require("os");
const path = require("path");
const fs = require("fs").promises;
const yaml = require("js-yaml");
const logger = require("../../logger")({ prefix: "K8sProvider" });
const { tos } = require("../../tos");
const CoreProvider = require("../CoreProvider");
const { K8sReplicaSet } = require("./K8sReplicaSet");
const { K8sPod } = require("./K8sPod");
const { K8sNamespace } = require("./K8sNamespace");
const { K8sDeployment } = require("./K8sDeployment");
const { K8sConfigMap } = require("./K8sConfigMap");

const { isOurMinionObject } = require("../Common");
const { compare } = require("./K8sCommon");

const isOurMinion = ({ resource, config }) =>
  isOurMinionObject({ tags: resource.metadata.annotations, config });

const fnSpecs = () => [
  {
    type: "Deployment",
    dependsOn: ["Namespace", "ConfigMap"],
    Client: K8sDeployment,
    isOurMinion,
    compare,
  },
  {
    type: "ConfigMap",
    dependsOn: ["Namespace"],
    Client: K8sConfigMap,
    isOurMinion,
    compare,
  },
  {
    type: "Pod",
    Client: K8sPod,
    isOurMinion,
    listOnly: true,
  },
  {
    type: "ReplicaSet",
    Client: K8sReplicaSet,
    isOurMinion,
    listOnly: true,
  },
  {
    type: "Namespace",
    Client: K8sNamespace,
    isOurMinion,
  },
];

const readKubeConfig = ({
  kubeConfigFile = path.resolve(os.homedir(), ".kube/config"),
}) =>
  tryCatch(
    pipe([
      () => fs.readFile(kubeConfigFile, "utf-8"),
      yaml.load,
      tap((kubeConfig) => {
        logger.info(tos(kubeConfig));
      }),
    ]),
    (error) => {
      logger.error(
        `Cannot read kube config file: ${kubeConfigFile}, error: ${error}`
      );
      throw error;
    }
  )();

const getAuthToken = ({ kubeConfig }) =>
  pipe([
    get("users"),
    first,
    get("user.exec"),
    switchCase([
      isEmpty,
      () => undefined,
      pipe([
        ({ command, args }) => {
          logger.debug(`getAuthToken: ${command}, args: ${args}`);
          const fullCommand = `${command} ${args.join(" ")}`;
          const { stdout, stderr, code } = shell.exec(fullCommand, {
            silent: true,
          });
          if (code !== 0) {
            throw {
              message: `command '${fullCommand}' failed`,
              stdout,
              stderr,
              code,
            };
          }
          return stdout;
        },
        JSON.parse,
        get("status.token"),
      ]),
    ]),
  ])(kubeConfig);

const providerType = "k8s";

exports.K8sProvider = ({ name = providerType, config = {} }) => {
  const info = () => ({});

  let accessToken;
  let kubeConfig;

  const start = pipe([
    tap(() => {
      logger.info("start ");
    }),
    () => readKubeConfig({ kubeConfigFile: config.kubeConfigFile }),
    tap((newKubeConfig) => {
      kubeConfig = newKubeConfig;
    }),
    (kubeConfig) => getAuthToken({ kubeConfig }),
    (token) => {
      logger.info(`start set accessToken to ${token}`);
      accessToken = token;
    },
  ]);

  return CoreProvider({
    type: providerType,
    name,
    config: defaultsDeep({
      accessToken: () => accessToken,
      kubeConfig: () => kubeConfig,
    })(config),
    fnSpecs,
    start,
    info,
  });
};