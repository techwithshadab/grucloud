const assert = require("assert");
const { tap, pipe } = require("rubico");
const { MockProvider } = require("@grucloud/provider-mock");
const hook = require("./hook");

const createResources = () => [
  { type: "Ip", group: "Compute", name: "myip" },
  {
    type: "Volume",
    group: "Compute",
    name: "volume1",
    properties: () => ({
      size: 20_000_000_000,
    }),
  },
  {
    group: "Compute",
    type: "SecurityGroup",
    name: "sg",
    properties: () => ({
      securityRules: [
        {
          name: "SSH",
          properties: {
            access: "Allow",
            direction: "Inbound",
            protocol: "Tcp",
            destinationPortRange: "22",
            destinationAddressPrefix: "*",
            sourcePortRange: "*",
            sourceAddressPrefix: "*",
            priority: 1000,
          },
        },
      ],
    }),
  },
  {
    group: "Compute",
    type: "Server",
    name: "web-server",
    dependencies: () => ({
      volume: "volume1",
      securityGroups: ["sg"],
      ip: "myip",
    }),
    properties: () => ({
      diskSizeGb: "20",
      machineType: "f1-micro",
    }),
  },
];

exports.createResources = createResources;

exports.createStack = ({ createProvider }) => {
  return {
    provider: createProvider(MockProvider, {
      createResources: createResources,
      config: require("./config"),
    }),
    hooks: [hook, require("./hooksExtra")],
  };
};
