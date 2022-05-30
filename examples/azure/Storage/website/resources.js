// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "ResourceGroup",
    group: "Resources",
    properties: ({}) => ({
      name: "rg-storage-web",
    }),
  },
  {
    type: "Blob",
    group: "Storage",
    properties: ({}) => ({
      name: "index.html",
      properties: {
        contentType: "text/html",
      },
      source: "assets/index.html",
    }),
    dependencies: ({}) => ({
      resourceGroup: "rg-storage-web",
      container: "rg-storage-web::gcstorageweb::$web",
    }),
  },
  {
    type: "BlobContainer",
    group: "Storage",
    properties: ({}) => ({
      name: "$web",
      properties: {
        defaultEncryptionScope: "$account-encryption-key",
        denyEncryptionScopeOverride: false,
        publicAccess: "None",
        immutableStorageWithVersioning: {
          enabled: false,
        },
      },
    }),
    dependencies: ({}) => ({
      resourceGroup: "rg-storage-web",
      account: "rg-storage-web::gcstorageweb",
    }),
  },
  {
    type: "BlobServiceProperties",
    group: "Storage",
    properties: ({}) => ({
      properties: {
        staticWebsite: {
          enabled: true,
          indexDocument: "index.html",
        },
        deleteRetentionPolicy: {
          enabled: true,
          days: 7,
        },
      },
    }),
    dependencies: ({}) => ({
      resourceGroup: "rg-storage-web",
      account: "rg-storage-web::gcstorageweb",
    }),
  },
  {
    type: "StorageAccount",
    group: "Storage",
    properties: ({ config }) => ({
      name: "gcstorageweb",
      kind: "StorageV2",
      sku: {
        name: "Standard_RAGRS",
      },
      location: config.location,
      properties: {
        encryption: {
          services: {
            blob: {
              enabled: true,
              keyType: "Account",
            },
            file: {
              enabled: true,
              keyType: "Account",
            },
          },
          requireInfrastructureEncryption: false,
        },
        networkAcls: {},
        accessTier: "Hot",
        supportsHttpsTrafficOnly: true,
        allowBlobPublicAccess: true,
        minimumTlsVersion: "TLS1_2",
        allowSharedKeyAccess: true,
        allowCrossTenantReplication: true,
        defaultToOAuthAuthentication: false,
      },
    }),
    dependencies: ({}) => ({
      resourceGroup: "rg-storage-web",
    }),
  },
];
