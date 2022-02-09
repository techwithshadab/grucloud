"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2843],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(t),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return t?r.createElement(d,i(i({ref:n},l),{},{components:t})):r.createElement(d,i({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48247:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={id:"LaunchConfiguration",title:"Launch Configuration"},s=void 0,u={unversionedId:"aws/resources/AutoScaling/LaunchConfiguration",id:"aws/resources/AutoScaling/LaunchConfiguration",isDocsHomePage:!1,title:"Launch Configuration",description:"Manages an Launch Configuration.",source:"@site/docs/aws/resources/AutoScaling/LaunchConfiguration.md",sourceDirName:"aws/resources/AutoScaling",slug:"/aws/resources/AutoScaling/LaunchConfiguration",permalink:"/docs/aws/resources/AutoScaling/LaunchConfiguration",tags:[],version:"current",frontMatter:{id:"LaunchConfiguration",title:"Launch Configuration"},sidebar:"docs",previous:{title:"AutoScaling Group",permalink:"/docs/aws/resources/AutoScaling/AutoScalingGroup"},next:{title:"Distribution",permalink:"/docs/aws/resources/CloudFront/Distribution"}},l=[{value:"Example",id:"example",children:[],level:2},{value:"List",id:"list",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Used By",id:"used-by",children:[],level:2},{value:"Example",id:"example-1",children:[],level:2}],p={toc:l};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Manages an ",(0,o.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/ec2/v2/home?#LaunchConfigurations"},"Launch Configuration"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "LaunchConfiguration",\n    group: "AutoScaling",\n    name: "amazon-ecs-cli-setup-my-cluster-EcsInstanceLc-S7O7EVIS98IV",\n    properties: ({}) => ({\n      InstanceType: "t2.small",\n      ImageId: "ami-0e43fd2a4ef14f476",\n      UserData:\n        \'Content-Type: multipart/mixed; boundary="1f15191e3fe7ebb2094282e32ea108217183e16f27f6e8aa0b886ee04ec3"\\nMIME-Version: 1.0\\n\\n--1f15191e3fe7ebb2094282e32ea108217183e16f27f6e8aa0b886ee04ec3\\nContent-Type: text/text/x-shellscript; charset="utf-8"\\nMime-Version: 1.0\\n\\n\\n#!/bin/bash\\necho ECS_CLUSTER=my-cluster >> /etc/ecs/ecs.config\\necho \\\'ECS_CONTAINER_INSTANCE_TAGS={"my-tag":"my-value"}\\\' >> /etc/ecs/ecs.config\\n--1f15191e3fe7ebb2094282e32ea108217183e16f27f6e8aa0b886ee04ec3--\',\n      InstanceMonitoring: {\n        Enabled: true,\n      },\n      BlockDeviceMappings: [],\n      EbsOptimized: false,\n      AssociatePublicIpAddress: true,\n    }),\n    dependencies: () => ({\n      instanceProfile:\n        "amazon-ecs-cli-setup-my-cluster-EcsInstanceProfile-ESJBS99JRKVK",\n      securityGroups: ["EcsSecurityGroup"],\n    }),\n  },\n  {\n    type: "SecurityGroup",\n    group: "EC2",\n    name: "EcsSecurityGroup",\n    properties: ({}) => ({\n      Description: "ECS Allowed Ports",\n      Tags: [\n        {\n          Key: "my-tag",\n          Value: "my-value",\n        },\n      ],\n    }),\n    dependencies: () => ({\n      vpc: "Vpc",\n    }),\n  },\n  {\n    type: "Role",\n    group: "IAM",\n    name: "amazon-ecs-cli-setup-my-cluster-EcsInstanceRole-14B4COKG08FT6",\n    properties: ({}) => ({\n      Path: "/",\n      AssumeRolePolicyDocument: {\n        Version: "2012-10-17",\n        Statement: [\n          {\n            Effect: "Allow",\n            Principal: {\n              Service: "ec2.amazonaws.com",\n            },\n            Action: "sts:AssumeRole",\n          },\n        ],\n      },\n      Tags: [\n        {\n          Key: "my-tag",\n          Value: "my-value",\n        },\n      ],\n    }),\n    dependencies: () => ({\n      policies: ["AmazonEC2ContainerServiceforEC2Role"],\n    }),\n  },\n  {\n    type: "Policy",\n    group: "IAM",\n    name: "AmazonEC2ContainerServiceforEC2Role",\n    readOnly: true,\n    properties: ({}) => ({\n      Arn: "arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role",\n    }),\n  },\n  {\n    type: "InstanceProfile",\n    group: "IAM",\n    name: "amazon-ecs-cli-setup-my-cluster-EcsInstanceProfile-ESJBS99JRKVK",\n    dependencies: () => ({\n      roles: ["amazon-ecs-cli-setup-my-cluster-EcsInstanceRole-14B4COKG08FT6"],\n    }),\n  },\n];\n')),(0,o.kt)("h2",{id:"list"},"List"),(0,o.kt)("p",null,"The Launch Configuration can be filtered with the ",(0,o.kt)("em",{parentName:"p"},"LaunchConfiguration")," type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"gc list --types LaunchConfiguration\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 9/9\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 AutoScaling::LaunchConfiguration from aws                                    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: amazon-ecs-cli-setup-my-cluster-EcsInstanceLc-S7O7EVIS98IV               \u2502\n\u2502 managedByUs: Yes                                                               \u2502\n\u2502 live:                                                                          \u2502\n\u2502   LaunchConfigurationName: amazon-ecs-cli-setup-my-cluster-EcsInstanceLc-S7O7\u2026 \u2502\n\u2502   LaunchConfigurationARN: arn:aws:autoscaling:us-east-1:840541460064:launchCo\u2026 \u2502\n\u2502   ImageId: ami-0e43fd2a4ef14f476                                               \u2502\n\u2502   KeyName:                                                                     \u2502\n\u2502   SecurityGroups:                                                              \u2502\n\u2502     - "sg-03502c1a2fb9d142d"                                                   \u2502\n\u2502   ClassicLinkVPCSecurityGroups: []                                             \u2502\n\u2502   UserData: Q29udGVudC1UeXBlOiBtdWx0aXBhcnQvbWl4ZWQ7IGJvdW5kYXJ5PSIxZjE1MTkxZ\u2026 \u2502\n\u2502   InstanceType: t2.small                                                       \u2502\n\u2502   KernelId:                                                                    \u2502\n\u2502   RamdiskId:                                                                   \u2502\n\u2502   BlockDeviceMappings: []                                                      \u2502\n\u2502   InstanceMonitoring:                                                          \u2502\n\u2502     Enabled: true                                                              \u2502\n\u2502   IamInstanceProfile: amazon-ecs-cli-setup-my-cluster-EcsInstanceProfile-ESJB\u2026 \u2502\n\u2502   CreatedTime: 2021-10-31T20:17:49.588Z                                        \u2502\n\u2502   EbsOptimized: false                                                          \u2502\n\u2502   AssociatePublicIpAddress: true                                               \u2502\n\u2502                                                                                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                           \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 AutoScaling::LaunchConfiguration \u2502 amazon-ecs-cli-setup-my-cluster-EcsInstan\u2026 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 1 provider\nCommand "gc l -t LaunchConfiguration" executed in 7s\n')),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/IAM/InstanceProfile"},"InstanceProfile")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/KeyPair"},"KeyPair")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/Image"},"Image")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/SecurityGroup"},"SecurityGroup"))),(0,o.kt)("h2",{id:"used-by"},"Used By"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/AutoScaling/AutoScalingGroup"},"AutoScaling Group"))),(0,o.kt)("h2",{id:"example-1"},"Example"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/ecs/ecs-simple"},"Simple ECS"))))}m.isMDXComponent=!0}}]);