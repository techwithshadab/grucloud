const assert = require("assert");
const { pipe, eq, get, tap, pick, map, assign, omit, any } = require("rubico");

const { defaultsDeep, pluck, flatten, find, callProp } = require("rubico/x");

const logger = require("@grucloud/core/logger")({ prefix: "AzProvider" });
const { getField } = require("@grucloud/core/ProviderCommon");
const { omitIfEmpty } = require("@grucloud/core/Common");
const { tos } = require("@grucloud/core/tos");
const { retryCallOnError } = require("@grucloud/core/Retry");

const { findDependenciesResourceGroup, buildTags } = require("../AzureCommon");
const AzClient = require("../AzClient");

exports.fnSpecs = ({ config }) => {
  const { location } = config;
  const subscriptionId = process.env.SUBSCRIPTION_ID;

  return pipe([
    () => [
      {
        // https://docs.microsoft.com/en-us/rest/api/virtualnetwork/virtual-networks
        // GET, PUT, DELETE, LIST: https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}?api-version=2020-05-01
        // LISTALL                 https://management.azure.com/subscriptions/{subscriptionId}/providers/Microsoft.Network/virtualNetworks?api-version=2020-05-01
        group: "Network",
        type: "VirtualNetwork",
        dependsOn: ["Resources::ResourceGroup"],
        dependencies: () => ({
          resourceGroup: {
            type: "ResourceGroup",
            group: "Resources",
          },
        }),
        filterLive: () =>
          pipe([
            pick(["tags", "properties"]),
            assign({
              properties: pipe([
                get("properties"),
                pick(["addressSpace", "enableDdosProtection"]),
              ]),
            }),
          ]),
        Client: ({ spec }) =>
          AzClient({
            spec,
            methods: {
              get: {
                path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}",
              },
              getAll: {
                path: `/subscriptions/{subscriptionId}/providers/Microsoft.Network/virtualNetworks`,
              },
            },
            apiVersion: "2020-05-01",
            findDependencies: ({ live, lives }) => [
              findDependenciesResourceGroup({ live, lives, config }),
            ],
            config,
            configDefault: ({ properties }) =>
              defaultsDeep({
                location,
                tags: buildTags(config),
              })(properties),
          }),
      },
      {
        // https://docs.microsoft.com/en-us/rest/api/virtualnetwork/network-security-groups
        // GET, PUT, DELETE, LIST: https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkSecurityGroups/{networkSecurityGroupName}?api-version=2020-05-01
        // LISTALL                 https://management.azure.com/subscriptions/{subscriptionId}/providers/Microsoft.Network/networkSecurityGroups?api-version=2020-05-01
        group: "Network",
        type: "SecurityGroup",
        dependsOn: ["Resources::ResourceGroup"],
        dependencies: () => ({
          resourceGroup: {
            type: "ResourceGroup",
            group: "Resources",
          },
        }),
        filterLive: () =>
          pipe([
            pick(["tags", "properties"]),
            assign({
              properties: pipe([
                get("properties"),
                pick(["securityRules"]),
                assign({
                  securityRules: pipe([
                    get("securityRules"),
                    map(
                      pipe([
                        pick(["name", "properties"]),
                        assign({
                          properties: pipe([
                            get("properties"),
                            omit(["provisioningState"]),
                            omitIfEmpty([
                              "destinationAddressPrefixes",
                              "destinationPortRanges",
                              "sourceAddressPrefixes",
                              "sourcePortRanges",
                            ]),
                          ]),
                        }),
                      ])
                    ),
                  ]),
                }),
              ]),
            }),
          ]),
        Client: ({ spec }) =>
          AzClient({
            spec,
            methods: {
              get: {
                path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkSecurityGroups/{name}",
              },
              getAll: {
                path: `/subscriptions/{subscriptionId}/providers/Microsoft.Network/networkSecurityGroups`,
              },
            },
            apiVersion: "2020-05-01",
            config,
            configDefault: ({ properties }) =>
              defaultsDeep({
                location,
                tags: buildTags(config),
              })(properties),
            findDependencies: ({ live, lives }) => [
              findDependenciesResourceGroup({ live, lives, config }),
            ],
          }),
      },
      {
        // https://docs.microsoft.com/en-us/rest/api/virtualnetwork/public-ip-addresses
        // GET, PUT, DELETE, LIST https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPAddresses/{publicIpAddressName}?api-version=2020-05-01
        // LISTALL                https://management.azure.com/subscriptions/{subscriptionId}/providers/Microsoft.Network/publicIPAddresses?api-version=2020-05-01
        group: "Network",
        type: "PublicIpAddress",
        dependsOn: ["Resources::ResourceGroup"],
        dependencies: () => ({
          resourceGroup: {
            type: "ResourceGroup",
            group: "Resources",
          },
        }),
        filterLive: () =>
          pipe([
            pick(["tags", "properties"]),
            assign({
              properties: pipe([
                get("properties"),
                pick([
                  "publicIPAddressVersion",
                  "publicIPAllocationMethod",
                  "idleTimeoutInMinutes",
                ]),
              ]),
            }),
          ]),
        Client: ({ spec }) =>
          AzClient({
            spec,
            methods: {
              get: {
                path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPAddresses/{name}",
              },
              getAll: {
                path: `/subscriptions/{subscriptionId}/providers/Microsoft.Network/publicIPAddresses`,
              },
            },
            apiVersion: "2020-05-01",
            config,
            configDefault: ({ properties, dependencies }) => {
              return defaultsDeep({
                location,
                tags: buildTags(config),
                properties: {},
              })(properties);
            },
            findDependencies: ({ live, lives }) => [
              findDependenciesResourceGroup({ live, lives, config }),
            ],
          }),
      },
      {
        // https://docs.microsoft.com/en-us/rest/api/virtualnetwork/network-interfaces
        // GET, PUT, DELETE, LIST: https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces/{networkInterfaceName}?api-version=2020-05-01
        // LISTALL                 https://management.azure.com/subscriptions/{subscriptionId}/providers/Microsoft.Network/networkInterfaces?api-version=2020-05-01
        group: "Network",
        type: "NetworkInterface",
        dependsOn: [
          "Resources::ResourceGroup",
          "Network::VirtualNetwork",
          "Network::SecurityGroup",
          "Network::PublicIpAddress",
          "Network::Subnet",
        ],
        filterLive: () =>
          pipe([
            pick(["tags", "properties"]),
            assign({
              properties: pipe([
                get("properties"),
                pick(["ipConfigurations"]),
                assign({
                  ipConfigurations: pipe([
                    get("ipConfigurations"),
                    map(
                      pipe([
                        pick(["name", "properties"]),
                        assign({
                          properties: pipe([
                            get("properties"),
                            pick(["privateIPAllocationMethod"]),
                          ]),
                        }),
                      ])
                    ),
                  ]),
                }),
              ]),
            }),
          ]),
        dependencies: () => ({
          resourceGroup: {
            type: "ResourceGroup",
            group: "Resources",
          },
          virtualNetwork: {
            type: "VirtualNetwork",
            group: "Network",
          },
          publicIpAddress: {
            type: "PublicIpAddress",
            group: "Network",
          },
          securityGroup: { type: "SecurityGroup", group: "Network" },
          subnet: { type: "Subnet", group: "Network" },
        }),
        // compare: compare({
        //   filterTarget: pipe([
        //     tap((params) => {
        //       assert(true);
        //     }),
        //   ]),
        //   filterLive: pipe([
        //     tap((params) => {
        //       assert(true);
        //     }),
        //   ]),
        // }),
        Client: ({ spec }) =>
          AzClient({
            spec,
            methods: {
              get: {
                path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces/{name}",
              },
              getAll: {
                path: `/subscriptions/{subscriptionId}/providers/Microsoft.Network/networkInterfaces`,
              },
            },
            apiVersion: "2020-05-01",
            findDependencies: ({ live, lives }) => [
              findDependenciesResourceGroup({ live, lives, config }),
              {
                type: "VirtualNetwork",
                group: "Network",
                ids: pipe([
                  () => live,
                  get("properties.ipConfigurations"),
                  map(
                    pipe([
                      get("properties.subnet.id"),
                      (id) => id.replace(/\/subnet.+$/g, ""),
                    ])
                  ),
                ])(),
              },
              {
                type: "PublicIpAddress",
                group: "Network",
                ids: pipe([
                  () => live,
                  get("properties.ipConfigurations"),
                  pluck("properties"),
                  pluck("publicIPAddress"),
                  pluck("id"),
                ])(),
              },
              {
                type: "SecurityGroup",
                group: "Network",
                ids: [get("properties.networkSecurityGroup.id")(live)],
              },
              {
                type: "Subnet",
                group: "Network",
                ids: pipe([
                  () => live,
                  get("properties.ipConfigurations"),
                  pluck("properties"),
                  pluck("subnet"),
                  pluck("id"),
                ])(),
              },
            ],
            config,
            configDefault: async ({ properties, dependencies }) => {
              const { securityGroup, virtualNetwork, subnet, publicIpAddress } =
                dependencies;
              assert(virtualNetwork, "dependencies is missing virtualNetwork");
              assert(subnet, "dependencies is missing subnet");
              assert(
                publicIpAddress,
                "dependencies is missing publicIpAddress"
              );
              logger.debug(
                `NetworkInterface configDefault ${tos({
                  properties,
                  subnet,
                  virtualNetwork,
                })}`
              );

              return defaultsDeep({
                location,
                tags: buildTags(config),
                properties: {
                  ...(securityGroup && {
                    networkSecurityGroup: {
                      id: getField(securityGroup, "id"),
                    },
                  }),
                  ipConfigurations: [
                    {
                      properties: {
                        subnet: {
                          id: getField(subnet, "id"),
                        },
                        ...(publicIpAddress && {
                          publicIPAddress: {
                            id: getField(publicIpAddress, "id"),
                          },
                        }),
                      },
                    },
                  ],
                },
              })(properties);
            },
          }),
      },
      // GET https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/Network/{virtualNetworkName}/subnets?api-version=2021-02-01
      // DELETE https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/Network/{virtualNetworkName}/subnets/{subnetName}?api-version=2021-04-01
      {
        group: "Network",
        type: "Subnet",
        dependsOn: ["Network::VirtualNetwork"],
        dependsOnList: ["Network::VirtualNetwork"],
        dependencies: () => ({
          resourceGroup: {
            type: "ResourceGroup",
            group: "Resources",
          },
          virtualNetwork: {
            type: "VirtualNetwork",
            group: "Network",
          },
        }),
        isOurMinion: ({ live, lives }) =>
          pipe([
            () =>
              lives.getByType({
                providerName: config.providerName,
                type: "VirtualNetwork",
                group: "Network",
              }),
            find(
              pipe([
                get("live.properties.subnets"),
                any(eq(get("id"), live.id)),
              ])
            ),
            get("managedByUs"),
          ])(),

        filterLive: () =>
          pipe([
            pick(["properties"]),
            assign({
              properties: pipe([get("properties"), pick(["addressPrefix"])]),
            }),
          ]),
        Client: ({ spec, config }) =>
          AzClient({
            findDependencies: ({ live, lives }) => [
              findDependenciesResourceGroup({ live, lives, config }),
              {
                type: "VirtualNetwork",
                group: "Network",
                ids: [
                  pipe([
                    () => live,
                    get("id"),
                    callProp("split", "/"),
                    (arr) => arr[8],
                    (virtualNetwork) =>
                      lives.getByName({
                        name: virtualNetwork,
                        providerName: config.providerName,
                        type: "VirtualNetwork",
                        group: "Network",
                      }),
                    get("id"),
                  ])(),
                ],
              },
            ],
            getList: ({ axios }) =>
              pipe([
                tap((params) => {
                  assert(true);
                }),
                ({ lives }) =>
                  lives.getByType({
                    providerName: config.providerName,
                    type: "VirtualNetwork",
                    group: "Network",
                  }),
                pluck("live"),
                pluck("properties"),
                pluck("subnets"),
                flatten,
              ]),
            getByName:
              ({ axios }) =>
              ({ name, dependencies }) =>
                pipe([
                  dependencies,
                  tap(({ resourceGroup, virtualNetwork }) => {
                    assert(resourceGroup);
                    assert(virtualNetwork);
                  }),
                  ({ resourceGroup, virtualNetwork }) =>
                    `https://management.azure.com/subscriptions/${subscriptionId}/resourceGroups/${resourceGroup.name}/providers/Microsoft.Network/virtualNetworks/${virtualNetwork.name}/subnets/${name}?api-version=2021-02-01`,
                  (path) =>
                    retryCallOnError({
                      name: `getByName subnet ${path}`,
                      fn: () => axios.get(path),
                      config,
                    }),
                  get("data"),
                  tap((data) => {
                    logger.debug(`getByName subnet ${tos(data)}`);
                  }),
                ])(),
            spec,
            methods: {
              get: {
                path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}",
              },
            },
            apiVersion: "2021-02-01",
            config,
            configDefault: ({ properties, dependencies }) => {
              return defaultsDeep({
                properties: {},
              })(properties);
            },
          }),
      },
    ],
  ])();
};
