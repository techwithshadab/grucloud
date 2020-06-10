const { Command } = require("commander");
const { flatten, isEmpty, ifElse, identity, tap } = require("ramda");
const { pipe } = require("rubico");
const { createInfra } = require("./infra");
const collect = (value, previous = []) => previous.concat([value]);

exports.createProgram = ({ version, commands }) => {
  const program = new Command();
  program.storeOptionsAsProperties(false);
  program.passCommandToAction(false);
  program.allowUnknownOption(); // For testing
  program.version(version);
  program.option("-i, --infra <file>", "infrastructure default is iac.js");
  program.option("-c, --config <file>", "config file, default is config.js");

  const infraOptions = ({ infra, config }) => ({
    infraFileName: infra,
    configFileName: config,
  });

  program
    .command("plan")
    .description("Query the plan")
    .alias("p")
    .action(async () => {
      await pipe([
        (program) => program.opts(),
        infraOptions,
        createInfra,
        async (infra) => await commands.planQuery({ infra }),
      ])(program);
    });

  program
    .command("deploy")
    .description("Deploy the resources")
    .option("-f, --force", "force deploy, will not prompt user")
    .action(async (options) => {
      await pipe([
        (program) => program.opts(),
        infraOptions,
        createInfra,
        async (infra) =>
          await commands.planDeploy({
            infra,
            options,
          }),
      ])(program);
    });

  program
    .command("destroy")
    .description("Destroy the resources")
    .alias("d")
    .option("-f, --force", "force destroy, will not prompt user")
    .option(
      "-t, --types <type>",
      "Filter by type, multiple values allowed",
      collect
    )
    .option(
      "-a, --all",
      "destroy all resources including those not managed by us"
    )
    .option("-n, --name <value>", "destroy by name")
    .option("--id <value>", "destroy by id")
    .action(async (options) => {
      await pipe([
        (program) => program.opts(),
        infraOptions,
        createInfra,
        async (infra) =>
          await commands.planDestroy({
            infra,
            options,
          }),
      ])(program);
    });

  program
    .command("list")
    .description("List the resources")
    .alias("l")
    .option("-a, --all", "List also read-only resources")
    .option("-n, --name <value>", "List by name")
    .option("--id <value>", "List by id")
    .option(
      "-t, --types <value>",
      "Filter by type, multiple values allowed",
      collect
    )
    .option("-o, --our", "List only our managed resources")
    .option(
      "-d, --canBeDeleted",
      "display resources which can be deleted, a.k.a non default resources"
    )
    .action(async (options) => {
      await pipe([
        (program) => program.opts(),
        infraOptions,
        createInfra,
        async (infra) =>
          await commands.list({
            infra,
            options,
          }),
      ])(program);
    });

  return program;
};
