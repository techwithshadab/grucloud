// Generated by aws2gc
const { get } = require("rubico");
const { AwsProvider } = require("@grucloud/provider-aws");

const createResources = ({ provider }) => {
  provider.s3.makeBucket({
    name: get("config.s3.Bucket.grucloudSimpleBucket.name"),
    namespace: "My namespace",
  });

  provider.s3.makeObject({
    name: get("config.s3.Object.grucloudSimpleFileTest.name"),
    namespace: "My namespace",
    dependencies: ({ resources }) => ({
      bucket: resources.s3.Bucket.grucloudSimpleBucket,
    }),
    properties: get("config.s3.Object.grucloudSimpleFileTest.properties"),
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