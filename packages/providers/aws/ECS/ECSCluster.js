const assert = require("assert");
const {
  map,
  pipe,
  tap,
  tryCatch,
  get,
  switchCase,
  eq,
  not,
  pick,
  assign,
} = require("rubico");
const { defaultsDeep, isEmpty } = require("rubico/x");

const logger = require("@grucloud/core/logger")({ prefix: "ECSCluster" });
const { tos } = require("@grucloud/core/tos");
const { retryCall } = require("@grucloud/core/Retry");
const {
  createEndpoint,
  shouldRetryOnException,
  buildTags,
} = require("../AwsCommon");

const findName = get("live.clusterName");
const findId = get("live.clusterArn");

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html

exports.ECSCluster = ({ spec, config }) => {
  const ecs = () => createEndpoint({ endpointName: "ECS" })(config);

  const findDependencies = ({ live, lives }) => [
    {
      type: "CapacityProvider",
      group: "ecs",
      ids: pipe([
        () => live,
        get("capacityProviders"),
        map(
          pipe([
            (name) =>
              lives.getByName({
                name,
                type: "CapacityProvider",
                group: "ecs",
                providerName: config.providerName,
              }),
            get("id"),
          ])
        ),
      ])(),
    },
  ];

  const findNamespace = pipe([
    tap((params) => {
      assert(true);
    }),
    () => "",
  ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#describeClusters-property
  const describeClusters = pipe([
    ecs().describeClusters,
    tap((params) => {
      assert(true);
    }),
    get("clusters"),
  ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#getParameter-property
  const getByName = ({ name }) =>
    tryCatch(
      pipe([
        tap(() => {
          assert(name);
        }),
        () => ({ clusters: [name] }),
        describeClusters,
      ]),
      switchCase([
        eq(get("code"), "ClusterNotFoundException"),
        () => undefined,
        (error) => {
          throw error;
        },
      ])
    )();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#listClusters-property

  const getList = () =>
    pipe([
      ecs().listClusters,
      get("clusterArns"),
      (clusters) => ({ clusters }),
      describeClusters,
    ])();

  const isUpByName = pipe([getByName, not(isEmpty)]);
  const isDownByName = pipe([getByName, isEmpty]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#createCluster-property
  const create = ({ payload, name, namespace }) =>
    pipe([
      () => payload,
      ecs().createCluster,
      tap(() =>
        retryCall({
          name: `createCluster isUpByName: ${name}`,
          fn: () => isUpByName({ name }),
        })
      ),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#deleteCluster-property
  const destroy = ({ live }) =>
    pipe([
      () => live,
      ({ clusterName }) => ({ cluster: clusterName }),
      tap(({ cluster }) => {
        assert(cluster);
      }),
      tryCatch(
        pipe([
          ecs().deleteCluster,
          () =>
            retryCall({
              name: `deleteCluster isDownByName: ${live.clusterName}`,
              fn: () => isDownByName({ name: live.clusterName }),
              config,
            }),
        ]),
        (error, params) =>
          pipe([
            tap(() => {
              logger.error(`error deleteCluster ${tos({ params, error })}`);
            }),
            () => error,
            switchCase([
              eq(get("code"), "ClusterNotFoundException"),
              () => undefined,
              () => {
                throw error;
              },
            ]),
          ])()
      ),
    ])();

  const configDefault = ({
    name,
    namespace,
    properties: { Tags, ...otherProps },
    dependencies: {},
  }) =>
    pipe([
      () => otherProps,
      defaultsDeep({
        clusterName: name,
        tags: buildTags({
          name,
          config,
          namespace,
          UserTags: Tags,
          key: "key",
          value: "value",
        }),
      }),
    ])();

  return {
    spec,
    findId,
    findNamespace,
    findDependencies,
    getByName,
    findName,
    create,
    destroy,
    getList,
    configDefault,
    shouldRetryOnException,
  };
};