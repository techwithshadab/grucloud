const assert = require("assert");
const { GoogleProvider } = require("../GoogleProvider");
const { ConfigLoader } = require("@grucloud/core/ConfigLoader");

const {
  testPlanDeploy,
  testPlanDestroy,
} = require("@grucloud/core/test/E2ETestUtils");

describe("GcpFirewall", async function () {
  const firewallName = "firewall-web-test";

  let config;
  let provider;
  let network;
  let firewall;

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

    network = await provider.makeNetwork({
      name: "network",
      properties: () => ({ autoCreateSubnetworks: true }),
    });

    firewall = await provider.makeFirewall({
      name: firewallName,
      dependencies: { network },
      properties: () => ({
        allowed: [
          {
            IPProtocol: "TCP",
            ports: [80, 433],
          },
        ],
      }),
    });
  });
  after(async () => {});
  it("firewall config", async function () {
    const config = await firewall.resolveConfig();
    assert(config);
    assert.equal(config.name, firewallName);
    assert.equal(config.description, provider.config.managedByDescription);
  });
  it.skip("firewall apply and destroy", async function () {
    await testPlanDeploy({ provider });

    const networkLive = await network.getLive();
    const firewallLive = await firewall.getLive();
    assert(firewallLive.allowed);
    assert.equal(firewallLive.network, networkLive.selfLink);

    await testPlanDestroy({ provider });
  });
});