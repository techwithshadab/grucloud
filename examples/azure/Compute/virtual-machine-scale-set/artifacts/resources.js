// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

const createResources = ({ provider }) => {
  provider.Compute.makeSshPublicKey({
    name: "vm_key",
    properties: ({}) => ({
      properties: {
        publicKey:
          "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDXDmsiCyVIX/BRfbjLJdMPKckk\r\nN+i4apjWzy/Iiax9QOe6r2Z4Sv1vYrHmAinYE3E2xChXHLfSnsXQ38NQSx3ftB/f\r\n7thnYIsXempjl+0spV543KljPM0b8SoRd7KmxGuVg8+2zPWX16Zynnum5sS2nsN8\r\nhJWtGOIcogZrggrSFxlbMYxgFZewnZu2EA3VDTh6s8uD4qHlZ4TAv0JkXZulGgLI\r\nCqCzNixDmbuV6p0V6BwnMR81JwcwhYXyTzLIEtpqh+B3XNbrFH87LU0JfJfTjTtr\r\njA46FsVNmVETczi0K0hcHpK/3YYtdH9PEeSEwoA33Lqi1NWINMyWCwGqLVGq6qg9\r\nY4gUqGcVobhlhea3PZJbyXw4CvwmMXz8W+yIQc5j8jCLDI+oAlf+3DWBTPbXhe/a\r\nk7gB3jtbYgnmTgeu5WOK83JekWim3UAEXPxS7lCjm170Z4hQkSeNHIZFZiVlysgk\r\nBCoDtFQisH3MZx8HWtAsxIe4rYVzcyxPWc93P8U= generated-by-azure\r\n",
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup:
        resources.Resources.ResourceGroup["rg-virtual-machine-scale-set"],
    }),
  });

  provider.Compute.makeVirtualMachineScaleSet({
    name: "virtual-machine-scale-set",
    properties: ({ getId }) => ({
      sku: {
        name: "Standard_B1ls",
        tier: "Standard",
        capacity: 2,
      },
      properties: {
        singlePlacementGroup: false,
        upgradePolicy: {
          mode: "Manual",
        },
        scaleInPolicy: {
          rules: ["Default"],
        },
        virtualMachineProfile: {
          osProfile: {
            computerNamePrefix: "virtual-m",
            adminUsername: "AdminGruCloud",
            linuxConfiguration: {
              disablePasswordAuthentication: true,
              ssh: {
                publicKeys: [
                  {
                    path: "/home/AdminGruCloud/.ssh/authorized_keys",
                  },
                ],
              },
              provisionVMAgent: true,
            },
            allowExtensionOperations: true,
            adminPassword: process.env.VIRTUAL_MACHINE_SCALE_SET_ADMIN_PASSWORD,
          },
          storageProfile: {
            imageReference: {
              publisher: "canonical",
              offer: "0001-com-ubuntu-server-focal",
              sku: "20_04-lts",
              version: "latest",
            },
          },
          diagnosticsProfile: {
            bootDiagnostics: {
              enabled: true,
            },
          },
          networkProfile: {
            networkInterfaceConfigurations: [
              {
                name: "rg-virtual-machine-scale-set-vnet-nic01",
                properties: {
                  primary: true,
                  enableAcceleratedNetworking: false,
                  networkSecurityGroup: {
                    id: getId({
                      type: "NetworkSecurityGroup",
                      group: "Network",
                      name: "basicNsgrg-virtual-machine-scale-set-vnet-nic01",
                    }),
                  },
                  dnsSettings: {
                    dnsServers: [],
                  },
                  enableIPForwarding: false,
                  ipConfigurations: [
                    {
                      name: "rg-virtual-machine-scale-set-vnet-nic01-defaultIpConfiguration",
                      properties: {
                        primary: true,
                        subnet: {
                          id: getId({
                            type: "Subnet",
                            group: "Network",
                            name: "default",
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
        overprovision: false,
        doNotRunExtensionsOnOverprovisionedVMs: false,
        platformFaultDomainCount: 1,
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup:
        resources.Resources.ResourceGroup["rg-virtual-machine-scale-set"],
      subnets: [resources.Network.Subnet["default"]],
      sshPublicKeys: [resources.Compute.SshPublicKey["vm_key"]],
      networkSecurityGroups: [
        resources.Network.NetworkSecurityGroup[
          "basicNsgrg-virtual-machine-scale-set-vnet-nic01"
        ],
      ],
    }),
  });

  provider.Network.makeNetworkSecurityGroup({
    name: "basicNsgrg-virtual-machine-scale-set-vnet-nic01",
    properties: ({}) => ({
      properties: {
        securityRules: [
          {
            name: "Port_8080",
            properties: {
              protocol: "*",
              sourcePortRange: "*",
              destinationPortRange: "8080",
              sourceAddressPrefix: "*",
              destinationAddressPrefix: "*",
              access: "Allow",
              priority: 100,
              direction: "Inbound",
            },
          },
        ],
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup:
        resources.Resources.ResourceGroup["rg-virtual-machine-scale-set"],
    }),
  });

  provider.Network.makeSubnet({
    name: "default",
    properties: ({}) => ({
      properties: {
        addressPrefix: "10.0.0.0/16",
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup:
        resources.Resources.ResourceGroup["rg-virtual-machine-scale-set"],
      virtualNetwork:
        resources.Network.VirtualNetwork["rg-virtual-machine-scale-set-vnet"],
    }),
  });

  provider.Network.makeVirtualNetwork({
    name: "rg-virtual-machine-scale-set-vnet",
    properties: ({}) => ({
      properties: {
        addressSpace: {
          addressPrefixes: ["10.0.0.0/16"],
        },
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup:
        resources.Resources.ResourceGroup["rg-virtual-machine-scale-set"],
    }),
  });

  provider.Resources.makeResourceGroup({
    name: "rg-virtual-machine-scale-set",
  });
};

exports.createResources = createResources;
