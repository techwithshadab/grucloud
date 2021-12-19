const assert = require("assert");
const path = require("path");

const { pipe, tap } = require("rubico");
const { groupBy } = require("rubico/x");
const { listSwaggerFiles, processSwagger } = require("../AzureRestApi");

describe("AzureRestApi", function () {
  before(async function () {});

  it("processSwagger compute", async function () {
    await pipe([
      () => ({
        name: "compute.json",
      }),
      processSwagger({
        dir: path.resolve(
          process.cwd(),
          "azure-rest-api-specs/specification/",
          "compute/resource-manager/Microsoft.Compute/stable/2021-07-01"
        ),
        group: "Microsoft.Compute",
        groupDir: "compute",
        versionDir: "2021-07-01",
      }),
      tap((params) => {
        assert(true);
      }),
    ])();
  });
  it("processSwagger webapp", async function () {
    await pipe([
      () => ({
        name: "WebApps.json",
      }),
      processSwagger({
        dir: path.resolve(
          process.cwd(),
          "azure-rest-api-specs/specification/",
          "web/resource-manager/Microsoft.Web/stable/2021-02-01"
        ),
        group: "Microsoft.Web",
        groupDir: "web",
        versionDir: "2021-02-01",
      }),
      tap((params) => {
        assert(true);
      }),
    ])();
  });
  it("listSwaggerFiles all", async function () {
    await pipe([
      () => ({
        directory: process.cwd(),
      }),
      listSwaggerFiles,
      tap((params) => {
        assert(true);
      }),
      //groupBy("group"),
      tap((params) => {
        assert(true);
      }),
    ])();
  });
  it.only("listSwaggerFiles", async function () {
    await pipe([
      () => ({
        directory: process.cwd(),
        filterDirs: [
          "compute",
          "containerservice",
          "operationalinsights",
          "postgresql",
          "network",
          "web",
        ],
      }),
      listSwaggerFiles,
      tap((params) => {
        assert(true);
      }),
    ])();
  });
});
