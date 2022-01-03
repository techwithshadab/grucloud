const assert = require("assert");
const { pipe, not, get, tap, pick, map, assign, omit } = require("rubico");
const { defaultsDeep, pluck, isEmpty } = require("rubico/x");

const { getField } = require("@grucloud/core/ProviderCommon");
const { omitIfEmpty } = require("@grucloud/core/Common");
const { buildTags } = require("../AzureCommon");

const group = "Compute";

exports.fnSpecs = ({ config }) =>
  pipe([
    () => [
      {
        type: "Disk",
        managedByOther: pipe([get("live.managedBy"), not(isEmpty)]),
        // dependencies: {
        //   resourceGroup: {
        //     type: "ResourceGroup",
        //     group: "Resources",
        //     name: "resourceGroupName",
        //   },
        //   diskAccess: {
        //     type: "DiskAccess",
        //     group: "Compute",
        //     createOnly: true,
        //     optional: true,
        //   },
        //   image: {
        //     type: "Image",
        //     group: "Compute",
        //     createOnly: true,
        //     optional: true,
        //   },
        //   diskEncryptionSet: {
        //     type: "DiskEncryptionSet",
        //     group: "Compute",
        //     createOnly: true,
        //     optional: true,
        //   },
        // },
        findDependencies: ({ live, lives }) => [
          findDependenciesResourceGroup({ live, lives, config }),
          {
            type: "DiskAccess",
            group: "Compute",
            ids: [pipe([() => live, get("properties.diskAccessId")])()],
          },
          {
            type: "Image",
            group: "Compute",
            ids: [
              pipe([
                () => live,
                get("properties.creationData.imageReference.id"),
              ])(),
            ],
          },
          {
            type: "DiskEncryptionSet",
            group: "Compute",
            ids: [
              pipe([
                () => live,
                get("properties.encryption.diskEncryptionSetId"),
              ])(),
            ],
          },
        ],
        configDefault: ({
          properties,
          dependencies: { diskAccess, image, diskEncryptionSet },
        }) =>
          pipe([
            () => properties,
            defaultsDeep({
              location,
              tags: buildTags(config),
              properties: {
                ...(diskAccess && { diskAccessId: getField(key, "id") }),
                ...(image && {
                  creationData: {
                    createOption: "FromImage",
                    imageReference: {
                      id: getField(image, "id"),
                    },
                  },
                }),
                ...(diskEncryptionSet && {
                  encryption: {
                    diskEncryptionSetId: getField(key, "diskEncryptionSet"),
                  },
                }),
              },
            }),
          ])(),
      },
      {
        type: "DiskEncryptionSet",
        dependencies: {
          resourceGroup: {
            type: "ResourceGroup",
            group: "Resources",
            name: "resourceGroupName",
          },
          vault: {
            type: "Vault",
            group: "KeyVault",
            createOnly: true,
          },
          key: {
            type: "Key",
            group: "KeyVault",
            createOnly: true,
          },
        },
        findDependencies: ({ live, lives }) => [
          findDependenciesResourceGroup({ live, lives, config }),
          {
            type: "Vault",
            group: "KeyVault",
            ids: [
              pipe([() => live, get("properties.activeKey.sourceVault")])(),
            ],
          },
          {
            type: "Key",
            group: "KeyVault",
            ids: [
              pipe([
                () => live,
                get("properties.activeKey.keyUrl"),
                (keyUrl) =>
                  pipe([
                    tap((params) => {
                      assert(true);
                    }),
                    () =>
                      lives.getByType({
                        type: "Key",
                        group: "KeyVault",
                        providerName: config.providerName,
                      }),
                    //TODO check
                    find(eq(get("live.keyUrl"), keyUrl)),
                    get("id"),
                  ])(),
              ])(),
            ],
          },
        ],
        configDefault: ({ properties, dependencies: { vault, key } }) =>
          pipe([
            () => properties,
            defaultsDeep({
              location,
              tags: buildTags(config),
              properties: {
                activeKey: {
                  ...(vault && {
                    sourceVault: {
                      id: getField(vault, "id"),
                    },
                  }),
                  ...(key && { keyUrl: getField(key, "keyUri") }),
                },
              },
            }),
          ])(),
      },
      {
        // https://docs.microsoft.com/en-us/rest/api/compute/virtual-machines
        type: "VirtualMachine",
        // dependencies: {
        //   resourceGroup: {
        //     type: "ResourceGroup",
        //     group: "Resources",
        //     name: "resourceGroupName",
        //   },
        //   //TODO
        //   // CapacityGroup
        //   // ManagedIdentities
        //   // GalleryImage
        //   networkInterface: {
        //     type: "NetworkInterface",
        //     group: "Network",
        //     createOnly: true,
        //   },
        // },
        environmentVariables: [
          {
            path: "properties.osProfile.adminPassword",
            suffix: "ADMIN_PASSWORD",
          },
        ],
        propertiesDefault: {
          properties: {
            osProfile: {
              linuxConfiguration: {
                disablePasswordAuthentication: false,
                provisionVMAgent: true,
                patchSettings: {
                  patchMode: "ImageDefault",
                  assessmentMode: "ImageDefault",
                },
              },
              allowExtensionOperations: true,
            },
          },
        },
        filterLive: () =>
          pipe([
            tap((params) => {
              assert(true);
            }),
            pick(["tags", "properties"]),
            assign({
              properties: pipe([
                get("properties"),
                pick([
                  "hardwareProfile",
                  "storageProfile.imageReference",
                  "osProfile",
                ]),
                omitIfEmpty(["osProfile.secrets"]),
                omit([
                  "osProfile.requireGuestProvisionSignal",
                  "storageProfile.imageReference.exactVersion",
                ]),
              ]),
            }),
          ]),
        omitProperties: [
          "properties.osProfile.adminPassword",
          "properties.storageProfile",
          "properties.osProfile",
        ],
        findDependencies: ({ live, lives }) => [
          {
            //TODO replace with findDependenciesResourceGroup
            type: "ResourceGroup",
            group: "Resources",
            ids: pipe([
              () => [
                live.id
                  .replace(`/providers/${live.type}/${live.name}`, "")
                  .toLowerCase()
                  .replace("resourcegroups", "resourceGroups"),
              ],
            ])(),
          },
          {
            type: "NetworkInterface",
            group: "Network",
            ids: pipe([
              () => live,
              get("properties.networkProfile.networkInterfaces"),
              pluck("id"),
            ])(),
          },
          {
            type: "Disk",
            group: "Compute",
            ids: [
              pipe([
                () => live,
                get("properties.storageProfile.osDisk.managedDisk.id"),
              ])(),
            ],
          },
        ],
        configDefault: ({ properties, dependencies }) => {
          const { networkInterface } = dependencies;
          assert(
            networkInterface,
            "networkInterfaces is missing VirtualMachine"
          );
          return defaultsDeep({
            location: config.location,
            tags: buildTags(config),
            properties: {
              networkProfile: {
                networkInterfaces: [
                  {
                    id: getField(networkInterface, "id"),
                  },
                ],
              },
            },
          })(properties);
        },
      },
    ],
    map(defaultsDeep({ group })),
  ])();
