// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "LogGroup",
    group: "CloudWatchLogs",
    name: "RDSOSMetrics",
    properties: ({}) => ({
      retentionInDays: 30,
    }),
  },
  {
    type: "Vpc",
    group: "EC2",
    name: "pg-vpc",
    properties: ({}) => ({
      CidrBlock: "10.0.0.0/16",
    }),
  },
  { type: "InternetGateway", group: "EC2", name: "pg-igw" },
  {
    type: "InternetGatewayAttachment",
    group: "EC2",
    dependencies: ({}) => ({
      vpc: "pg-vpc",
      internetGateway: "pg-igw",
    }),
  },
  {
    type: "NatGateway",
    group: "EC2",
    name: ({ config }) => `pg-nat-public1-${config.region}a`,
    dependencies: ({ config }) => ({
      subnet: `pg-subnet-public1-${config.region}a`,
      eip: `pg-eip-${config.region}a`,
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: ({ config }) => `pg-subnet-private1-${config.region}a`,
    properties: ({ config }) => ({
      AvailabilityZone: `${config.region}a`,
      CidrBlock: "10.0.128.0/20",
    }),
    dependencies: ({}) => ({
      vpc: "pg-vpc",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: ({ config }) => `pg-subnet-private2-${config.region}b`,
    properties: ({ config }) => ({
      AvailabilityZone: `${config.region}b`,
      CidrBlock: "10.0.144.0/20",
    }),
    dependencies: ({}) => ({
      vpc: "pg-vpc",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: ({ config }) => `pg-subnet-public1-${config.region}a`,
    properties: ({ config }) => ({
      AvailabilityZone: `${config.region}a`,
      CidrBlock: "10.0.0.0/20",
    }),
    dependencies: ({}) => ({
      vpc: "pg-vpc",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: ({ config }) => `pg-subnet-public2-${config.region}b`,
    properties: ({ config }) => ({
      AvailabilityZone: `${config.region}b`,
      CidrBlock: "10.0.16.0/20",
    }),
    dependencies: ({}) => ({
      vpc: "pg-vpc",
    }),
  },
  {
    type: "RouteTable",
    group: "EC2",
    name: ({ config }) => `pg-rtb-private1-${config.region}a`,
    dependencies: ({}) => ({
      vpc: "pg-vpc",
    }),
  },
  {
    type: "RouteTable",
    group: "EC2",
    name: ({ config }) => `pg-rtb-private2-${config.region}b`,
    dependencies: ({}) => ({
      vpc: "pg-vpc",
    }),
  },
  {
    type: "RouteTable",
    group: "EC2",
    name: "pg-rtb-public",
    dependencies: ({}) => ({
      vpc: "pg-vpc",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({ config }) => ({
      routeTable: `pg-rtb-private1-${config.region}a`,
      subnet: `pg-subnet-private1-${config.region}a`,
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({ config }) => ({
      routeTable: `pg-rtb-private2-${config.region}b`,
      subnet: `pg-subnet-private2-${config.region}b`,
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({ config }) => ({
      routeTable: "pg-rtb-public",
      subnet: `pg-subnet-public1-${config.region}a`,
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({ config }) => ({
      routeTable: "pg-rtb-public",
      subnet: `pg-subnet-public2-${config.region}b`,
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({ config }) => ({
      routeTable: `pg-rtb-private1-${config.region}a`,
      natGateway: `pg-nat-public1-${config.region}a`,
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({ config }) => ({
      routeTable: `pg-rtb-private2-${config.region}b`,
      natGateway: `pg-nat-public1-${config.region}a`,
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({}) => ({
      routeTable: "pg-rtb-public",
      ig: "pg-igw",
    }),
  },
  {
    type: "SecurityGroup",
    group: "EC2",
    properties: ({}) => ({
      GroupName: "pg",
      Description: "Created by RDS management console",
    }),
    dependencies: ({}) => ({
      vpc: "pg-vpc",
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
            CidrIp: "92.147.31.54/32",
          },
        ],
        ToPort: 5432,
      },
    }),
    dependencies: ({}) => ({
      securityGroup: "sg::pg-vpc::pg",
    }),
  },
  {
    type: "ElasticIpAddress",
    group: "EC2",
    name: ({ config }) => `pg-eip-${config.region}a`,
  },
  {
    type: "Role",
    group: "IAM",
    name: "rds-monitoring-role",
    properties: ({}) => ({
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "",
            Effect: "Allow",
            Principal: {
              Service: `monitoring.rds.amazonaws.com`,
            },
            Action: "sts:AssumeRole",
          },
        ],
      },
      AttachedPolicies: [
        {
          PolicyName: "AmazonRDSEnhancedMonitoringRole",
          PolicyArn:
            "arn:aws:iam::aws:policy/service-role/AmazonRDSEnhancedMonitoringRole",
        },
      ],
    }),
  },
  {
    type: "DBSubnetGroup",
    group: "RDS",
    name: "default-vpc-07c0392e5e3359f2e",
    properties: ({}) => ({
      DBSubnetGroupDescription: "Created from the RDS Management Console",
    }),
    dependencies: ({ config }) => ({
      subnets: [
        `pg-subnet-private1-${config.region}a`,
        `pg-subnet-private2-${config.region}b`,
        `pg-subnet-public1-${config.region}a`,
        `pg-subnet-public2-${config.region}b`,
      ],
    }),
  },
  {
    type: "DBCluster",
    group: "RDS",
    name: "database-1",
    properties: ({}) => ({
      BackupRetentionPeriod: 7,
      DatabaseName: "mydb",
      Engine: "aurora-postgresql",
      EngineVersion: "13.6",
      MasterUsername: process.env.DATABASE_1_MASTER_USERNAME,
      PreferredBackupWindow: "09:29-09:59",
      PreferredMaintenanceWindow: "sun:07:52-sun:08:22",
      IAMDatabaseAuthenticationEnabled: false,
      EngineMode: "provisioned",
      DeletionProtection: false,
      HttpEndpointEnabled: false,
      CopyTagsToSnapshot: true,
      ServerlessV2ScalingConfiguration: {
        MinCapacity: 0.5,
        MaxCapacity: 1,
      },
      MasterUserPassword: process.env.DATABASE_1_MASTER_USER_PASSWORD,
    }),
    dependencies: ({}) => ({
      dbSubnetGroup: "default-vpc-07c0392e5e3359f2e",
      securityGroups: ["sg::pg-vpc::pg"],
    }),
  },
  {
    type: "DBInstance",
    group: "RDS",
    name: "database-1-instance-1",
    properties: ({}) => ({
      DBInstanceIdentifier: "database-1-instance-1",
      DBInstanceClass: "db.serverless",
      Engine: "aurora-postgresql",
      PreferredMaintenanceWindow: "tue:08:06-tue:08:36",
      EngineVersion: "13.6",
      PubliclyAccessible: false,
      StorageType: "aurora",
      DBClusterIdentifier: "database-1",
      StorageEncrypted: true,
      MonitoringInterval: 60,
      PerformanceInsightsEnabled: true,
      PerformanceInsightsRetentionPeriod: 7,
      EnablePerformanceInsights: true,
      MasterUsername: process.env.DATABASE_1_INSTANCE_1_MASTER_USERNAME,
      MasterUserPassword:
        process.env.DATABASE_1_INSTANCE_1_MASTER_USER_PASSWORD,
    }),
    dependencies: ({}) => ({
      dbSubnetGroup: "default-vpc-07c0392e5e3359f2e",
      securityGroups: ["sg::pg-vpc::pg"],
      dbCluster: "database-1",
      monitoringRole: "rds-monitoring-role",
    }),
  },
];
