// Generated by aws2gc
const { get } = require("rubico");
const { AwsProvider } = require("@grucloud/provider-aws");

const createResources = ({ provider }) => {
  provider.iam.usePolicy({
    name: get("config.iam.Policy.amazonEksWorkerNodePolicy.name"),
    properties: get("config.iam.Policy.amazonEksWorkerNodePolicy.properties"),
  });

  provider.iam.makePolicy({
    name: get("config.iam.Policy.policyAllowEc2.name"),
    properties: get("config.iam.Policy.policyAllowEc2.properties"),
  });

  provider.iam.makeRole({
    name: get("config.iam.Role.role_4Policies.name"),
    dependencies: ({ resources }) => ({
      policies: [
        resources.iam.Policy.policyAllowEc2,
        resources.iam.Policy.amazonEksWorkerNodePolicy,
      ],
    }),
    properties: get("config.iam.Role.role_4Policies.properties"),
  });
};

exports.createResources = createResources;

exports.createStack = async ({ createProvider }) => {
  const provider = createProvider(AwsProvider, { config: require("./config") });
  createResources({
    provider,
  });

  return {
    provider,
  };
};