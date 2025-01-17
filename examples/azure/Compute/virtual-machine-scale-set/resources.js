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
            adminPassword:
              process.env
                .RG_VIRTUAL_MACHINE_SCALE_SET_VM_SCALE_SET_ADMIN_PASSWORD,
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
                name: "vmsca3e24Nic",
                properties: {
                  primary: true,
                  enableAcceleratedNetworking: false,
                  networkSecurityGroup: {
                    id: getId({
                      type: "NetworkSecurityGroup",
                      group: "Network",
                      name: "rg-virtual-machine-scale-set::security-group",
                    }),
                  },
                  dnsSettings: {
                    dnsServers: [],
                  },
                  enableIPForwarding: false,
                  ipConfigurations: [
                    {
                      name: "vmsca3e24IPConfig",
                      properties: {
                        subnet: {
                          id: getId({
                            type: "Subnet",
                            group: "Network",
                            name: "rg-virtual-machine-scale-set::virtual-network::subnet",
                          }),
                        },
                        privateIPAddressVersion: "IPv4",
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
      resourceGroup: "rg-virtual-machine-scale-set",
      networkSecurityGroups: ["rg-virtual-machine-scale-set::security-group"],
      subnets: ["rg-virtual-machine-scale-set::virtual-network::subnet"],
    }),
  },
  {
    type: "NetworkSecurityGroup",
    group: "Network",
    properties: ({}) => ({
      name: "security-group",
      properties: {
        securityRules: [
          {
            name: "SSH",
            properties: {
              description: "allow SSH",
              protocol: "Tcp",
              sourcePortRange: "*",
              destinationPortRange: "22",
              sourceAddressPrefix: "*",
              destinationAddressPrefix: "*",
              access: "Allow",
              priority: 1000,
              direction: "Inbound",
              sourcePortRanges: [],
              destinationPortRanges: [],
              sourceAddressPrefixes: [],
              destinationAddressPrefixes: [],
            },
          },
        ],
      },
    }),
    dependencies: ({}) => ({
      resourceGroup: "rg-virtual-machine-scale-set",
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
      resourceGroup: "rg-virtual-machine-scale-set",
      virtualNetwork: "rg-virtual-machine-scale-set::virtual-network",
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
      resourceGroup: "rg-virtual-machine-scale-set",
    }),
  },
  {
    type: "ResourceGroup",
    group: "Resources",
    properties: ({}) => ({
      name: "rg-virtual-machine-scale-set",
    }),
  },
];
