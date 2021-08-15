(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{197:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return t})),a.d(n,"metadata",(function(){return c})),a.d(n,"toc",(function(){return i})),a.d(n,"default",(function(){return m}));var o=a(3),r=a(8),l=(a(0),a(201)),t={id:"IamRole",title:"Iam Role"},c={unversionedId:"aws/resources/IAM/IamRole",id:"aws/resources/IAM/IamRole",isDocsHomePage:!1,title:"Iam Role",description:"Provides an Iam Role.",source:"@site/docs/aws/resources/IAM/IamRole.md",sourceDirName:"aws/resources/IAM",slug:"/aws/resources/IAM/IamRole",permalink:"/docs/aws/resources/IAM/IamRole",version:"current",frontMatter:{id:"IamRole",title:"Iam Role"},sidebar:"docs",previous:{title:"Iam Policy Read Only",permalink:"/docs/aws/resources/IAM/IamPolicyReadOnly"},next:{title:"Iam User",permalink:"/docs/aws/resources/IAM/IamUser"}},i=[{value:"Add a policy to a role",id:"add-a-policy-to-a-role",children:[]},{value:"Add a role to an instance profile",id:"add-a-role-to-an-instance-profile",children:[]},{value:"Link to an OpenIdConnectProvider",id:"link-to-an-openidconnectprovider",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Used By",id:"used-by",children:[]},{value:"List",id:"list",children:[]},{value:"AWS CLI",id:"aws-cli",children:[]}],s={toc:i};function m(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},s,a,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Provides an Iam Role."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'const iamRole = provider.iam.makeRole({\n  name: "my-role",\n  properties: () => ({\n    AssumeRolePolicyDocument: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Action: "sts:AssumeRole",\n          Principal: {\n            Service: "ec2.amazonaws.com",\n          },\n          Effect: "Allow",\n          Sid: "",\n        },\n      ],\n    },\n  }),\n});\n')),Object(l.b)("h3",{id:"add-a-policy-to-a-role"},"Add a policy to a role"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'const iamPolicy = provider.iam.makePolicy({\n  name: "my-policy",\n  properties: () => ({\n    PolicyDocument: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Action: ["ec2:Describe*"],\n          Effect: "Allow",\n          Resource: "*",\n        },\n      ],\n    },\n    Description: "Allow ec2:Describe",\n    Path: "/",\n  }),\n});\n\nconst iamRole = provider.iam.makeRole({\n  name: "my-role",\n  dependencies: { policies: [iamPolicy] },\n\n  properties: () => ({\n    AssumeRolePolicyDocument: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Action: "sts:AssumeRole",\n          Principal: {\n            Service: "ec2.amazonaws.com",\n          },\n          Effect: "Allow",\n          Sid: "",\n        },\n      ],\n    },\n  }),\n});\n')),Object(l.b)("h3",{id:"add-a-role-to-an-instance-profile"},"Add a role to an instance profile"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'const iamRole = provider.iam.makeRole({\n  name: "my-role",\n  properties: () => ({\n    AssumeRolePolicyDocument: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Action: "sts:AssumeRole",\n          Principal: {\n            Service: "ec2.amazonaws.com",\n          },\n          Effect: "Allow",\n          Sid: "",\n        },\n      ],\n    },\n  }),\n});\n\nconst iamInstanceProfile = provider.iam.makeInstanceProfile({\n  name: "my-instance-profile",\n  dependencies: { iamRoles: [iamRole] },\n  properties: () => ({}),\n});\n')),Object(l.b)("h3",{id:"link-to-an-openidconnectprovider"},"Link to an OpenIdConnectProvider"),Object(l.b)("p",null,"The ",Object(l.b)("strong",{parentName:"p"},"AssumeRolePolicyDocument")," will be filled with the ",Object(l.b)("strong",{parentName:"p"},"openIdConnectProvider")," dependency."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'\nconst loadBalancerPolicy = require("./load-balancer-policy.json");\n\nconst iamOpenIdConnectProvider = provider.iam.makeOpenIDConnectProvider({\n  name: "oidc",\n  dependencies: { cluster },\n});\n\nconst iamLoadBalancerPolicy = provider.iam.makePolicy({\n  name: "AWSLoadBalancerControllerIAMPolicy",\n  properties: () => ({\n    PolicyDocument: loadBalancerPolicy,\n    Description: "Load Balancer Policy",\n  }),\n});\n\nconst roleLoadBalancer = provider.iam.makeRole({\n  name: "roleLoadBalancer"\n  dependencies: {\n    openIdConnectProvider: iamOpenIdConnectProvider,\n    policies: [iamLoadBalancerPolicy],\n  },\n});\n')),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/iam/iam/iac.js"},"simple example"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://github.com/grucloud/grucloud/blob/main/packages/modules/aws/load-balancer-controller/iac.js#"},"load balancer controller module")))),Object(l.b)("h3",{id:"properties"},"Properties"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#createRole-property"},"properties list"))),Object(l.b)("h3",{id:"dependencies"},"Dependencies"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"./IamPolicy"},"Iam Policy")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"./IamOpenIDConnectProvider"},"Iam OpenIDConnectProvider"))),Object(l.b)("h3",{id:"used-by"},"Used By"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"./IamInstanceProfile"},"IamInstanceProfile"))),Object(l.b)("h3",{id:"list"},"List"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"gc list -t IamRole\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 1/1\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 3 iam::Role from aws                                                                   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: role-cluster                                                                     \u2502\n\u2502 managedByUs: Yes                                                                       \u2502\n\u2502 live:                                                                                  \u2502\n\u2502   Path: /                                                                              \u2502\n\u2502   RoleName: role-cluster                                                               \u2502\n\u2502   RoleId: AROA4HNBM2ZQBIII7KZ4Z                                                        \u2502\n\u2502   Arn: arn:aws:iam::840541460064:role/role-cluster                                     \u2502\n\u2502   CreateDate: 2021-07-21T13:29:11.000Z                                                 \u2502\n\u2502   AssumeRolePolicyDocument:                                                            \u2502\n\u2502     Version: 2012-10-17                                                                \u2502\n\u2502     Statement:                                                                         \u2502\n\u2502       - Effect: Allow                                                                  \u2502\n\u2502         Principal:                                                                     \u2502\n\u2502           Service: eks.amazonaws.com                                                   \u2502\n\u2502         Action: sts:AssumeRole                                                         \u2502\n\u2502   MaxSessionDuration: 3600                                                             \u2502\n\u2502   Tags:                                                                                \u2502\n\u2502     - Key: Name                                                                        \u2502\n\u2502       Value: role-cluster                                                              \u2502\n\u2502     - Key: gc-managed-by                                                               \u2502\n\u2502       Value: grucloud                                                                  \u2502\n\u2502     - Key: gc-created-by-provider                                                      \u2502\n\u2502       Value: aws                                                                       \u2502\n\u2502     - Key: gc-stage                                                                    \u2502\n\u2502       Value: dev                                                                       \u2502\n\u2502     - Key: gc-project-name                                                             \u2502\n\u2502       Value: @grucloud/example-module-aws-load-balancer-controller                     \u2502\n\u2502     - Key: gc-namespace                                                                \u2502\n\u2502       Value: EKS                                                                       \u2502\n\u2502   InstanceProfiles: []                                                                 \u2502\n\u2502   AttachedPolicies:                                                                    \u2502\n\u2502     - PolicyName: AmazonEKSClusterPolicy                                               \u2502\n\u2502       PolicyArn: arn:aws:iam::aws:policy/AmazonEKSClusterPolicy                        \u2502\n\u2502     - PolicyName: AmazonEKSVPCResourceController                                       \u2502\n\u2502       PolicyArn: arn:aws:iam::aws:policy/AmazonEKSVPCResourceController                \u2502\n\u2502   Policies: []                                                                         \u2502\n\u2502                                                                                        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: role-load-balancer                                                               \u2502\n\u2502 managedByUs: Yes                                                                       \u2502\n\u2502 live:                                                                                  \u2502\n\u2502   Path: /                                                                              \u2502\n\u2502   RoleName: role-load-balancer                                                         \u2502\n\u2502   RoleId: AROA4HNBM2ZQH2RLTJRCD                                                        \u2502\n\u2502   Arn: arn:aws:iam::840541460064:role/role-load-balancer                               \u2502\n\u2502   CreateDate: 2021-07-21T13:39:48.000Z                                                 \u2502\n\u2502   AssumeRolePolicyDocument:                                                            \u2502\n\u2502     Version: 2012-10-17                                                                \u2502\n\u2502     Statement:                                                                         \u2502\n\u2502       - Effect: Allow                                                                  \u2502\n\u2502         Principal:                                                                     \u2502\n\u2502           Federated: arn:aws:iam::840541460064:oidc-provider/oidc.eks.eu-west-2.amazo\u2026 \u2502\n\u2502         Action: sts:AssumeRoleWithWebIdentity                                          \u2502\n\u2502         Condition:                                                                     \u2502\n\u2502           StringEquals:                                                                \u2502\n\u2502             oidc.eks.eu-west-2.amazonaws.com/id/9377E3CCC52850A5BC4BEF6D012643E6:aud:\u2026 \u2502\n\u2502   MaxSessionDuration: 3600                                                             \u2502\n\u2502   Tags:                                                                                \u2502\n\u2502     - Key: Name                                                                        \u2502\n\u2502       Value: role-load-balancer                                                        \u2502\n\u2502     - Key: gc-managed-by                                                               \u2502\n\u2502       Value: grucloud                                                                  \u2502\n\u2502     - Key: gc-created-by-provider                                                      \u2502\n\u2502       Value: aws                                                                       \u2502\n\u2502     - Key: gc-stage                                                                    \u2502\n\u2502       Value: dev                                                                       \u2502\n\u2502     - Key: gc-project-name                                                             \u2502\n\u2502       Value: @grucloud/example-module-aws-load-balancer-controller                     \u2502\n\u2502     - Key: gc-namespace                                                                \u2502\n\u2502       Value: LoadBalancerControllerRole                                                \u2502\n\u2502   AttachedPolicies:                                                                    \u2502\n\u2502     - PolicyName: AWSLoadBalancerControllerIAMPolicy                                   \u2502\n\u2502       PolicyArn: arn:aws:iam::840541460064:policy/AWSLoadBalancerControllerIAMPolicy   \u2502\n\u2502   InstanceProfiles: []                                                                 \u2502\n\u2502   Policies: []                                                                         \u2502\n\u2502                                                                                        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: role-node-group                                                                  \u2502\n\u2502 managedByUs: Yes                                                                       \u2502\n\u2502 live:                                                                                  \u2502\n\u2502   Path: /                                                                              \u2502\n\u2502   RoleName: role-node-group                                                            \u2502\n\u2502   RoleId: AROA4HNBM2ZQAQEEDNKMM                                                        \u2502\n\u2502   Arn: arn:aws:iam::840541460064:role/role-node-group                                  \u2502\n\u2502   CreateDate: 2021-07-21T13:29:11.000Z                                                 \u2502\n\u2502   AssumeRolePolicyDocument:                                                            \u2502\n\u2502     Version: 2012-10-17                                                                \u2502\n\u2502     Statement:                                                                         \u2502\n\u2502       - Effect: Allow                                                                  \u2502\n\u2502         Principal:                                                                     \u2502\n\u2502           Service: ec2.amazonaws.com                                                   \u2502\n\u2502         Action: sts:AssumeRole                                                         \u2502\n\u2502   MaxSessionDuration: 3600                                                             \u2502\n\u2502   Tags:                                                                                \u2502\n\u2502     - Key: Name                                                                        \u2502\n\u2502       Value: role-node-group                                                           \u2502\n\u2502     - Key: gc-managed-by                                                               \u2502\n\u2502       Value: grucloud                                                                  \u2502\n\u2502     - Key: gc-created-by-provider                                                      \u2502\n\u2502       Value: aws                                                                       \u2502\n\u2502     - Key: gc-stage                                                                    \u2502\n\u2502       Value: dev                                                                       \u2502\n\u2502     - Key: gc-project-name                                                             \u2502\n\u2502       Value: @grucloud/example-module-aws-load-balancer-controller                     \u2502\n\u2502     - Key: gc-namespace                                                                \u2502\n\u2502       Value: EKS                                                                       \u2502\n\u2502   AttachedPolicies:                                                                    \u2502\n\u2502     - PolicyName: AmazonEKSWorkerNodePolicy                                            \u2502\n\u2502       PolicyArn: arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy                     \u2502\n\u2502     - PolicyName: AmazonEC2ContainerRegistryReadOnly                                   \u2502\n\u2502       PolicyArn: arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly            \u2502\n\u2502     - PolicyName: AmazonEKS_CNI_Policy                                                 \u2502\n\u2502       PolicyArn: arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy                          \u2502\n\u2502   Policies: []                                                                         \u2502\n\u2502   InstanceProfiles:                                                                    \u2502\n\u2502     - InstanceProfileName: eks-b6bd64a5-a3dc-30a8-b4a5-f6a7fd37e90d                    \u2502\n\u2502       InstanceProfileId: AIPA4HNBM2ZQACXAPZ3H7                                         \u2502\n\u2502       Arn: arn:aws:iam::840541460064:instance-profile/eks-b6bd64a5-a3dc-30a8-b4a5-f6a\u2026 \u2502\n\u2502       Path: /                                                                          \u2502\n\u2502                                                                                        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                               \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 iam::Role                      \u2502 role-cluster                                     \u2502\n\u2502                                \u2502 role-load-balancer                               \u2502\n\u2502                                \u2502 role-node-group                                  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n3 resources, 2 types, 1 provider\nCommand "gc l -t Role" executed in 5s\n')),Object(l.b)("h3",{id:"aws-cli"},"AWS CLI"),Object(l.b)("p",null,"List all iam roles"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"aws iam list-roles\n")),Object(l.b)("p",null,"Delete a role"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"aws iam delete-role --role-name role-name\n")),Object(l.b)("p",null,"List a role:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"aws iam get-role --role-name my-role\n")))}m.isMDXComponent=!0},201:function(e,n,a){"use strict";a.d(n,"a",(function(){return d})),a.d(n,"b",(function(){return b}));var o=a(0),r=a.n(o);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,o,r=function(e,n){if(null==e)return{};var a,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),m=function(e){var n=r.a.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},d=function(e){var n=m(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var a=e.components,o=e.mdxType,l=e.originalType,t=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(a),u=o,b=d["".concat(t,".").concat(u)]||d[u]||p[u]||l;return a?r.a.createElement(b,c(c({ref:n},s),{},{components:a})):r.a.createElement(b,c({ref:n},s))}));function b(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=a.length,t=new Array(l);t[0]=u;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,t[1]=c;for(var s=2;s<l;s++)t[s]=a[s];return r.a.createElement.apply(null,t)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);