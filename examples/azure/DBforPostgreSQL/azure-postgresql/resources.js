// Generated by 'gc gencode'
const { pipe, tap, get, eq, and } = require("rubico");
const { find } = require("rubico/x");

const createResources = ({ provider }) => {
  provider.DBforPostgreSQL.makeServer({
    name: "db-grucloud-test",
    properties: ({ config }) => ({
      properties: {
        version: "13",
        administratorLogin: "AdminGruCloud",
        administratorLoginPassword: "Admin123!",
        availabilityZone: "2",
        storage: {
          storageSizeGB: 32,
        },
        network: {},
      },
      sku: {
        name: "Standard_B1ms",
        tier: "Burstable",
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["rg-postgres"],
    }),
  });

  provider.DBforPostgreSQL.makeFirewallRule({
    name: "AllowAllAzureServicesAndResourcesWithinAzureIps_2021-12-15_11-18-53",
    properties: ({ config }) => ({
      properties: {
        startIpAddress: "0.0.0.0",
        endIpAddress: "0.0.0.0",
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["rg-postgres"],
      server: resources.DBforPostgreSQL.Server["db-grucloud-test"],
    }),
  });

  provider.DBforPostgreSQL.makeFirewallRule({
    name: "ClientIPAddress_2021-12-15_11-18-52",
    properties: ({ config }) => ({
      properties: {
        startIpAddress: "190.84.119.132",
        endIpAddress: "190.84.119.132",
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["rg-postgres"],
      server: resources.DBforPostgreSQL.Server["db-grucloud-test"],
    }),
  });

  provider.DBforPostgreSQL.makeConfiguration({
    name: "application_name",
    properties: ({ config }) => ({
      properties: {
        value: "starhackit",
        source: "user-override",
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["rg-postgres"],
      server: resources.DBforPostgreSQL.Server["db-grucloud-test"],
    }),
  });

  provider.DBforPostgreSQL.makeConfiguration({
    name: "shared_preload_libraries",
    properties: ({ config }) => ({
      properties: {
        value: "pg_cron,pg_stat_statements",
        source: "user-override",
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["rg-postgres"],
      server: resources.DBforPostgreSQL.Server["db-grucloud-test"],
    }),
  });

  provider.DBforPostgreSQL.makeDatabase({
    name: "postgres",
    properties: ({ config }) => ({
      properties: {
        charset: "UTF8",
        collation: "en_US.utf8",
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["rg-postgres"],
      server: resources.DBforPostgreSQL.Server["db-grucloud-test"],
    }),
  });

  provider.Resources.makeResourceGroup({
    name: "resource-group",
  });

  provider.Resources.makeResourceGroup({
    name: "rg-postgres",
  });
};

exports.createResources = createResources;
