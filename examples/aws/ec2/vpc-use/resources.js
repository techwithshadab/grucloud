// Generated by 'gc gencode'
const { pipe, tap, get, eq, and } = require("rubico");
const { find } = require("rubico/x");

const createResources = ({ provider }) => {
  provider.EC2.useVpc({
    name: "vpc-default",
  });

  provider.EC2.makeSubnet({
    name: "subnet-1",
    properties: ({ config }) => ({
      CidrBlock: "192.168.0.0/24",
      AvailabilityZone: `${config.region}a`,
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["vpc-default"],
    }),
  });
};

exports.createResources = createResources;
