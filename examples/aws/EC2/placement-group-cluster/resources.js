// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  { type: "Vpc", group: "EC2", name: "vpc-default", isDefault: true },
  {
    type: "Subnet",
    group: "EC2",
    name: "subnet-default-f",
    isDefault: true,
    dependencies: ({}) => ({
      vpc: "vpc-default",
    }),
  },
  {
    type: "SecurityGroup",
    group: "EC2",
    name: "sg::vpc-default::default",
    isDefault: true,
    dependencies: ({}) => ({
      vpc: "vpc-default",
    }),
  },
  {
    type: "Instance",
    group: "EC2",
    name: "my-machine",
    properties: ({ config }) => ({
      InstanceType: "r6i.large",
      Placement: {
        AvailabilityZone: `${config.region}f`,
        GroupName: "my-placementgroup",
      },
      EbsOptimized: true,
      Image: {
        Description:
          "Amazon Linux 2 Kernel 5.10 AMI 2.0.20220606.1 x86_64 HVM gp2",
      },
    }),
    dependencies: ({}) => ({
      subnets: ["vpc-default::subnet-default-f"],
      securityGroups: ["sg::vpc-default::default"],
      placementGroup: "my-placementgroup",
    }),
  },
  {
    type: "PlacementGroup",
    group: "EC2",
    properties: ({}) => ({
      GroupName: "my-placementgroup",
      Strategy: "cluster",
    }),
  },
];
