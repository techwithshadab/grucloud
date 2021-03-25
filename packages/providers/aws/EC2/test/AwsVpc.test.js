const assert = require("assert");
const { get, eq } = require("rubico");
const { find } = require("rubico/x");
const { ConfigLoader } = require("@grucloud/core/ConfigLoader");
const { AwsProvider } = require("../../AwsProvider");
const {
  testPlanDeploy,
  testPlanDestroy,
} = require("@grucloud/core/test/E2ETestUtils");
const { CheckAwsTags } = require("../../AwsTagCheck");

describe("AwsVpc", async function () {
  const vpcName = "vpc-test";
  const types = ["Vpc"];
  let config;
  let provider;
  let vpc;

  const k8sClusterTagKey = `kubernetes.io/cluster/myClusterName`;

  before(async function () {
    try {
      config = ConfigLoader({ path: "../../../examples/multi" });
    } catch (error) {
      this.skip();
    }
    provider = AwsProvider({
      config: () => ({ projectName: "gru-test" }),
    });

    await provider.start();

    vpc = await provider.makeVpc({
      name: vpcName,
      properties: () => ({
        DnsHostnames: true,
        CidrBlock: "10.0.0.0/16",
        Tags: [{ Key: k8sClusterTagKey, Value: "shared" }],
      }),
    });
  });
  after(async () => {});
  it("vpc name", async function () {
    assert.equal(vpc.name, vpcName);
  });

  it.skip("vpc listLives canBeDeleted", async function () {
    const { results } = await provider.listLives({
      options: {
        types,
        canBeDeleted: true,
      },
    });
    assert(isEmpty(results));
  });

  it.skip("vpc apply and destroy", async function () {
    await testPlanDeploy({ provider, types });
    const vpcLive = await vpc.getLive({ deep: true });
    const { VpcId, Tags } = vpcLive;
    assert(VpcId);
    assert(Tags);

    assert(find(eq(get("Key"), k8sClusterTagKey))(vpcLive.Tags));

    assert(
      CheckAwsTags({
        config: provider.config,
        tags: vpcLive.Tags,
        name: vpc.name,
      })
    );
    await testPlanDestroy({ provider, types, full: false });
  });
});