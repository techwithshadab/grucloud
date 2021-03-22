const { pipe, map } = require("rubico");

const { AwsProvider } = require("@grucloud/core");

const createResources = async ({ provider }) => {
  const maxBuckets = 2;
  const resources = await pipe([
    (maxBuckets) =>
      Array(maxBuckets)
        .fill("")
        .reduce(
          (acc, value, index) => [...acc, `grucloud-bucket-${index}`],
          []
        ),
    (buckets) =>
      map((bucket) =>
        provider.makeS3Bucket({
          name: bucket,
          properties: () => ({}),
        })
      )(buckets),
  ])(maxBuckets);

  return resources;
};

exports.createResources = createResources;

exports.createStack = async () => {
  const provider = AwsProvider({ config: require("./config") });
  const resources = await createResources({ provider });
  return { provider, resources };
};
