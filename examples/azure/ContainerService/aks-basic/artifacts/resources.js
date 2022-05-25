// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "ManagedCluster",
    group: "ContainerService",
    properties: ({}) => ({
      name: "cluster",
      sku: {
        name: "Basic",
        tier: "Free",
      },
      identity: {
        type: "SystemAssigned",
      },
      properties: {
        kubernetesVersion: "1.21.7",
        dnsPrefix: "cluster-dns",
        agentPoolProfiles: [
          {
            count: 1,
            vmSize: "Standard_B4ms",
            osDiskSizeGB: 128,
            osDiskType: "Managed",
            kubeletDiskType: "OS",
            maxPods: 110,
            osType: "Linux",
            osSKU: "Ubuntu",
            enableAutoScaling: false,
            type: "VirtualMachineScaleSets",
            mode: "System",
            orchestratorVersion: "1.21.7",
            enableNodePublicIP: false,
            enableFIPS: false,
            name: "agentpool",
          },
        ],
        addonProfiles: {
          azurepolicy: {
            enabled: false,
            config: null,
          },
          httpApplicationRouting: {
            enabled: false,
            config: null,
          },
        },
        oidcIssuerProfile: {
          enabled: false,
        },
        enableRBAC: true,
        networkProfile: {
          networkPlugin: "kubenet",
          podCidr: "10.244.0.0/16",
          serviceCidr: "10.0.0.0/16",
          dnsServiceIP: "10.0.0.10",
          dockerBridgeCidr: "172.17.0.1/16",
          outboundType: "loadBalancer",
          loadBalancerSku: "Standard",
          loadBalancerProfile: {
            managedOutboundIPs: {
              count: 1,
            },
          },
          podCidrs: ["10.244.0.0/16"],
          serviceCidrs: ["10.0.0.0/16"],
          ipFamilies: ["IPv4"],
        },
        storageProfile: {
          diskCSIDriver: {
            enabled: true,
          },
          fileCSIDriver: {
            enabled: true,
          },
          snapshotController: {
            enabled: true,
          },
        },
        servicePrincipalProfile: {
          clientId: "msi",
        },
      },
    }),
    dependencies: ({}) => ({
      resourceGroup: "rg-aks-basic",
    }),
  },
  {
    type: "ResourceGroup",
    group: "Resources",
    properties: ({}) => ({
      name: "rg-aks-basic",
    }),
  },
];
