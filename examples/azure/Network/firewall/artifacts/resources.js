// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

const createResources = ({ provider }) => {
  provider.Network.makeAzureFirewall({
    properties: ({ getId }) => ({
      name: "firewall",
      properties: {
        sku: {
          name: "AZFW_VNet",
          tier: "Standard",
        },
        threatIntelMode: "Alert",
        additionalProperties: {},
        ipConfigurations: [
          {
            name: "ip-address",
            properties: {
              subnet: {
                id: getId({
                  type: "Subnet",
                  group: "Network",
                  name: "rg-firewall::virtual-network::azurefirewallsubnet",
                }),
              },
              publicIPAddress: {
                id: getId({
                  type: "PublicIPAddress",
                  group: "Network",
                  name: "rg-firewall::ip-address",
                }),
              },
            },
          },
        ],
        networkRuleCollections: [],
        applicationRuleCollections: [],
        natRuleCollections: [],
        firewallPolicy: {
          id: getId({
            type: "FirewallPolicy",
            group: "Network",
            name: "rg-firewall::firewall-policy",
          }),
        },
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-firewall",
      subnets: ["rg-firewall::virtual-network::azurefirewallsubnet"],
      publicIpAddresses: ["rg-firewall::ip-address"],
      firewallPolicy: "rg-firewall::firewall-policy",
    }),
  });

  provider.Network.makeFirewallPolicy({
    properties: ({}) => ({
      name: "firewall-policy",
      properties: {
        threatIntelMode: "Alert",
        sku: {
          tier: "Standard",
        },
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-firewall",
    }),
  });

  provider.Network.makePublicIPAddress({
    properties: ({}) => ({
      name: "ip-address",
      sku: {
        name: "Standard",
      },
      properties: {
        publicIPAllocationMethod: "Static",
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-firewall",
    }),
  });

  provider.Network.makeSubnet({
    properties: ({}) => ({
      name: "azurefirewallsubnet",
      properties: {
        addressPrefix: "10.0.0.0/24",
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-firewall",
      virtualNetwork: "rg-firewall::virtual-network",
    }),
  });

  provider.Network.makeVirtualNetwork({
    properties: ({}) => ({
      name: "virtual-network",
      properties: {
        addressSpace: {
          addressPrefixes: ["10.0.0.0/16"],
        },
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-firewall",
    }),
  });

  provider.Resources.makeResourceGroup({
    properties: ({}) => ({
      name: "rg-firewall",
    }),
  });
};

exports.createResources = createResources;