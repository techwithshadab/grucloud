// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "CustomerGateway",
    group: "EC2",
    name: "main-customer-gateway",
    properties: ({ getId }) => ({
      BgpAsn: "65000",
      IpAddress: `${getId({
        type: "PublicIPAddress",
        group: "Network",
        name: "hybridrg::vnetvgwpip1",
        path: "live.properties.ipAddress",
      })}`,
    }),
    dependencies: ({}) => ({
      ipAddressAzure: "hybridrg::vnetvgwpip1",
      virtualNetworkGatewayAzure: "hybridrg::myvng1",
    }),
  },
  {
    type: "Vpc",
    group: "EC2",
    name: "Default VPC",
    properties: ({}) => ({
      CidrBlock: "192.168.0.0/16",
      DnsHostnames: true,
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "main",
    properties: ({ config }) => ({
      AvailabilityZone: `${config.region}e`,
      NewBits: 4,
      NetworkNumber: 1,
    }),
    dependencies: ({}) => ({
      vpc: "Default VPC",
    }),
  },
  {
    type: "RouteTable",
    group: "EC2",
    name: "rt-default",
    isDefault: true,
    dependencies: ({}) => ({
      vpc: "Default VPC",
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "172.16.1.0/24",
    }),
    dependencies: ({}) => ({
      routeTable: "Default VPC::rt-default",
      vpnGateway: "main",
    }),
  },
  {
    type: "SecurityGroup",
    group: "EC2",
    properties: ({}) => ({
      GroupName: "my-security-group",
      Description: "ssh icmp",
    }),
    dependencies: ({}) => ({
      vpc: "Default VPC",
    }),
  },
  {
    type: "SecurityGroupRuleIngress",
    group: "EC2",
    properties: ({}) => ({
      IpProtocol: "icmp",
      IpRanges: [
        {
          CidrIp: "0.0.0.0/0",
        },
      ],
    }),
    dependencies: ({}) => ({
      securityGroup: "sg::Default VPC::my-security-group",
    }),
  },
  {
    type: "SecurityGroupRuleIngress",
    group: "EC2",
    properties: ({}) => ({
      FromPort: 22,
      IpProtocol: "tcp",
      IpRanges: [
        {
          CidrIp: "0.0.0.0/0",
        },
      ],
      ToPort: 22,
    }),
    dependencies: ({}) => ({
      securityGroup: "sg::Default VPC::my-security-group",
    }),
  },
  {
    type: "SecurityGroupRuleIngress",
    group: "EC2",
    properties: ({}) => ({
      FromPort: 443,
      IpProtocol: "tcp",
      IpRanges: [
        {
          CidrIp: "0.0.0.0/0",
        },
      ],
      ToPort: 443,
    }),
    dependencies: ({}) => ({
      securityGroup: "sg::Default VPC::my-security-group",
    }),
  },
  {
    type: "Instance",
    group: "EC2",
    name: "machine-aws",
    properties: ({ config, getId }) => ({
      InstanceType: "t2.micro",
      Placement: {
        AvailabilityZone: `${config.region}e`,
      },
      NetworkInterfaces: [
        {
          DeviceIndex: 0,
          Groups: [
            `${getId({
              type: "SecurityGroup",
              group: "EC2",
              name: "sg::Default VPC::my-security-group",
            })}`,
          ],
          SubnetId: `${getId({
            type: "Subnet",
            group: "EC2",
            name: "Default VPC::main",
          })}`,
        },
      ],
      Image: {
        Description:
          "Amazon Linux 2 Kernel 5.10 AMI 2.0.20220805.0 x86_64 HVM gp2",
      },
    }),
    dependencies: ({}) => ({
      subnets: ["Default VPC::main"],
      iamInstanceProfile: "role-ec2-ssm",
      securityGroups: ["sg::Default VPC::my-security-group"],
    }),
  },
  {
    type: "VpcEndpoint",
    group: "EC2",
    name: "vpce-ec2-message",
    properties: ({ config }) => ({
      PolicyDocument: {
        Statement: [
          {
            Action: "*",
            Effect: "Allow",
            Principal: "*",
            Resource: "*",
          },
        ],
      },
      PrivateDnsEnabled: true,
      RequesterManaged: false,
      VpcEndpointType: "Interface",
      ServiceName: `com.amazonaws.${config.region}.ec2messages`,
    }),
    dependencies: ({}) => ({
      vpc: "Default VPC",
      subnets: ["Default VPC::main"],
      securityGroups: ["sg::Default VPC::my-security-group"],
    }),
  },
  {
    type: "VpcEndpoint",
    group: "EC2",
    name: "vpce-ssm",
    properties: ({ config }) => ({
      PolicyDocument: {
        Statement: [
          {
            Action: "*",
            Effect: "Allow",
            Principal: "*",
            Resource: "*",
          },
        ],
      },
      PrivateDnsEnabled: true,
      RequesterManaged: false,
      VpcEndpointType: "Interface",
      ServiceName: `com.amazonaws.${config.region}.ssm`,
    }),
    dependencies: ({}) => ({
      vpc: "Default VPC",
      subnets: ["Default VPC::main"],
      securityGroups: ["sg::Default VPC::my-security-group"],
    }),
  },
  {
    type: "VpcEndpoint",
    group: "EC2",
    name: "vpce-ssm-message",
    properties: ({ config }) => ({
      PolicyDocument: {
        Statement: [
          {
            Action: "*",
            Effect: "Allow",
            Principal: "*",
            Resource: "*",
          },
        ],
      },
      PrivateDnsEnabled: true,
      RequesterManaged: false,
      VpcEndpointType: "Interface",
      ServiceName: `com.amazonaws.${config.region}.ssmmessages`,
    }),
    dependencies: ({}) => ({
      vpc: "Default VPC",
      subnets: ["Default VPC::main"],
      securityGroups: ["sg::Default VPC::my-security-group"],
    }),
  },
  {
    type: "VpnGateway",
    group: "EC2",
    name: "main",
    properties: ({}) => ({
      AmazonSideAsn: 64512,
    }),
  },
  {
    type: "VpnGatewayAttachment",
    group: "EC2",
    dependencies: ({}) => ({
      vpc: "Default VPC",
      vpnGateway: "main",
    }),
  },
  {
    type: "VpnConnection",
    group: "EC2",
    name: "vpn-connection",
    properties: ({}) => ({
      Category: "VPN",
      Options: {
        StaticRoutesOnly: true,
      },
    }),
    dependencies: ({}) => ({
      customerGateway: "main-customer-gateway",
      vpnGateway: "main",
    }),
  },
  {
    type: "VpnConnectionRoute",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "172.16.1.0/24",
    }),
    dependencies: ({}) => ({
      vpnConnection: "vpn-connection",
    }),
  },
  {
    type: "Role",
    group: "IAM",
    properties: ({}) => ({
      RoleName: "role-ec2-ssm",
      Description: "Allows EC2 instances to call AWS services on your behalf.",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              Service: "ec2.amazonaws.com",
            },
            Action: "sts:AssumeRole",
          },
        ],
      },
      AttachedPolicies: [
        {
          PolicyName: "AmazonSSMManagedInstanceCore",
          PolicyArn: "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore",
        },
      ],
    }),
  },
  {
    type: "InstanceProfile",
    group: "IAM",
    name: "role-ec2-ssm",
    dependencies: ({}) => ({
      roles: ["role-ec2-ssm"],
    }),
  },
];
