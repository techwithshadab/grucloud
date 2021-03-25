const assert = require("assert");
const { GoogleProvider } = require("../GoogleProvider");
const { ConfigLoader } = require("@grucloud/core/ConfigLoader");

const {
  testPlanDeploy,
  testPlanDestroy,
} = require("@grucloud/core/test/E2ETestUtils");

describe("GoogleAddress", async function () {
  const addressName = "myaddress-test";
  const types = ["Address"];
  let config;
  let provider;
  let address;
  before(async function () {
    try {
      config = ConfigLoader({ path: "../../../examples/multi" });
    } catch (error) {
      this.skip();
    }
    provider = GoogleProvider({
      name: "google",
      config: () => ({
        projectId: () => "grucloud-e2e",
        projectName: () => "grucloud-e2e",
      }),
    });

    await provider.start();

    address = await provider.makeAddress({ name: addressName });
  });
  after(async () => {});
  it("address config", async function () {
    const config = await address.resolveConfig();
    assert(config);
    assert.equal(config.name, addressName);
    assert.equal(config.description, provider.config.managedByDescription);
  });
  it.skip("apply and destroy", async function () {
    await testPlanDeploy({ provider, types });
    await testPlanDestroy({ provider, types });
  });
});