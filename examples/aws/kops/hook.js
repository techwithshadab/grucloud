const assert = require("assert");
const { pipe, tap, tryCatch, switchCase, eq, get } = require("rubico");
const path = require("path");
const shell = require("shelljs");
const fs = require("fs").promises;
const constants = require("fs");

const buildKopsEnvFilename = (options) => path.resolve(__dirname, "./kops.env");

const fileExist = ({ fileName }) =>
  tryCatch(
    pipe([() => fs.access(fileName, constants.F_OK), () => true]),
    () => false
  )();

const writeAccessKeyFile = ({ region, zone, subDomainName, fileName }) => (
  contentAccessKey
) =>
  pipe([
    () => contentAccessKey,
    JSON.parse,
    ({ AccessKey }) => `
# Generated by Grucloud during 'gc apply' or 'gc run --onDeployed'
# 
export AWS_ACCESS_KEY_ID=${AccessKey.AccessKeyId}
export AWS_SECRET_ACCESS_KEY=${AccessKey.SecretAccessKey}
export NAME=${subDomainName}
export KOPS_STATE_STORE=s3://${subDomainName}
export REGION=${region}
export ZONE=${zone}
    `,
    (content) => fs.writeFile(fileName, content),
  ])();

const createAndSaveAccessKey = (options) =>
  pipe([
    () =>
      shell.exec(createAccessKeyCommand({ userName: options.userName }), {
        silent: true,
      }),
    switchCase([
      eq(get("code"), 0),
      pipe([get("stdout"), writeAccessKeyFile(options)]),
      (error) => {
        console.error(
          `Error creating access key: ${JSON.stringify(error, null, 4)}`
        );
        throw error;
      },
    ]),
  ])();

const createAccessKeyCommand = ({ userName }) =>
  `aws iam create-access-key --user-name ${userName}`;

module.exports = ({ resources: {}, provider }) => {
  const { config } = provider;
  const kopsEnvFilename = buildKopsEnvFilename(config);
  return {
    onDeployed: {
      init: async () => {
        return {};
      },
      actions: [
        {
          name: "Create User Access Key",
          command: pipe([
            switchCase([
              () => fileExist({ fileName: kopsEnvFilename }),
              tap((xxx) => {
                // console.log(
                //   `Access key file '${kopsEnvFilename}' already exist`
                // );
              }),
              () =>
                createAndSaveAccessKey({
                  region: config.region,
                  zone: config.zone(),
                  ...config.kops,
                  fileName: kopsEnvFilename,
                }),
            ]),
          ]),
        },
      ],
    },
    onDestroyed: {
      init: pipe([
        tryCatch(
          () => fs.rm(kopsEnvFilename),
          (error) => {
            //Ignore if file not there
            assert(true);
          }
        ),
      ]),
    },
  };
};
