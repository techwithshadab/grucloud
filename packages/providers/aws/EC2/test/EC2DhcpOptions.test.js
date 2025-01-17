const assert = require("assert");
const { AwsProvider } = require("../../AwsProvider");
const { pipe, tap } = require("rubico");

describe("EC2 DhcpOptions", async function () {
  let config;
  let provider;
  let dhcpOptions;

  before(async function () {
    provider = await AwsProvider({ config });
    await provider.start();
    dhcpOptions = provider.getClient({
      groupType: "EC2::DhcpOptions",
    });
  });
  it(
    "list",
    pipe([
      () => dhcpOptions.getList(),
      tap(({ items }) => {
        assert(Array.isArray(items));
      }),
    ])
  );
  it(
    "delete with invalid id",
    pipe([
      () =>
        dhcpOptions.destroy({
          live: {
            DhcpOptionsId: "dopt-036a6462c18e0cce1",
          },
        }),
    ])
  );
  it(
    "getById with invalid id",
    pipe([
      () =>
        dhcpOptions.getById({
          DhcpOptionsId: "dopt-036a6462c18e0cce1",
        }),
    ])
  );
  it(
    "getByName with invalid id",
    pipe([
      () =>
        dhcpOptions.getByName({
          name: "a123",
          config: {},
        }),
    ])
  );
});
