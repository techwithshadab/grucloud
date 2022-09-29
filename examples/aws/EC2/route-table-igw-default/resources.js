// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  { type: "Vpc", group: "EC2", name: "vpc-default", isDefault: true },
  {
    type: "InternetGateway",
    group: "EC2",
    name: "ig-default",
    isDefault: true,
  },
  {
    type: "RouteTable",
    group: "EC2",
    name: "rt-default",
    isDefault: true,
    dependencies: ({}) => ({
      vpc: "vpc-default",
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({}) => ({
      ig: "ig-default",
      routeTable: "vpc-default::rt-default",
    }),
  },
];
