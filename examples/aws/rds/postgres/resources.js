// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "Vpc",
    group: "EC2",
    name: "vpc-postgres",
    properties: ({}) => ({
      CidrBlock: "192.168.0.0/16",
      DnsHostnames: true,
    }),
  },
  {
    type: "InternetGateway",
    group: "EC2",
    name: "ig-postgres",
    dependencies: () => ({
      vpc: "vpc-postgres",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "subnet-1",
    properties: ({ config }) => ({
      CidrBlock: "192.168.0.0/19",
      AvailabilityZone: `${config.region}a`,
    }),
    dependencies: () => ({
      vpc: "vpc-postgres",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "subnet-2",
    properties: ({ config }) => ({
      CidrBlock: "192.168.32.0/19",
      AvailabilityZone: `${config.region}b`,
    }),
    dependencies: () => ({
      vpc: "vpc-postgres",
    }),
  },
  {
    type: "RouteTable",
    group: "EC2",
    name: "route-table-public",
    dependencies: () => ({
      vpc: "vpc-postgres",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: () => ({
      routeTable: "route-table-public",
      subnet: "subnet-1",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: () => ({
      routeTable: "route-table-public",
      subnet: "subnet-2",
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: () => ({
      routeTable: "route-table-public",
      ig: "ig-postgres",
    }),
  },
  {
    type: "SecurityGroup",
    group: "EC2",
    name: "security-group",
    properties: ({}) => ({
      Description: "Managed By GruCloud",
    }),
    dependencies: () => ({
      vpc: "vpc-postgres",
    }),
  },
  {
    type: "SecurityGroupRuleIngress",
    group: "EC2",
    name: "sg-rule-ingress-postgres",
    properties: ({}) => ({
      IpPermission: {
        IpProtocol: "tcp",
        FromPort: 5432,
        ToPort: 5432,
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
      },
    }),
    dependencies: () => ({
      securityGroup: "security-group",
    }),
  },
  {
    type: "Policy",
    group: "IAM",
    name: "lambda-policy",
    properties: ({}) => ({
      PolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Action: ["logs:*"],
            Effect: "Allow",
            Resource: "*",
          },
          {
            Action: ["sqs:*"],
            Effect: "Allow",
            Resource: "*",
          },
        ],
      },
      Path: "/",
      Description: "Allow logs",
    }),
  },
  { type: "Key", group: "KMS", name: "secret-key-test" },
  {
    type: "DBSubnetGroup",
    group: "RDS",
    name: "subnet-group-postgres",
    properties: ({}) => ({
      DBSubnetGroupDescription: "db subnet group",
    }),
    dependencies: () => ({
      subnets: ["subnet-1", "subnet-2"],
    }),
  },
  {
    type: "DBInstance",
    group: "RDS",
    name: "db-instance",
    properties: ({}) => ({
      DBInstanceClass: "db.t2.micro",
      Engine: "postgres",
      EngineVersion: "12.5",
      AllocatedStorage: 20,
      MaxAllocatedStorage: 1000,
      PubliclyAccessible: true,
      PreferredBackupWindow: "22:10-22:40",
      PreferredMaintenanceWindow: "fri:23:40-sat:00:10",
      BackupRetentionPeriod: 1,
      MasterUsername: process.env.DB_INSTANCE_MASTER_USERNAME,
      MasterUserPassword: process.env.DB_INSTANCE_MASTER_USER_PASSWORD,
    }),
    dependencies: () => ({
      dbSubnetGroup: "subnet-group-postgres",
      securityGroups: ["security-group"],
    }),
  },
];
