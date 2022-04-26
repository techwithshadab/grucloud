// Generated by 'gc gencode'
const { pipe, get, eq, and } = require("rubico");
const { find } = require("rubico/x");

exports.createResources = () => [
  {
    type: "Certificate",
    group: "ACM",
    name: "grucloud.org",
    properties: ({}) => ({
      SubjectAlternativeNames: ["grucloud.org", "*.grucloud.org"],
    }),
  },
  {
    type: "AutoScalingGroup",
    group: "AutoScaling",
    name: "asg-ng-1",
    readOnly: true,
    properties: ({}) => ({
      MinSize: 1,
      MaxSize: 1,
      DesiredCapacity: 1,
      HealthCheckGracePeriod: 15,
      Tags: [
        {
          Key: "k8s.io/cluster-autoscaler/enabled",
          Value: "true",
        },
        {
          Key: "k8s.io/cluster-autoscaler/my-cluster",
          Value: "owned",
        },
        {
          Key: "kubernetes.io/cluster/my-cluster",
          Value: "owned",
        },
      ],
    }),
    dependencies: () => ({
      subnets: ["SubnetPublicUSEAST1D", "SubnetPublicUSEAST1F"],
    }),
  },
  {
    type: "AutoScalingAttachment",
    group: "AutoScaling",
    dependencies: () => ({
      autoScalingGroup: "asg-ng-1",
      targetGroup: "target-group-rest",
    }),
  },
  {
    type: "AutoScalingAttachment",
    group: "AutoScaling",
    dependencies: () => ({
      autoScalingGroup: "asg-ng-1",
      targetGroup: "target-group-web",
    }),
  },
  {
    type: "Vpc",
    group: "EC2",
    name: "VPC",
    properties: ({}) => ({
      CidrBlock: "192.168.0.0/16",
      DnsHostnames: true,
    }),
  },
  {
    type: "InternetGateway",
    group: "EC2",
    name: "InternetGateway",
    dependencies: () => ({
      vpc: "VPC",
    }),
  },
  {
    type: "NatGateway",
    group: "EC2",
    name: "NATGateway",
    dependencies: () => ({
      subnet: "SubnetPublicUSEAST1F",
      eip: "NATIP",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "SubnetPrivateUSEAST1D",
    properties: ({ config }) => ({
      CidrBlock: "192.168.96.0/19",
      AvailabilityZone: `${config.region}d`,
      Tags: [
        {
          Key: "kubernetes.io/role/internal-elb",
          Value: "1",
        },
      ],
    }),
    dependencies: () => ({
      vpc: "VPC",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "SubnetPrivateUSEAST1F",
    properties: ({ config }) => ({
      CidrBlock: "192.168.64.0/19",
      AvailabilityZone: `${config.region}f`,
      Tags: [
        {
          Key: "kubernetes.io/role/internal-elb",
          Value: "1",
        },
      ],
    }),
    dependencies: () => ({
      vpc: "VPC",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "SubnetPublicUSEAST1D",
    properties: ({ config }) => ({
      CidrBlock: "192.168.32.0/19",
      AvailabilityZone: `${config.region}d`,
      MapPublicIpOnLaunch: true,
      Tags: [
        {
          Key: "kubernetes.io/role/elb",
          Value: "1",
        },
      ],
    }),
    dependencies: () => ({
      vpc: "VPC",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "SubnetPublicUSEAST1F",
    properties: ({ config }) => ({
      CidrBlock: "192.168.0.0/19",
      AvailabilityZone: `${config.region}f`,
      MapPublicIpOnLaunch: true,
      Tags: [
        {
          Key: "kubernetes.io/role/elb",
          Value: "1",
        },
      ],
    }),
    dependencies: () => ({
      vpc: "VPC",
    }),
  },
  {
    type: "RouteTable",
    group: "EC2",
    name: "PrivateRouteTableUSEAST1D",
    dependencies: () => ({
      vpc: "VPC",
    }),
  },
  {
    type: "RouteTable",
    group: "EC2",
    name: "PrivateRouteTableUSEAST1F",
    dependencies: () => ({
      vpc: "VPC",
    }),
  },
  {
    type: "RouteTable",
    group: "EC2",
    name: "PublicRouteTable",
    dependencies: () => ({
      vpc: "VPC",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: () => ({
      routeTable: "PrivateRouteTableUSEAST1D",
      subnet: "SubnetPrivateUSEAST1D",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: () => ({
      routeTable: "PrivateRouteTableUSEAST1F",
      subnet: "SubnetPrivateUSEAST1F",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: () => ({
      routeTable: "PublicRouteTable",
      subnet: "SubnetPublicUSEAST1D",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: () => ({
      routeTable: "PublicRouteTable",
      subnet: "SubnetPublicUSEAST1F",
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: () => ({
      routeTable: "PrivateRouteTableUSEAST1D",
      natGateway: "NATGateway",
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: () => ({
      routeTable: "PrivateRouteTableUSEAST1F",
      natGateway: "NATGateway",
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: () => ({
      routeTable: "PublicRouteTable",
      ig: "InternetGateway",
    }),
  },
  {
    type: "SecurityGroup",
    group: "EC2",
    properties: ({}) => ({
      GroupName: "ClusterSharedNodeSecurityGroup",
      Description: "Communication between all nodes in the cluster",
    }),
    dependencies: () => ({
      vpc: "VPC",
    }),
  },
  {
    type: "SecurityGroup",
    group: "EC2",
    properties: ({}) => ({
      GroupName: "ControlPlaneSecurityGroup",
      Description:
        "Communication between the control plane and worker nodegroups",
    }),
    dependencies: () => ({
      vpc: "VPC",
    }),
  },
  {
    type: "SecurityGroup",
    group: "EC2",
    name: "sg::VPC::eks-cluster-sg-my-cluster-1909614887",
    readOnly: true,
    filterLives: ({ resources }) =>
      pipe([
        () => resources,
        find(
          pipe([
            get("live.Tags"),
            find(
              and([
                eq(get("Key"), "aws:eks:cluster-name"),
                eq(get("Value"), "my-cluster"),
              ])
            ),
          ])
        ),
      ])(),
  },
  {
    type: "SecurityGroup",
    group: "EC2",
    properties: ({}) => ({
      GroupName: "load-balancer",
      Description: "Load Balancer",
    }),
    dependencies: () => ({
      vpc: "VPC",
    }),
  },
  {
    type: "SecurityGroupRuleIngress",
    group: "EC2",
    properties: ({}) => ({
      IpPermission: {
        IpProtocol: "-1",
      },
    }),
    dependencies: () => ({
      securityGroup: "sg::VPC::ClusterSharedNodeSecurityGroup",
      securityGroupFrom: ["sg::VPC::eks-cluster-sg-my-cluster-1909614887"],
    }),
  },
  {
    type: "SecurityGroupRuleIngress",
    group: "EC2",
    properties: ({}) => ({
      IpPermission: {
        FromPort: 443,
        IpProtocol: "tcp",
        IpRanges: [
          {
            CidrIp: "0.0.0.0/0",
          },
        ],
        ToPort: 443,
      },
    }),
    dependencies: () => ({
      securityGroup: "sg::VPC::load-balancer",
    }),
  },
  {
    type: "SecurityGroupRuleIngress",
    group: "EC2",
    properties: ({}) => ({
      IpPermission: {
        FromPort: 80,
        IpProtocol: "tcp",
        IpRanges: [
          {
            CidrIp: "0.0.0.0/0",
          },
        ],
        ToPort: 80,
      },
    }),
    dependencies: () => ({
      securityGroup: "sg::VPC::load-balancer",
    }),
  },
  { type: "ElasticIpAddress", group: "EC2", name: "NATIP" },
  {
    type: "LaunchTemplate",
    group: "EC2",
    name: "eksctl-my-cluster-nodegroup-ng-1",
    properties: ({}) => ({
      LaunchTemplateData: {
        BlockDeviceMappings: [
          {
            DeviceName: "/dev/xvda",
            Ebs: {
              Iops: 3000,
              VolumeSize: 80,
              VolumeType: "gp3",
              Throughput: 125,
            },
          },
        ],
        MetadataOptions: {
          HttpTokens: "optional",
          HttpPutResponseHopLimit: 2,
        },
      },
    }),
  },
  {
    type: "Cluster",
    group: "EKS",
    name: "my-cluster",
    dependencies: () => ({
      subnets: [
        "SubnetPrivateUSEAST1D",
        "SubnetPrivateUSEAST1F",
        "SubnetPublicUSEAST1D",
        "SubnetPublicUSEAST1F",
      ],
      securityGroups: ["sg::VPC::ControlPlaneSecurityGroup"],
      role: "eksctl-my-cluster-cluster-ServiceRole-1T8YHA5ZIYVRB",
    }),
  },
  {
    type: "NodeGroup",
    group: "EKS",
    name: "ng-1",
    properties: ({}) => ({
      capacityType: "ON_DEMAND",
      scalingConfig: {
        desiredSize: 1,
        maxSize: 1,
        minSize: 1,
      },
      labels: {
        "alpha.eksctl.io/cluster-name": "my-cluster",
        "alpha.eksctl.io/nodegroup-name": "ng-1",
      },
    }),
    dependencies: () => ({
      cluster: "my-cluster",
      subnets: ["SubnetPublicUSEAST1D", "SubnetPublicUSEAST1F"],
      role: "eksctl-my-cluster-nodegroup-ng-1-NodeInstanceRole-1LT5OVYUG2SEI",
      launchTemplate: "eksctl-my-cluster-nodegroup-ng-1",
    }),
  },
  {
    type: "LoadBalancer",
    group: "ELBv2",
    name: "load-balancer",
    properties: ({}) => ({
      Scheme: "internet-facing",
      Type: "application",
      IpAddressType: "ipv4",
    }),
    dependencies: () => ({
      subnets: ["SubnetPublicUSEAST1D", "SubnetPublicUSEAST1F"],
      securityGroups: ["sg::VPC::load-balancer"],
    }),
  },
  {
    type: "TargetGroup",
    group: "ELBv2",
    name: "target-group-rest",
    properties: ({}) => ({
      Protocol: "HTTP",
      Port: 30020,
      HealthCheckProtocol: "HTTP",
      HealthCheckPath: "/api/v1/version",
    }),
    dependencies: () => ({
      vpc: "VPC",
    }),
  },
  {
    type: "TargetGroup",
    group: "ELBv2",
    name: "target-group-web",
    properties: ({}) => ({
      Protocol: "HTTP",
      Port: 30010,
      HealthCheckProtocol: "HTTP",
    }),
    dependencies: () => ({
      vpc: "VPC",
    }),
  },
  {
    type: "Listener",
    group: "ELBv2",
    properties: ({}) => ({
      Port: 80,
      Protocol: "HTTP",
    }),
    dependencies: () => ({
      loadBalancer: "load-balancer",
      targetGroup: "target-group-web",
    }),
  },
  {
    type: "Listener",
    group: "ELBv2",
    properties: ({}) => ({
      Port: 443,
      Protocol: "HTTPS",
    }),
    dependencies: () => ({
      loadBalancer: "load-balancer",
      targetGroup: "target-group-web",
      certificate: "grucloud.org",
    }),
  },
  {
    type: "Rule",
    group: "ELBv2",
    properties: ({}) => ({
      Priority: "1",
      Conditions: [
        {
          Field: "path-pattern",
          Values: ["/*"],
        },
      ],
      Actions: [
        {
          Type: "redirect",
          Order: 1,
          RedirectConfig: {
            Protocol: "HTTPS",
            Port: "443",
            Host: "#{host}",
            Path: "/#{path}",
            Query: "#{query}",
            StatusCode: "HTTP_301",
          },
        },
      ],
    }),
    dependencies: () => ({
      listener: "listener::load-balancer::HTTP::80",
    }),
  },
  {
    type: "Rule",
    group: "ELBv2",
    properties: ({}) => ({
      Priority: "1",
      Conditions: [
        {
          Field: "path-pattern",
          Values: ["/api/*"],
        },
      ],
    }),
    dependencies: () => ({
      listener: "listener::load-balancer::HTTPS::443",
      targetGroup: "target-group-rest",
    }),
  },
  {
    type: "Rule",
    group: "ELBv2",
    properties: ({}) => ({
      Priority: "2",
      Conditions: [
        {
          Field: "path-pattern",
          Values: ["/*"],
        },
      ],
    }),
    dependencies: () => ({
      listener: "listener::load-balancer::HTTPS::443",
      targetGroup: "target-group-web",
    }),
  },
  {
    type: "Role",
    group: "IAM",
    name: "eksctl-my-cluster-cluster-ServiceRole-1T8YHA5ZIYVRB",
    properties: ({}) => ({
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              Service: `eks.amazonaws.com`,
            },
            Action: "sts:AssumeRole",
          },
        ],
      },
      Policies: [
        {
          PolicyDocument: {
            Version: "2012-10-17",
            Statement: [
              {
                Action: ["cloudwatch:PutMetricData"],
                Resource: `*`,
                Effect: "Allow",
              },
            ],
          },
          PolicyName: "eksctl-my-cluster-cluster-PolicyCloudWatchMetrics",
        },
        {
          PolicyDocument: {
            Version: "2012-10-17",
            Statement: [
              {
                Action: [
                  "ec2:DescribeAccountAttributes",
                  "ec2:DescribeAddresses",
                  "ec2:DescribeInternetGateways",
                ],
                Resource: `*`,
                Effect: "Allow",
              },
            ],
          },
          PolicyName: "eksctl-my-cluster-cluster-PolicyELBPermissions",
        },
      ],
      AttachedPolicies: [
        {
          PolicyName: "AmazonEKSClusterPolicy",
          PolicyArn: "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy",
        },
        {
          PolicyName: "AmazonEKSVPCResourceController",
          PolicyArn: "arn:aws:iam::aws:policy/AmazonEKSVPCResourceController",
        },
      ],
    }),
  },
  {
    type: "Role",
    group: "IAM",
    name: "eksctl-my-cluster-nodegroup-ng-1-NodeInstanceRole-1LT5OVYUG2SEI",
    properties: ({}) => ({
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              Service: `ec2.amazonaws.com`,
            },
            Action: "sts:AssumeRole",
          },
        ],
      },
      AttachedPolicies: [
        {
          PolicyName: "AmazonEKSWorkerNodePolicy",
          PolicyArn: "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy",
        },
        {
          PolicyName: "AmazonEC2ContainerRegistryReadOnly",
          PolicyArn:
            "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly",
        },
        {
          PolicyName: "AmazonSSMManagedInstanceCore",
          PolicyArn: "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore",
        },
        {
          PolicyName: "AmazonEKS_CNI_Policy",
          PolicyArn: "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy",
        },
      ],
    }),
  },
  {
    type: "HostedZone",
    group: "Route53",
    name: "grucloud.org.",
    dependencies: () => ({
      domain: "grucloud.org",
    }),
  },
  {
    type: "Record",
    group: "Route53",
    dependencies: () => ({
      hostedZone: "grucloud.org.",
      loadBalancer: "load-balancer",
    }),
  },
  {
    type: "Domain",
    group: "Route53Domains",
    name: "grucloud.org",
    readOnly: true,
  },
];
