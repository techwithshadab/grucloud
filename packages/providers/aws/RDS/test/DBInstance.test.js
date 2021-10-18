const assert = require("assert");
const { AwsProvider } = require("../../AwsProvider");
const { pipe, tap } = require("rubico");

describe("DBInstance", async function () {
  let config;
  let provider;
  let cluster;

  before(async function () {
    provider = AwsProvider({ config });
    cluster = provider.getClient({ groupType: "RDS::DBInstance" });
    await provider.start();
  });
  it(
    "list",
    pipe([
      () => cluster.getList(),
      tap(({ items }) => {
        assert(Array.isArray(items));
      }),
    ])
  );
  it(
    "delete with invalid id",
    pipe([
      () =>
        cluster.destroy({
          live: { DBInstanceIdentifier: "instance-12345" },
        }),
    ])
  );
  it(
    "getByName with invalid id",
    pipe([
      () =>
        cluster.getByName({
          name: "124",
        }),
    ])
  );
});