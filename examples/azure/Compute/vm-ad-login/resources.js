// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

const createResources = ({ provider }) => {
  provider.Authorization.makeRoleAssignment({
    properties: ({}) => ({
      name: "0e4306a9-b8fd-4637-bfce-e5ce05940ef7",
      properties: {
        roleName: "Virtual Machine User Login",
        principalId: "33ccdfbf-d20f-42bf-a59b-e75fc52729bb",
      },
    }),
    dependencies: () => ({
      scopeResourceGroup: "rg-vm-ad-login",
    }),
  });

  provider.Compute.makeSshPublicKey({
    properties: ({}) => ({
      name: "keypair",
      properties: {
        publicKey:
          "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC8SzGkGNI3Ygk6VRCpozwO7xo1\r\nRW50+mHnXNwGMJUlp2GklCjrxYHmKU/1EcoJtc3A7HObBJu/7ckjK8pzl++qi479\r\n7z69qJipkWZsAI5ff6dsdJtDZLJctHfp0fost90LOWUBP+9WKBMgSCg7LM9QQC3C\r\n4A+iZKoqAmlUM6nzvfS90MxHavJR351aaTQIQg/jUHQoJ3PVeE9IpDhselTJQRDy\r\n0dVGcvjSvglw1q7s8hMCueZQNGS2e5sMS4oKhNsi9Rjawe9Iw9maeNnNiZJQwKJi\r\np/o62B48p2k+jIsr8PHE7C8JbIPuE89fRMOE8OgUBOVN0ZL4vRArjiKcFNkf5s7r\r\nl3j6SrqoUvODxedq4YG3IE3NOabqZ5JvzVIWvNhrO0f5MPty3bzucpOUvg2qjXY7\r\nZc8wsBHHWcLb1hhwOMfhqz7kY0MAsOFR6Kn1OvH0Na+R1Zke+z1YMh85FdoPOpmP\r\nboGjezMbAEQCDQJwAVfP2qBQYL1KuyULMmYUQ90= generated-by-azure\r\n",
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-vm-ad-login",
    }),
  });

  provider.Compute.makeVirtualMachine({
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
          adminPassword: process.env.RG_VM_AD_LOGIN_VM_ADMIN_PASSWORD,
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
            name: "vm_disk1_0fff3216e7484cc591ce9fe66bf92b25",
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
                name: "rg-vm-ad-login::vm514",
              }),
            },
          ],
        },
      },
      identity: {
        type: "SystemAssigned",
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-vm-ad-login",
      networkInterfaces: ["rg-vm-ad-login::vm514"],
      sshPublicKeys: ["rg-vm-ad-login::keypair"],
    }),
  });

  provider.Compute.makeVirtualMachineExtension({
    properties: ({}) => ({
      name: "aadsshloginforlinux",
      properties: {
        publisher: "Microsoft.Azure.ActiveDirectory",
        type: "AADSSHLoginForLinux",
        typeHandlerVersion: "1.0",
        autoUpgradeMinorVersion: true,
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-vm-ad-login",
      vm: "rg-vm-ad-login::vm",
    }),
  });

  provider.Network.makeNetworkInterface({
    properties: ({}) => ({
      name: "vm514",
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
      resourceGroup: "rg-vm-ad-login",
      virtualNetwork: "rg-vm-ad-login::vnet",
      publicIpAddress: "rg-vm-ad-login::vm-ip",
      securityGroup: "rg-vm-ad-login::vm-nsg",
      subnet: "rg-vm-ad-login::vnet::default",
    }),
  });

  provider.Network.makeNetworkSecurityGroup({
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
      resourceGroup: "rg-vm-ad-login",
    }),
  });

  provider.Network.makePublicIPAddress({
    properties: ({}) => ({
      name: "vm-ip",
    }),
    dependencies: () => ({
      resourceGroup: "rg-vm-ad-login",
    }),
  });

  provider.Network.makeSubnet({
    properties: ({}) => ({
      name: "default",
      properties: {
        addressPrefix: "10.0.0.0/24",
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-vm-ad-login",
      virtualNetwork: "rg-vm-ad-login::vnet",
    }),
  });

  provider.Network.makeVirtualNetwork({
    properties: ({}) => ({
      name: "vnet",
      properties: {
        addressSpace: {
          addressPrefixes: ["10.0.0.0/16"],
        },
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-vm-ad-login",
    }),
  });

  provider.Resources.makeResourceGroup({
    properties: ({}) => ({
      name: "rg-vm-ad-login",
    }),
  });
};

exports.createResources = createResources;
