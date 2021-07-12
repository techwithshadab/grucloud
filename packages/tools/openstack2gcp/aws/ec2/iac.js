// Generated by aws2gc
const { set, pipe } = require("rubico");
const { AwsProvider } = require("@grucloud/provider-aws");

const createResources = async ({ provider }) => {
  const { config } = provider;
  return pipe([
    () => ({}),
    (resources) =>
      set(
        "ec2.Vpc.vpcDefault",
        provider.ec2.useVpc({
          name: config.ec2.Vpc.vpcDefault.name,
          properties: () => config.ec2.Vpc.vpcDefault.properties,
        })
      )(resources),
    (resources) =>
      set(
        "ec2.Vpc.vpcEc2Example",
        provider.ec2.makeVpc({
          name: config.ec2.Vpc.vpcEc2Example.name,
          properties: () => config.ec2.Vpc.vpcEc2Example.properties,
        })
      )(resources),
    (resources) =>
      set(
        "ec2.Subnet.subnet",
        provider.ec2.makeSubnet({
          name: config.ec2.Subnet.subnet.name,
          dependencies: {
            vpc: resources.ec2.Vpc.vpcEc2Example,
          },
          properties: () => config.ec2.Subnet.subnet.properties,
        })
      )(resources),
    (resources) =>
      set(
        "ec2.KeyPair.kp",
        provider.ec2.useKeyPair({
          name: config.ec2.KeyPair.kp.name,
        })
      )(resources),
    (resources) =>
      set(
        "ec2.Volume.volume",
        provider.ec2.makeVolume({
          name: config.ec2.Volume.volume.name,
          properties: () => config.ec2.Volume.volume.properties,
        })
      )(resources),
    (resources) =>
      set(
        "ec2.ElasticIpAddress.myip",
        provider.ec2.makeElasticIpAddress({
          name: config.ec2.ElasticIpAddress.myip.name,
        })
      )(resources),
    (resources) =>
      set(
        "ec2.SecurityGroup.securityGroup",
        provider.ec2.makeSecurityGroup({
          name: config.ec2.SecurityGroup.securityGroup.name,
          dependencies: {
            vpc: resources.ec2.Vpc.vpcEc2Example,
          },
          properties: () => config.ec2.SecurityGroup.securityGroup.properties,
        })
      )(resources),
    (resources) =>
      set(
        "ec2.SecurityGroup.sgDefaultVpcEc2Example",
        provider.ec2.useSecurityGroup({
          name: config.ec2.SecurityGroup.sgDefaultVpcEc2Example.name,
          dependencies: {
            vpc: resources.ec2.Vpc.vpcEc2Example,
          },
          properties: () =>
            config.ec2.SecurityGroup.sgDefaultVpcEc2Example.properties,
        })
      )(resources),
    (resources) =>
      set(
        "ec2.SecurityGroup.sgDefaultVpcDefault",
        provider.ec2.useSecurityGroup({
          name: config.ec2.SecurityGroup.sgDefaultVpcDefault.name,
          dependencies: {
            vpc: resources.ec2.Vpc.vpcDefault,
          },
          properties: () =>
            config.ec2.SecurityGroup.sgDefaultVpcDefault.properties,
        })
      )(resources),
    (resources) =>
      set(
        "ec2.SecurityGroupRuleIngress.sgRuleIngressSsh",
        provider.ec2.makeSecurityGroupRuleIngress({
          name: config.ec2.SecurityGroupRuleIngress.sgRuleIngressSsh.name,
          dependencies: {
            securityGroup: resources.ec2.SecurityGroup.securityGroup,
          },
          properties: () =>
            config.ec2.SecurityGroupRuleIngress.sgRuleIngressSsh.properties,
        })
      )(resources),
    (resources) =>
      set(
        "ec2.SecurityGroupRuleIngress.sgRuleIngressIcmp",
        provider.ec2.makeSecurityGroupRuleIngress({
          name: config.ec2.SecurityGroupRuleIngress.sgRuleIngressIcmp.name,
          dependencies: {
            securityGroup: resources.ec2.SecurityGroup.securityGroup,
          },
          properties: () =>
            config.ec2.SecurityGroupRuleIngress.sgRuleIngressIcmp.properties,
        })
      )(resources),
    (resources) =>
      set(
        "ec2.SecurityGroupRuleIngress.sgDefaultVpcEc2ExampleRuleIngressAll",
        provider.ec2.useSecurityGroupRuleIngress({
          name: config.ec2.SecurityGroupRuleIngress
            .sgDefaultVpcEc2ExampleRuleIngressAll.name,
          dependencies: {
            securityGroup: resources.ec2.SecurityGroup.sgDefaultVpcEc2Example,
          },
          properties: () =>
            config.ec2.SecurityGroupRuleIngress
              .sgDefaultVpcEc2ExampleRuleIngressAll.properties,
        })
      )(resources),
    (resources) =>
      set(
        "ec2.SecurityGroupRuleIngress.sgDefaultVpcDefaultRuleIngressAll",
        provider.ec2.useSecurityGroupRuleIngress({
          name: config.ec2.SecurityGroupRuleIngress
            .sgDefaultVpcDefaultRuleIngressAll.name,
          dependencies: {
            securityGroup: resources.ec2.SecurityGroup.sgDefaultVpcDefault,
          },
          properties: () =>
            config.ec2.SecurityGroupRuleIngress
              .sgDefaultVpcDefaultRuleIngressAll.properties,
        })
      )(resources),
    (resources) =>
      set(
        "ec2.SecurityGroupRuleEgress.securityGroupRuleEgressAll",
        provider.ec2.useSecurityGroupRuleEgress({
          name: config.ec2.SecurityGroupRuleEgress.securityGroupRuleEgressAll
            .name,
          dependencies: {
            securityGroup: resources.ec2.SecurityGroup.securityGroup,
          },
          properties: () =>
            config.ec2.SecurityGroupRuleEgress.securityGroupRuleEgressAll
              .properties,
        })
      )(resources),
    (resources) =>
      set(
        "ec2.SecurityGroupRuleEgress.sgDefaultVpcEc2ExampleRuleEgressAll",
        provider.ec2.useSecurityGroupRuleEgress({
          name: config.ec2.SecurityGroupRuleEgress
            .sgDefaultVpcEc2ExampleRuleEgressAll.name,
          dependencies: {
            securityGroup: resources.ec2.SecurityGroup.sgDefaultVpcEc2Example,
          },
          properties: () =>
            config.ec2.SecurityGroupRuleEgress
              .sgDefaultVpcEc2ExampleRuleEgressAll.properties,
        })
      )(resources),
    (resources) =>
      set(
        "ec2.SecurityGroupRuleEgress.sgDefaultVpcDefaultRuleEgressAll",
        provider.ec2.useSecurityGroupRuleEgress({
          name: config.ec2.SecurityGroupRuleEgress
            .sgDefaultVpcDefaultRuleEgressAll.name,
          dependencies: {
            securityGroup: resources.ec2.SecurityGroup.sgDefaultVpcDefault,
          },
          properties: () =>
            config.ec2.SecurityGroupRuleEgress.sgDefaultVpcDefaultRuleEgressAll
              .properties,
        })
      )(resources),
    (resources) =>
      set(
        "ec2.InternetGateway.ig",
        provider.ec2.makeInternetGateway({
          name: config.ec2.InternetGateway.ig.name,
          dependencies: {
            vpc: resources.ec2.Vpc.vpcEc2Example,
          },
        })
      )(resources),
    (resources) =>
      set(
        "ec2.Instance.webServerEc2Vpc",
        provider.ec2.makeInstance({
          name: config.ec2.Instance.webServerEc2Vpc.name,
          dependencies: {
            subnet: resources.ec2.Subnet.subnet,
            keyPair: resources.ec2.KeyPair.kp,
            eip: resources.ec2.ElasticIpAddress.myip,
            securityGroups: [resources.ec2.SecurityGroup.securityGroup],
            volumes: [resources.ec2.Volume.volume],
          },
          properties: () => config.ec2.Instance.webServerEc2Vpc.properties,
        })
      )(resources),
  ])();
};

exports.createResources = createResources;

exports.createStack = async () => {
  const provider = AwsProvider({ config: require("./config") });
  const resources = await createResources({
    provider,
  });

  return {
    provider,
    resources,
  };
};
