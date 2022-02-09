// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "Network",
    group: "compute",
    name: "vpc",
    properties: ({}) => ({
      description: "Managed By GruCloud",
      autoCreateSubnetworks: false,
      routingConfig: {
        routingMode: "REGIONAL",
      },
    }),
  },
  {
    type: "SubNetwork",
    group: "compute",
    name: "subnetwork",
    properties: ({}) => ({
      ipCidrRange: "10.164.0.0/20",
    }),
    dependencies: () => ({
      network: "vpc",
    }),
  },
  {
    type: "Firewall",
    group: "compute",
    name: "firewall",
    properties: ({}) => ({
      description: "Managed By GruCloud",
      priority: 1000,
      sourceRanges: ["0.0.0.0/0"],
      allowed: [
        {
          IPProtocol: "tcp",
          ports: ["22", "80", "433"],
        },
      ],
      direction: "INGRESS",
      logConfig: {
        enable: false,
      },
    }),
    dependencies: () => ({
      network: "vpc",
    }),
  },
  {
    type: "VmInstance",
    group: "compute",
    name: "db",
    properties: ({}) => ({
      machineType: "f1-micro",
      metadata: {
        items: [
          {
            key: "enable-oslogin",
            value: "True",
          },
        ],
      },
      sourceImage:
        "projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20210927",
    }),
    dependencies: () => ({
      subNetwork: "subnetwork",
    }),
  },
];
