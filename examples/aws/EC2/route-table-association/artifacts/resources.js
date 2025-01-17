// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "Vpc",
    group: "EC2",
    name: "vpc",
    properties: ({}) => ({
      CidrBlock: "192.168.0.0/16",
    }),
  },
  { type: "InternetGateway", group: "EC2", name: "internet-gateway" },
  {
    type: "InternetGatewayAttachment",
    group: "EC2",
    dependencies: ({}) => ({
      vpc: "vpc",
      internetGateway: "internet-gateway",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "vpc::subnet-a",
    properties: ({ config }) => ({
      AvailabilityZone: `${config.region}a`,
      NewBits: 3,
      NetworkNumber: 0,
    }),
    dependencies: ({}) => ({
      vpc: "vpc",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "vpc::subnet-b",
    properties: ({ config }) => ({
      AvailabilityZone: `${config.region}a`,
      NewBits: 3,
      NetworkNumber: 1,
    }),
    dependencies: ({}) => ({
      vpc: "vpc",
    }),
  },
  {
    type: "RouteTable",
    group: "EC2",
    name: "vpc::rt-default",
    isDefault: true,
    dependencies: ({}) => ({
      vpc: "vpc",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({}) => ({
      routeTable: "vpc::rt-default",
      subnet: "vpc::subnet-a",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({}) => ({
      routeTable: "vpc::rt-default",
      subnet: "vpc::subnet-b",
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({}) => ({
      routeTable: "vpc::rt-default",
      ig: "internet-gateway",
    }),
  },
];
