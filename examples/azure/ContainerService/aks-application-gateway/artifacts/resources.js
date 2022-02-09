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
        dnsPrefix: "cluster-rg-aks-ag-e012cd",
        agentPoolProfiles: [
          {
            name: "nodepool1",
            count: 3,
            vmSize: "Standard_DS2_v2",
            osDiskSizeGB: 128,
            osDiskType: "Managed",
            kubeletDiskType: "OS",
            maxPods: 30,
            type: "VirtualMachineScaleSets",
            enableAutoScaling: false,
            orchestratorVersion: "1.21.7",
            enableNodePublicIP: false,
            mode: "System",
            enableEncryptionAtHost: false,
            enableUltraSSD: false,
            osType: "Linux",
            osSKU: "Ubuntu",
            nodeImageVersion: "AKSUbuntu-1804gen2containerd-2022.01.24",
            enableFIPS: false,
          },
        ],
        linuxProfile: {
          adminUsername: "azureuser",
          ssh: {
            publicKeys: [
              {
                keyData:
                  "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC/+ZCfuXkRdiRcNjERsbmuqtKBY+ctRVd/q06VNRGxqAGI+DGnc55eMxvhh1ptdjuNg6HA7yufumrj9AmxrKEtGmRfseeVUy3th7FphEKKYCkpb8zxIEdfRr5r374gl3QxrxeKzk2YgsCQAfwfaD+ZlNQyKHWgnfwFCGEh3ciL5eSQP5xittjJap35l17kwygtCYxPcA+5DlAjDtonLGzypw/Bnb8U6TutWiHsK5Jx4iYVo4rsPmy6MsTZUx0gAKf0jvRpROK4TOHUAfio05jxfDVfE2hOZAvYFas5fKOCI8in/xaVy/hoW3rFU7OvPWfyNv7+5IE6ytI59c5e9PMXJ9IVcQmiPkfTfK91YsYcyknf6SXdTjs0aPWRpCp+UpDr98qt8xqTMujI1RA075719T1I3OUO7+w/prFLUPkEHbOLnfJ1kzam6kX87OkEG6OwIqR3A7Sw1q3EmRfDppzBOw8Oaapla+52DMLeJ6j1eLNLyBcsrgVTbOLYyZXbORMLvr0FwiAmbUPBSPKFIT12N10dElScihA2YI1g6SS5nNZAiyU16T0zL9teXYEYlupXo7T5Dc44m7xiiuzx4xibh8MprUTDUKoHSmTTSZ9psggaYcrZZQKmO8P7Et8t44iEyZ7W8xpByHxRrqmuCrqx9dIopk8fXhnQA/sP/EbX5Q== frederic.heem@gmail.com\n",
              },
            ],
          },
        },
        addonProfiles: {
          ingressApplicationGateway: {
            enabled: true,
            config: {
              applicationGatewayName: "ag",
              subnetCIDR: "10.2.0.0/16",
            },
          },
        },
        oidcIssuerProfile: {
          enabled: false,
        },
        enableRBAC: true,
        networkProfile: {
          networkPlugin: "azure",
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
        },
        disableLocalAccounts: false,
        servicePrincipalProfile: {
          clientId: "msi",
        },
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-aks-ag",
    }),
  },
  {
    type: "ResourceGroup",
    group: "Resources",
    properties: ({}) => ({
      name: "rg-aks-ag",
    }),
  },
];
