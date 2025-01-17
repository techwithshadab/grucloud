const assert = require("assert");
const path = require("path");
const { testEnd2End } = require("@grucloud/core/qa");

const { createStack } = require("../iac");
const config = require("../config.js");

describe("ECR Repository", async function () {
  it("run repository", async function () {
    await testEnd2End({
      programOptions: { workingDirectory: path.resolve(__dirname, "../") },
      outputDir: "artifacts",
      steps: [
        { createStack, configs: [config] },
        {
          createStack,
          createResources: require("./resourcesUpdate1").createResources,
          configs: [config],
        },
        {
          createStack,
          createResources: require("./resourcesUpdate2").createResources,
          configs: [config],
        },
        { createStack, configs: [config] },
      ],
    });
  });
});
