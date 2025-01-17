// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "VirtualMachineScaleSet",
    group: "Compute",
    properties: ({ getId }) => ({
      name: "vm-scale-set",
      sku: {
        name: "Standard_B1ls",
        tier: "Standard",
        capacity: 2,
      },
      properties: {
        singlePlacementGroup: true,
        upgradePolicy: {
          mode: "Manual",
          rollingUpgradePolicy: {
            maxBatchInstancePercent: 20,
            maxUnhealthyInstancePercent: 20,
            maxUnhealthyUpgradedInstancePercent: 20,
            pauseTimeBetweenBatches: "PT0S",
          },
        },
        virtualMachineProfile: {
          osProfile: {
            computerNamePrefix: "vm-scale-",
            adminUsername: "ops",
            linuxConfiguration: {
              disablePasswordAuthentication: true,
              ssh: {
                publicKeys: [
                  {
                    path: "/home/ops/.ssh/authorized_keys",
                    keyData:
                      "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC/+ZCfuXkRdiRcNjERsbmuqtKBY+ctRVd/q06VNRGxqAGI+DGnc55eMxvhh1ptdjuNg6HA7yufumrj9AmxrKEtGmRfseeVUy3th7FphEKKYCkpb8zxIEdfRr5r374gl3QxrxeKzk2YgsCQAfwfaD+ZlNQyKHWgnfwFCGEh3ciL5eSQP5xittjJap35l17kwygtCYxPcA+5DlAjDtonLGzypw/Bnb8U6TutWiHsK5Jx4iYVo4rsPmy6MsTZUx0gAKf0jvRpROK4TOHUAfio05jxfDVfE2hOZAvYFas5fKOCI8in/xaVy/hoW3rFU7OvPWfyNv7+5IE6ytI59c5e9PMXJ9IVcQmiPkfTfK91YsYcyknf6SXdTjs0aPWRpCp+UpDr98qt8xqTMujI1RA075719T1I3OUO7+w/prFLUPkEHbOLnfJ1kzam6kX87OkEG6OwIqR3A7Sw1q3EmRfDppzBOw8Oaapla+52DMLeJ6j1eLNLyBcsrgVTbOLYyZXbORMLvr0FwiAmbUPBSPKFIT12N10dElScihA2YI1g6SS5nNZAiyU16T0zL9teXYEYlupXo7T5Dc44m7xiiuzx4xibh8MprUTDUKoHSmTTSZ9psggaYcrZZQKmO8P7Et8t44iEyZ7W8xpByHxRrqmuCrqx9dIopk8fXhnQA/sP/EbX5Q== frederic.heem@gmail.com",
                  },
                ],
              },
              provisionVMAgent: true,
              enableVMAgentPlatformUpdates: false,
            },
            allowExtensionOperations: true,
            adminPassword: process.env.RG_AG_VM_SCALE_SET_ADMIN_PASSWORD,
          },
          storageProfile: {
            osDisk: {
              osType: "Linux",
              createOption: "FromImage",
              caching: "ReadWrite",
              managedDisk: {
                storageAccountType: "Premium_LRS",
              },
              diskSizeGB: 30,
            },
            imageReference: {
              publisher: "Canonical",
              offer: "UbuntuServer",
              sku: "18.04-LTS",
              version: "latest",
            },
          },
          networkProfile: {
            networkInterfaceConfigurations: [
              {
                name: "vmsca7f3dNic",
                properties: {
                  primary: true,
                  enableAcceleratedNetworking: false,
                  networkSecurityGroup: {
                    id: getId({
                      type: "NetworkSecurityGroup",
                      group: "Network",
                      name: "rg-ag::security-group",
                    }),
                  },
                  dnsSettings: {
                    dnsServers: [],
                  },
                  enableIPForwarding: false,
                  ipConfigurations: [
                    {
                      name: "vmsca7f3dIPConfig",
                      properties: {
                        subnet: {
                          id: getId({
                            type: "Subnet",
                            group: "Network",
                            name: "rg-ag::virtual-network::subnet",
                          }),
                        },
                        privateIPAddressVersion: "IPv4",
                        applicationGatewayBackendAddressPools: [
                          {
                            id: getId({
                              type: "ApplicationGateway",
                              group: "Network",
                              name: "rg-ag::ag",
                              suffix:
                                "/backendAddressPools/appGatewayBackendPool",
                            }),
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        overprovision: true,
        doNotRunExtensionsOnOverprovisionedVMs: false,
      },
    }),
    dependencies: ({}) => ({
      resourceGroup: "rg-ag",
      networkSecurityGroups: ["rg-ag::security-group"],
      subnets: ["rg-ag::virtual-network::subnet"],
      applicationGateways: ["rg-ag::ag"],
    }),
  },
  {
    type: "ApplicationGateway",
    group: "Network",
    properties: ({ config, getId }) => ({
      name: "ag",
      properties: {
        sku: {
          name: "Standard_v2",
          tier: "Standard_v2",
          capacity: 2,
        },
        gatewayIPConfigurations: [
          {
            name: "appGatewayFrontendIP",
            properties: {
              subnet: {
                id: `${getId({
                  type: "Subnet",
                  group: "Network",
                  name: "rg-ag::virtual-network::subnet_ag",
                })}`,
              },
            },
          },
        ],
        frontendIPConfigurations: [
          {
            name: "appGatewayFrontendIP",
            properties: {
              publicIPAddress: {
                id: getId({
                  type: "PublicIPAddress",
                  group: "Network",
                  name: "rg-ag::ip-address",
                }),
              },
            },
          },
        ],
        frontendPorts: [
          {
            name: "appGatewayFrontendPort",
            properties: {
              port: 80,
            },
          },
        ],
        backendAddressPools: [
          {
            name: "appGatewayBackendPool",
            properties: {},
          },
        ],
        backendHttpSettingsCollection: [
          {
            name: "appGatewayBackendHttpSettings",
            properties: {
              port: 80,
              protocol: "Http",
              cookieBasedAffinity: "Disabled",
              connectionDraining: {
                enabled: false,
                drainTimeoutInSec: 1,
              },
              pickHostNameFromBackendAddress: false,
              requestTimeout: 30,
            },
          },
        ],
        httpListeners: [
          {
            name: "appGatewayHttpListener",
            properties: {
              frontendIPConfiguration: {
                id: `/subscriptions/${config.subscriptionId}/resourceGroups/rg-ag/providers/Microsoft.Network/applicationGateways/ag/frontendIPConfigurations/appGatewayFrontendIP`,
              },
              frontendPort: {
                id: `/subscriptions/${config.subscriptionId}/resourceGroups/rg-ag/providers/Microsoft.Network/applicationGateways/ag/frontendPorts/appGatewayFrontendPort`,
              },
              protocol: "Http",
              hostNames: [],
              requireServerNameIndication: false,
            },
          },
        ],
        requestRoutingRules: [
          {
            name: "rule1",
            properties: {
              ruleType: "Basic",
              priority: 1,
              httpListener: {
                id: `/subscriptions/${config.subscriptionId}/resourceGroups/rg-ag/providers/Microsoft.Network/applicationGateways/ag/httpListeners/appGatewayHttpListener`,
              },
              backendAddressPool: {
                id: `/subscriptions/${config.subscriptionId}/resourceGroups/rg-ag/providers/Microsoft.Network/applicationGateways/ag/backendAddressPools/appGatewayBackendPool`,
              },
              backendHttpSettings: {
                id: `/subscriptions/${config.subscriptionId}/resourceGroups/rg-ag/providers/Microsoft.Network/applicationGateways/ag/backendHttpSettingsCollection/appGatewayBackendHttpSettings`,
              },
            },
          },
        ],
      },
    }),
    dependencies: ({}) => ({
      resourceGroup: "rg-ag",
      subnets: ["rg-ag::virtual-network::subnet_ag"],
      publicIpAddresses: ["rg-ag::ip-address"],
    }),
  },
  {
    type: "NetworkSecurityGroup",
    group: "Network",
    properties: ({}) => ({
      name: "security-group",
      properties: {
        securityRules: [],
      },
    }),
    dependencies: ({}) => ({
      resourceGroup: "rg-ag",
    }),
  },
  {
    type: "PublicIPAddress",
    group: "Network",
    properties: ({}) => ({
      name: "ip-address",
      sku: {
        name: "Standard",
      },
      properties: {
        publicIPAllocationMethod: "Static",
      },
    }),
    dependencies: ({}) => ({
      resourceGroup: "rg-ag",
    }),
  },
  {
    type: "Subnet",
    group: "Network",
    properties: ({}) => ({
      name: "subnet",
      properties: {
        addressPrefix: "10.0.0.0/24",
      },
    }),
    dependencies: ({}) => ({
      resourceGroup: "rg-ag",
      virtualNetwork: "rg-ag::virtual-network",
    }),
  },
  {
    type: "Subnet",
    group: "Network",
    properties: ({}) => ({
      name: "subnet_ag",
      properties: {
        addressPrefix: "10.0.1.0/24",
      },
    }),
    dependencies: ({}) => ({
      resourceGroup: "rg-ag",
      virtualNetwork: "rg-ag::virtual-network",
    }),
  },
  {
    type: "VirtualNetwork",
    group: "Network",
    properties: ({}) => ({
      name: "virtual-network",
      properties: {
        addressSpace: {
          addressPrefixes: ["10.0.0.0/16"],
        },
      },
    }),
    dependencies: ({}) => ({
      resourceGroup: "rg-ag",
    }),
  },
  {
    type: "ResourceGroup",
    group: "Resources",
    properties: ({}) => ({
      name: "rg-ag",
    }),
  },
];
