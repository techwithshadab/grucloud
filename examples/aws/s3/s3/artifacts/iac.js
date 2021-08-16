// Generated by aws2gc
const { get } = require("rubico");
const { AwsProvider } = require("@grucloud/provider-aws");

const createResources = ({ provider }) => {
  provider.s3.makeBucket({
    name: get("config.s3.Bucket.grucloudAcceleration.name"),
    properties: get("config.s3.Bucket.grucloudAcceleration.properties"),
  });

  provider.s3.makeBucket({
    name: get("config.s3.Bucket.grucloudCors.name"),
    properties: get("config.s3.Bucket.grucloudCors.properties"),
  });

  provider.s3.makeBucket({
    name: get("config.s3.Bucket.grucloudEncryption.name"),
    properties: get("config.s3.Bucket.grucloudEncryption.properties"),
  });

  provider.s3.makeBucket({
    name: get("config.s3.Bucket.grucloudLifecycleconfiguration.name"),
    properties: get(
      "config.s3.Bucket.grucloudLifecycleconfiguration.properties"
    ),
  });

  provider.s3.makeBucket({
    name: get("config.s3.Bucket.grucloudLogDestination.name"),
  });

  provider.s3.makeBucket({
    name: get("config.s3.Bucket.grucloudPolicy.name"),
    properties: get("config.s3.Bucket.grucloudPolicy.properties"),
  });

  provider.s3.makeBucket({
    name: get("config.s3.Bucket.grucloudRequestPayment.name"),
    properties: get("config.s3.Bucket.grucloudRequestPayment.properties"),
  });

  provider.s3.makeBucket({
    name: get("config.s3.Bucket.grucloudTag.name"),
    properties: get("config.s3.Bucket.grucloudTag.properties"),
  });

  provider.s3.makeBucket({
    name: get("config.s3.Bucket.grucloudTestBasic.name"),
  });

  provider.s3.makeBucket({
    name: get("config.s3.Bucket.grucloudVersioning.name"),
    properties: get("config.s3.Bucket.grucloudVersioning.properties"),
  });

  provider.s3.makeBucket({
    name: get("config.s3.Bucket.grucloudWebsite.name"),
    properties: get("config.s3.Bucket.grucloudWebsite.properties"),
  });

  provider.s3.makeObject({
    name: get("config.s3.Object.fileTest.name"),
    dependencies: ({ resources }) => ({
      bucket: resources.s3.Bucket.grucloudTestBasic,
    }),
    properties: get("config.s3.Object.fileTest.properties"),
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
