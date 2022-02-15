// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "SshPublicKey",
    group: "Compute",
    properties: ({}) => ({
      name: "keypair",
      properties: {
        publicKey:
          "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDN2bsPENDfUWBy81C6uvY3IvP/\r\nsBr1pCg0QZiZ6OtAo1fvNVk9rG4ApA9NlbDeECNn5idqXzb68jQ2YPWjOgfxY2KW\r\n/kpZrrkuksYOw7O7ylZp9bIL4kD+8FzFB8A1EogIbZb2wZ1gqFawrpdtHvCuOTGG\r\n2EUwowDvo5++Jm6ee3tzGxdnBj+ciJOFv4NHrJl0y1Dbh8WzISbgkVL5gwrJvmj+\r\nxIUIOUesabSccAw08TX0vEt5G/yB3Q1EGPQ8fib4Og3tJOJ4+IBpnEi4RM9vEjgZ\r\nYvwEmuUb7Vx78uTZ8DUChQ74Ot4DvTAioSSXHJMOmY3yyGJBmzbGtbl6c8nx9tq2\r\nhlznqM8emKEuSHAV7zhB9Pk3f2C1XFCtUApWpY7CZ/huBv9EP1nohWp2tRCJFERt\r\ne5u6Sz+g0Lgz9roPfFRSExS7F+vP96TRV+KmzYzgHAXHD57h59qqYOiUxjjieCrm\r\n8C8ZUQjG3GPJaMnd4eCNsk5xanrRxxbiVw9OPKU= generated-by-azure\r\n",
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-user-managed-identity",
    }),
  },
  {
    type: "VirtualMachine",
    group: "Compute",
    properties: ({ getId }) => ({
      name: "vm",
      properties: {
        hardwareProfile: {
          vmSize: "Standard_B1ls",
        },
        osProfile: {
          computerName: "vm",
          adminUsername: "azureuser",
          linuxConfiguration: {
            disablePasswordAuthentication: true,
            ssh: {
              publicKeys: [
                {
                  path: "/home/azureuser/.ssh/authorized_keys",
                },
              ],
            },
          },
          adminPassword: process.env.RG_USER_MANAGED_IDENTITY_VM_ADMIN_PASSWORD,
        },
        storageProfile: {
          imageReference: {
            publisher: "canonical",
            offer: "0001-com-ubuntu-server-focal",
            sku: "20_04-lts",
            version: "latest",
          },
          osDisk: {
            osType: "Linux",
            name: "vm_disk1_bb67c59163eb4d1a82700ee86e65ca81",
            createOption: "FromImage",
            caching: "ReadWrite",
            managedDisk: {
              storageAccountType: "Premium_LRS",
            },
            deleteOption: "Detach",
            diskSizeGB: 30,
          },
        },
        diagnosticsProfile: {
          bootDiagnostics: {
            enabled: true,
          },
        },
        networkProfile: {
          networkInterfaces: [
            {
              id: getId({
                type: "NetworkInterface",
                group: "Network",
                name: "rg-user-managed-identity::vm180",
              }),
            },
          ],
        },
      },
      identity: {
        type: "UserAssigned",
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-user-managed-identity",
      networkInterfaces: ["rg-user-managed-identity::vm180"],
      managedIdentities: ["rg-user-managed-identity::identity-vault"],
      sshPublicKeys: ["rg-user-managed-identity::keypair"],
    }),
  },
  {
    type: "UserAssignedIdentity",
    group: "ManagedIdentity",
    properties: ({}) => ({
      name: "identity-vault",
    }),
    dependencies: () => ({
      resourceGroup: "rg-user-managed-identity",
    }),
  },
  {
    type: "NetworkInterface",
    group: "Network",
    properties: ({}) => ({
      name: "vm180",
      properties: {
        ipConfigurations: [
          {
            name: "ipconfig1",
            properties: {
              privateIPAllocationMethod: "Dynamic",
            },
          },
        ],
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-user-managed-identity",
      virtualNetwork: "rg-user-managed-identity::vnet",
      publicIpAddress: "rg-user-managed-identity::vm-ip",
      securityGroup: "rg-user-managed-identity::vm-nsg",
      subnet: "rg-user-managed-identity::vnet::default",
    }),
  },
  {
    type: "NetworkSecurityGroup",
    group: "Network",
    properties: ({}) => ({
      name: "vm-nsg",
      properties: {
        securityRules: [
          {
            name: "SSH",
            properties: {
              protocol: "TCP",
              sourcePortRange: "*",
              destinationPortRange: "22",
              sourceAddressPrefix: "*",
              destinationAddressPrefix: "*",
              access: "Allow",
              priority: 300,
              direction: "Inbound",
            },
          },
        ],
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-user-managed-identity",
    }),
  },
  {
    type: "PublicIPAddress",
    group: "Network",
    properties: ({}) => ({
      name: "vm-ip",
    }),
    dependencies: () => ({
      resourceGroup: "rg-user-managed-identity",
    }),
  },
  {
    type: "Subnet",
    group: "Network",
    properties: ({}) => ({
      name: "default",
      properties: {
        addressPrefix: "10.1.0.0/24",
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-user-managed-identity",
      virtualNetwork: "rg-user-managed-identity::vnet",
    }),
  },
  {
    type: "VirtualNetwork",
    group: "Network",
    properties: ({}) => ({
      name: "vnet",
      properties: {
        addressSpace: {
          addressPrefixes: ["10.1.0.0/16"],
        },
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-user-managed-identity",
    }),
  },
  {
    type: "ResourceGroup",
    group: "Resources",
    properties: ({}) => ({
      name: "rg-user-managed-identity",
    }),
  },
];