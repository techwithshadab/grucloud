const path = require("path");
const { testEnd2End } = require("@grucloud/core/qa");
const { createStack } = require("../iac");

const title = "K8S Prometheus Module";

describe(title, async function () {
  it("run", async function () {
    await testEnd2End({
      programOptions: { workingDirectory: path.resolve(__dirname, "../") },
      title,
      destroyAll: false,
      steps: [{ createStack, configs: [] }],
    });
  }).timeout(20 * 60e3);
});
