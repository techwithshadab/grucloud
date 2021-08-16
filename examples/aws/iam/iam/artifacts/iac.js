// Generated by aws2gc
const { get } = require("rubico");
const { AwsProvider } = require("@grucloud/provider-aws");

const createResources = ({ provider }) => {
  provider.iam.usePolicy({
    name: get("config.iam.Policy.amazonEksWorkerNodePolicy.name"),
    properties: get("config.iam.Policy.amazonEksWorkerNodePolicy.properties"),
  });

  provider.iam.makePolicy({
    name: get("config.iam.Policy.myPolicyToGroup.name"),
    properties: get("config.iam.Policy.myPolicyToGroup.properties"),
  });

  provider.iam.makePolicy({
    name: get("config.iam.Policy.myPolicyToRole.name"),
    properties: get("config.iam.Policy.myPolicyToRole.properties"),
  });

  provider.iam.makePolicy({
    name: get("config.iam.Policy.myPolicyToUser.name"),
    properties: get("config.iam.Policy.myPolicyToUser.properties"),
  });

  provider.iam.makeUser({
    name: get("config.iam.User.alice.name"),
    dependencies: ({ resources }) => ({
      iamGroups: [resources.iam.Group.admin],
      policies: [resources.iam.Policy.myPolicyToUser],
    }),
    properties: get("config.iam.User.alice.properties"),
  });

  provider.iam.makeGroup({
    name: get("config.iam.Group.admin.name"),
    dependencies: ({ resources }) => ({
      policies: [resources.iam.Policy.myPolicyToGroup],
    }),
    properties: get("config.iam.Group.admin.properties"),
  });

  provider.iam.makeRole({
    name: get("config.iam.Role.roleAllowAssumeRole.name"),
    dependencies: ({ resources }) => ({
      policies: [
        resources.iam.Policy.myPolicyToRole,
        resources.iam.Policy.amazonEksWorkerNodePolicy,
      ],
    }),
    properties: get("config.iam.Role.roleAllowAssumeRole.properties"),
  });

  provider.iam.makeInstanceProfile({
    name: get("config.iam.InstanceProfile.myProfile.name"),
    dependencies: ({ resources }) => ({
      roles: [resources.iam.Role.roleAllowAssumeRole],
    }),
  });

  provider.ec2.makeInstance({
    name: get("config.ec2.Instance.webIam.name"),
    dependencies: ({ resources }) => ({
      iamInstanceProfile: resources.iam.InstanceProfile.myProfile,
    }),
    properties: get("config.ec2.Instance.webIam.properties"),
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
