// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "AutoScalingGroup",
    group: "AutoScaling",
    name: "EcsInstanceAsg",
    properties: ({}) => ({
      MinSize: 0,
      MaxSize: 1,
      DesiredCapacity: 1,
      HealthCheckGracePeriod: 0,
    }),
    dependencies: () => ({
      subnets: ["PubSubnetAz1", "PubSubnetAz2"],
      launchConfiguration:
        "EC2ContainerService-cluster-EcsInstanceLc-COYK3CQZ0QRJ",
    }),
  },
  {
    type: "LaunchConfiguration",
    group: "AutoScaling",
    name: "EC2ContainerService-cluster-EcsInstanceLc-COYK3CQZ0QRJ",
    properties: ({}) => ({
      InstanceType: "t2.micro",
      ImageId: "ami-02e136e904f3da870",
      UserData:
        'Content-Type: multipart/mixed; boundary="1f15191e3fe7ebb2094282e32ea108217183e16f27f6e8aa0b886ee04ec3"\nMIME-Version: 1.0\n\n--1f15191e3fe7ebb2094282e32ea108217183e16f27f6e8aa0b886ee04ec3\nContent-Type: text/text/x-shellscript; charset="utf-8"\nMime-Version: 1.0\n\n\n#!/bin/bash\necho ECS_CLUSTER=cluster >> /etc/ecs/ecs.config\necho \'ECS_CONTAINER_INSTANCE_TAGS={"my-tag":"my-value"}\' >> /etc/ecs/ecs.config\n--1f15191e3fe7ebb2094282e32ea108217183e16f27f6e8aa0b886ee04ec3--',
      InstanceMonitoring: {
        Enabled: true,
      },
      BlockDeviceMappings: [
        {
          DeviceName: "/dev/xvda",
          Ebs: {
            VolumeSize: 30,
            VolumeType: "gp2",
          },
        },
      ],
      EbsOptimized: false,
    }),
    dependencies: () => ({
      instanceProfile: "ecsInstanceRole",
      securityGroups: ["EcsSecurityGroup"],
    }),
  },
  {
    type: "Vpc",
    group: "EC2",
    name: "Vpc",
    properties: ({}) => ({
      CidrBlock: "10.0.0.0/16",
    }),
  },
  {
    type: "InternetGateway",
    group: "EC2",
    name: "InternetGateway",
    dependencies: () => ({
      vpc: "Vpc",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "PubSubnetAz1",
    properties: ({ config }) => ({
      CidrBlock: "10.0.0.0/24",
      AvailabilityZone: `${config.region}a`,
      MapPublicIpOnLaunch: true,
    }),
    dependencies: () => ({
      vpc: "Vpc",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "PubSubnetAz2",
    properties: ({ config }) => ({
      CidrBlock: "10.0.1.0/24",
      AvailabilityZone: `${config.region}b`,
      MapPublicIpOnLaunch: true,
    }),
    dependencies: () => ({
      vpc: "Vpc",
    }),
  },
  {
    type: "RouteTable",
    group: "EC2",
    name: "RouteViaIgw",
    dependencies: () => ({
      vpc: "Vpc",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: () => ({
      routeTable: "RouteViaIgw",
      subnet: "PubSubnetAz1",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: () => ({
      routeTable: "RouteViaIgw",
      subnet: "PubSubnetAz2",
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: () => ({
      routeTable: "RouteViaIgw",
      ig: "InternetGateway",
    }),
  },
  {
    type: "SecurityGroup",
    group: "EC2",
    name: "EcsSecurityGroup",
    properties: ({}) => ({
      Description: "Managed By GruCloud",
    }),
    dependencies: () => ({
      vpc: "Vpc",
    }),
  },
  {
    type: "SecurityGroupRuleIngress",
    group: "EC2",
    name: "EcsSecurityGroup-rule-ingress-tcp-80-v4",
    properties: ({}) => ({
      IpPermission: {
        IpProtocol: "tcp",
        FromPort: 80,
        ToPort: 80,
        IpRanges: [
          {
            CidrIp: "0.0.0.0/0",
          },
        ],
      },
    }),
    dependencies: () => ({
      securityGroup: "EcsSecurityGroup",
    }),
  },
  {
    type: "CapacityProvider",
    group: "ECS",
    name: "cp",
    properties: ({}) => ({
      autoScalingGroupProvider: {
        managedScaling: {
          instanceWarmupPeriod: 300,
          maximumScalingStepSize: 10000,
          minimumScalingStepSize: 1,
          status: "ENABLED",
          targetCapacity: 95,
        },
        managedTerminationProtection: "DISABLED",
      },
      tags: [
        {
          key: "mykey",
          value: "value",
        },
      ],
    }),
    dependencies: () => ({
      autoScalingGroup: "EcsInstanceAsg",
    }),
  },
  {
    type: "Cluster",
    group: "ECS",
    name: "cluster",
    properties: ({}) => ({
      settings: [
        {
          name: "containerInsights",
          value: "enabled",
        },
      ],
      tags: [
        {
          key: "mykey",
          value: "value",
        },
      ],
    }),
    dependencies: () => ({
      capacityProviders: ["cp"],
    }),
  },
  {
    type: "TaskDefinition",
    group: "ECS",
    name: "nginx",
    properties: ({}) => ({
      containerDefinitions: [
        {
          cpu: 0,
          environment: [],
          essential: true,
          image: "nginx",
          memory: 512,
          mountPoints: [],
          name: "nginx",
          portMappings: [
            {
              containerPort: 80,
              hostPort: 80,
              protocol: "tcp",
            },
          ],
          volumesFrom: [],
        },
      ],
      family: "nginx",
      requiresCompatibilities: ["EC2"],
      tags: [
        {
          key: "mykey",
          value: "value",
        },
      ],
    }),
  },
  {
    type: "Service",
    group: "ECS",
    name: "service-nginx",
    properties: ({}) => ({
      deploymentConfiguration: {
        deploymentCircuitBreaker: {
          enable: false,
          rollback: false,
        },
        maximumPercent: 200,
        minimumHealthyPercent: 100,
      },
      desiredCount: 1,
      enableECSManagedTags: true,
      enableExecuteCommand: false,
      launchType: "EC2",
      placementConstraints: [],
      placementStrategy: [
        {
          field: "attribute:ecs.availability-zone",
          type: "spread",
        },
        {
          field: "instanceId",
          type: "spread",
        },
      ],
      schedulingStrategy: "REPLICA",
      serviceName: "service-nginx",
      tags: [
        {
          key: "mykey",
          value: "value",
        },
      ],
    }),
    dependencies: () => ({
      cluster: "cluster",
      taskDefinition: "nginx",
    }),
  },
  {
    type: "Role",
    group: "IAM",
    name: "ecsInstanceRole",
    properties: ({}) => ({
      AssumeRolePolicyDocument: {
        Version: "2008-10-17",
        Statement: [
          {
            Sid: "",
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
          PolicyName: "AmazonEC2ContainerServiceforEC2Role",
          PolicyArn:
            "arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role",
        },
      ],
    }),
  },
  {
    type: "InstanceProfile",
    group: "IAM",
    name: "ecsInstanceRole",
    dependencies: () => ({
      roles: ["ecsInstanceRole"],
    }),
  },
];
