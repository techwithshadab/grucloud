// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "LogGroup",
    group: "CloudWatchLogs",
    name: "/aws/rds/cluster/cluster-postgres-stateless/postgresql",
  },
  { type: "KeyPair", group: "EC2", name: "kp-postgres-stateless" },
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
      subnet: "subnet-public-a",
      eip: "iep",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "subnet-private-a",
    properties: ({ config }) => ({
      CidrBlock: "192.168.96.0/19",
      AvailabilityZone: `${config.region}a`,
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
      CidrBlock: "192.168.128.0/19",
      AvailabilityZone: `${config.region}b`,
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
      CidrBlock: "192.168.0.0/19",
      AvailabilityZone: `${config.region}a`,
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
      CidrBlock: "192.168.32.0/19",
      AvailabilityZone: `${config.region}b`,
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
    name: "route-table-public",
    dependencies: ({}) => ({
      vpc: "vpc",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({}) => ({
      routeTable: "route-table-private-a",
      subnet: "subnet-private-a",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({}) => ({
      routeTable: "route-table-private-b",
      subnet: "subnet-private-b",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({}) => ({
      routeTable: "route-table-public",
      subnet: "subnet-public-a",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({}) => ({
      routeTable: "route-table-public",
      subnet: "subnet-public-b",
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({}) => ({
      routeTable: "route-table-private-a",
      natGateway: "nat-gateway",
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({}) => ({
      routeTable: "route-table-private-b",
      natGateway: "nat-gateway",
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({}) => ({
      routeTable: "route-table-public",
      ig: "internet-gateway",
    }),
  },
  {
    type: "SecurityGroup",
    group: "EC2",
    properties: ({}) => ({
      GroupName: "security-group-postgres",
      Description: "Managed By GruCloud",
    }),
    dependencies: ({}) => ({
      vpc: "vpc",
    }),
  },
  {
    type: "SecurityGroup",
    group: "EC2",
    properties: ({}) => ({
      GroupName: "security-group-public",
      Description: "Managed By GruCloud",
    }),
    dependencies: ({}) => ({
      vpc: "vpc",
    }),
  },
  {
    type: "SecurityGroupRuleIngress",
    group: "EC2",
    properties: ({}) => ({
      IpPermission: {
        FromPort: 5432,
        IpProtocol: "tcp",
        IpRanges: [
          {
            CidrIp: "0.0.0.0/0",
          },
        ],
        Ipv6Ranges: [
          {
            CidrIpv6: "::/0",
          },
        ],
        ToPort: 5432,
      },
    }),
    dependencies: ({}) => ({
      securityGroup: "sg::vpc::security-group-postgres",
      securityGroupFrom: ["sg::vpc::security-group-public"],
    }),
  },
  {
    type: "SecurityGroupRuleIngress",
    group: "EC2",
    properties: ({}) => ({
      IpPermission: {
        FromPort: 22,
        IpProtocol: "tcp",
        IpRanges: [
          {
            CidrIp: "0.0.0.0/0",
          },
        ],
        Ipv6Ranges: [
          {
            CidrIpv6: "::/0",
          },
        ],
        ToPort: 22,
      },
    }),
    dependencies: ({}) => ({
      securityGroup: "sg::vpc::security-group-public",
    }),
  },
  { type: "ElasticIpAddress", group: "EC2", name: "eip-bastion" },
  { type: "ElasticIpAddress", group: "EC2", name: "iep" },
  {
    type: "ElasticIpAddressAssociation",
    group: "EC2",
    dependencies: ({}) => ({
      eip: "eip-bastion",
      instance: "bastion",
    }),
  },
  {
    type: "Instance",
    group: "EC2",
    name: "bastion",
    properties: ({ config, getId }) => ({
      InstanceType: "t2.micro",
      Placement: {
        AvailabilityZone: `${config.region}a`,
      },
      NetworkInterfaces: [
        {
          DeviceIndex: 0,
          Groups: [
            `${getId({
              type: "SecurityGroup",
              group: "EC2",
              name: "sg::vpc::security-group-public",
            })}`,
          ],
          SubnetId: `${getId({
            type: "Subnet",
            group: "EC2",
            name: "subnet-public-a",
          })}`,
        },
      ],
      Image: {
        Description: "Amazon Linux 2 AMI 2.0.20211001.1 x86_64 HVM gp2",
      },
    }),
    dependencies: ({}) => ({
      subnets: ["subnet-public-a"],
      keyPair: "kp-postgres-stateless",
      securityGroups: ["sg::vpc::security-group-public"],
    }),
  },
  {
    type: "DBSubnetGroup",
    group: "RDS",
    name: "subnet-group-postgres-stateless",
    properties: ({}) => ({
      DBSubnetGroupDescription: "db subnet group",
    }),
    dependencies: ({}) => ({
      subnets: ["subnet-private-a", "subnet-private-b"],
    }),
  },
  {
    type: "DBCluster",
    group: "RDS",
    name: "cluster-postgres-stateless",
    properties: ({}) => ({
      BackupRetentionPeriod: 1,
      DatabaseName: "dev",
      Engine: "aurora-postgresql",
      EngineVersion: "10.14",
      MasterUsername: process.env.CLUSTER_POSTGRES_STATELESS_MASTER_USERNAME,
      PreferredBackupWindow: "01:39-02:09",
      PreferredMaintenanceWindow: "sun:00:47-sun:01:17",
      IAMDatabaseAuthenticationEnabled: false,
      EngineMode: "serverless",
      DeletionProtection: false,
      HttpEndpointEnabled: false,
      Tags: [
        {
          Key: "mykey1",
          Value: "myvalue",
        },
      ],
      ScalingConfiguration: {
        MinCapacity: 2,
        MaxCapacity: 4,
        AutoPause: true,
        SecondsUntilAutoPause: 300,
        TimeoutAction: "RollbackCapacityChange",
        SecondsBeforeTimeout: 300,
      },
      MasterUserPassword:
        process.env.CLUSTER_POSTGRES_STATELESS_MASTER_USER_PASSWORD,
    }),
    dependencies: ({}) => ({
      dbSubnetGroup: "subnet-group-postgres-stateless",
      securityGroups: ["sg::vpc::security-group-postgres"],
    }),
  },
];
