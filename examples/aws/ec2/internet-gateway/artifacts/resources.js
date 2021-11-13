// Generated by 'gc gencode'
const { pipe, tap, get, eq, and } = require("rubico");
const { find } = require("rubico/x");

const createResources = ({ provider }) => {
  provider.EC2.makeVpc({
    name: "vpc",
    properties: ({ config }) => ({
      CidrBlock: "192.168.0.0/16",
    }),
  });

  provider.EC2.makeInternetGateway({
    name: "internet-gateway",
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["vpc"],
    }),
  });
};

exports.createResources = createResources;