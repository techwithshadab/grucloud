// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

const createResources = ({ provider }) => {
  provider.Network.makeAzureFirewall({
    name: "rg-firewall::firewall",
    properties: ({ getId }) => ({
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
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["rg-firewall"],
      subnets: [
        resources.Network.Subnet[
          "rg-firewall::virtual-network::azurefirewallsubnet"
        ],
      ],
      publicIpAddresses: [
        resources.Network.PublicIPAddress["rg-firewall::ip-address"],
      ],
      firewallPolicy:
        resources.Network.FirewallPolicy["rg-firewall::firewall-policy"],
    }),
  });

  provider.Network.makeFirewallPolicy({
    name: "rg-firewall::firewall-policy",
    properties: ({}) => ({
      properties: {
        threatIntelMode: "Alert",
        sku: {
          tier: "Standard",
        },
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["rg-firewall"],
    }),
  });

  provider.Network.makePublicIPAddress({
    name: "rg-firewall::ip-address",
    properties: ({}) => ({
      sku: {
        name: "Standard",
      },
      properties: {
        publicIPAllocationMethod: "Static",
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["rg-firewall"],
    }),
  });

  provider.Network.makeSubnet({
    name: "rg-firewall::virtual-network::azurefirewallsubnet",
    properties: ({}) => ({
      name: "azurefirewallsubnet",
      properties: {
        addressPrefix: "10.0.0.0/24",
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["rg-firewall"],
      virtualNetwork:
        resources.Network.VirtualNetwork["rg-firewall::virtual-network"],
    }),
  });

  provider.Network.makeVirtualNetwork({
    name: "rg-firewall::virtual-network",
    properties: ({}) => ({
      properties: {
        addressSpace: {
          addressPrefixes: ["10.0.0.0/16"],
        },
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["rg-firewall"],
    }),
  });

  provider.Resources.makeResourceGroup({
    name: "rg-firewall",
  });
};

exports.createResources = createResources;
