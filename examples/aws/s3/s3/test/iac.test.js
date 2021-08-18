const assert = require("assert");
const path = require("path");

const { Cli, testEnd2End } = require("@grucloud/core/cli/cliCommands");
const { createStack } = require("../iac");
const config = require("../config");

describe("S3 Example", async function () {
  before(async function () {});
  it("run", async function () {
    const programOptions = { workingDirectory: path.resolve(__dirname, "../") };

    const cli = await Cli({ programOptions, createStack, config });

    await testEnd2End({
      cli,
      listOptions: {},
    });
  });
});