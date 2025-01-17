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
    type: "NatGateway",
    group: "EC2",
    name: "nat-gateway",
    dependencies: ({}) => ({
      subnet: "vpc::subnet-public-a",
      eip: "eip",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "subnet-private-a",
    properties: ({ config }) => ({
      AvailabilityZone: `${config.region}a`,
      NewBits: 3,
      NetworkNumber: 3,
    }),
    dependencies: ({}) => ({
      vpc: "vpc",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "subnet-private-b",
    properties: ({ config }) => ({
      AvailabilityZone: `${config.region}b`,
      NewBits: 3,
      NetworkNumber: 4,
    }),
    dependencies: ({}) => ({
      vpc: "vpc",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "subnet-public-a",
    properties: ({ config }) => ({
      AvailabilityZone: `${config.region}a`,
      MapPublicIpOnLaunch: true,
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
    name: "subnet-public-b",
    properties: ({ config }) => ({
      AvailabilityZone: `${config.region}b`,
      MapPublicIpOnLaunch: true,
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
    name: "route-table-private-a",
    dependencies: ({}) => ({
      vpc: "vpc",
    }),
  },
  {
    type: "RouteTable",
    group: "EC2",
    name: "route-table-private-b",
    dependencies: ({}) => ({
      vpc: "vpc",
    }),
  },
  {
    type: "RouteTable",
    group: "EC2",
    name: "rt-default",
    isDefault: true,
    dependencies: ({}) => ({
      vpc: "vpc",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({}) => ({
      routeTable: "vpc::route-table-private-a",
      subnet: "vpc::subnet-private-a",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({}) => ({
      routeTable: "vpc::route-table-private-b",
      subnet: "vpc::subnet-private-b",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({}) => ({
      routeTable: "vpc::rt-default",
      subnet: "vpc::subnet-public-a",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({}) => ({
      routeTable: "vpc::rt-default",
      subnet: "vpc::subnet-public-b",
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({}) => ({
      natGateway: "nat-gateway",
      routeTable: "vpc::route-table-private-a",
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({}) => ({
      natGateway: "nat-gateway",
      routeTable: "vpc::route-table-private-b",
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({}) => ({
      ig: "internet-gateway",
      routeTable: "vpc::rt-default",
    }),
  },
  { type: "ElasticIpAddress", group: "EC2", name: "eip" },
];
