"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2263],{3905:function(e,r,a){a.d(r,{Zo:function(){return l},kt:function(){return d}});var t=a(67294);function s(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function n(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){s(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function c(e,r){if(null==e)return{};var a,t,s=function(e,r){if(null==e)return{};var a,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(s[a]=e[a]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=t.createContext({}),u=function(e){var r=t.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):n(n({},r),e)),a},l=function(e){var r=u(e.components);return t.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(a),d=s,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return a?t.createElement(f,n(n({ref:r},l),{},{components:a})):t.createElement(f,n({ref:r},l))}));function d(e,r){var a=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=a.length,n=new Array(o);n[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:s,n[1]=c;for(var u=2;u<o;u++)n[u]=a[u];return t.createElement.apply(null,n)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},722:function(e,r,a){a.r(r),a.d(r,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var t=a(87462),s=a(63366),o=(a(67294),a(3905)),n=["components"],c={id:"ResourcesList",title:"Resources List"},i=void 0,u={unversionedId:"aws/ResourcesList",id:"aws/ResourcesList",isDocsHomePage:!1,title:"Resources List",description:"List of resources for provider aws:",source:"@site/docs/aws/AwsResources.md",sourceDirName:"aws",slug:"/aws/ResourcesList",permalink:"/docs/aws/ResourcesList",tags:[],version:"current",frontMatter:{id:"ResourcesList",title:"Resources List"},sidebar:"docs",previous:{title:"Kubernetes Getting Started",permalink:"/docs/k8s/K8sGettingStarted"},next:{title:"Certificate",permalink:"/docs/aws/resources/ACM/Certificate"}},l=[],p={toc:l};function m(e){var r=e.components,a=(0,s.Z)(e,n);return(0,o.kt)("wrapper",(0,t.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"List of resources for provider aws:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"APIGateway:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/APIGateway/DomainName"},"DomainName"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/APIGateway/Account"},"Account"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/APIGateway/ApiKey"},"ApiKey"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/APIGateway/RestApi"},"RestApi"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/APIGateway/Stage"},"Stage"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/APIGateway/Authorizer"},"Authorizer")),(0,o.kt)("li",{parentName:"ul"},"ApiGatewayV2:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ApiGatewayV2/DomainName"},"DomainName"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ApiGatewayV2/Api"},"Api"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ApiGatewayV2/Stage"},"Stage"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ApiGatewayV2/Authorizer"},"Authorizer"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ApiGatewayV2/ApiMapping"},"ApiMapping"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ApiGatewayV2/Integration"},"Integration"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ApiGatewayV2/Route"},"Route"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ApiGatewayV2/Deployment"},"Deployment")),(0,o.kt)("li",{parentName:"ul"},"AppSync:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/AppSync/GraphqlApi"},"GraphqlApi"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/AppSync/DataSource"},"DataSource"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/AppSync/Resolver"},"Resolver")),(0,o.kt)("li",{parentName:"ul"},"AutoScaling:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/AutoScaling/AutoScalingGroup"},"AutoScalingGroup"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/AutoScaling/AutoScalingAttachment"},"AutoScalingAttachment"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/AutoScaling/LaunchConfiguration"},"LaunchConfiguration")),(0,o.kt)("li",{parentName:"ul"},"ACM:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ACM/Certificate"},"Certificate")),(0,o.kt)("li",{parentName:"ul"},"CloudFront:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/CloudFront/Distribution"},"Distribution")),(0,o.kt)("li",{parentName:"ul"},"CloudWatchEvents:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/CloudWatchEvents/EventBus"},"EventBus"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/CloudWatchEvents/Rule"},"Rule")),(0,o.kt)("li",{parentName:"ul"},"CloudWatchLogs:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/CloudWatchLogs/LogGroup"},"LogGroup")),(0,o.kt)("li",{parentName:"ul"},"CognitoIdentityServiceProvider:\n",(0,o.kt)("a",{parentName:"li",href:"./resources/CognitoIdentityServiceProvider/UserPool.md"},"UserPool"),", ",(0,o.kt)("a",{parentName:"li",href:"./resources/CognitoIdentityServiceProvider/IdentityProvider.md"},"IdentityProvider")),(0,o.kt)("li",{parentName:"ul"},"DynamoDB:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/DynamoDB/Table"},"Table")),(0,o.kt)("li",{parentName:"ul"},"EC2:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/KeyPair"},"KeyPair"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/Image"},"Image"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/Volume"},"Volume"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/Vpc"},"Vpc"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/InternetGateway"},"InternetGateway"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/NatGateway"},"NatGateway"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/Subnet"},"Subnet"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/RouteTable"},"RouteTable"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/RouteTableAssociation"},"RouteTableAssociation"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/Route"},"Route"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/SecurityGroup"},"SecurityGroup"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/SecurityGroupRuleIngress"},"SecurityGroupRuleIngress"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/SecurityGroupRuleEgress"},"SecurityGroupRuleEgress"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/ElasticIpAddress"},"ElasticIpAddress"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/EC2"},"Instance"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/LaunchTemplate"},"LaunchTemplate"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/NetworkAcl"},"NetworkAcl")),(0,o.kt)("li",{parentName:"ul"},"ECR:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ECR/Repository"},"Repository"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ECR/Registry"},"Registry")),(0,o.kt)("li",{parentName:"ul"},"ECS:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ECS/CapacityProvider"},"CapacityProvider"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ECS/Cluster"},"Cluster"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ECS/TaskDefinition"},"TaskDefinition"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ECS/Service"},"Service"),", ",(0,o.kt)("a",{parentName:"li",href:"./resources/ECS/TaskSet.md"},"TaskSet"),", ",(0,o.kt)("a",{parentName:"li",href:"./resources/ECS/Task.md"},"Task"),", ",(0,o.kt)("a",{parentName:"li",href:"./resources/ECS/ContainerInstance.md"},"ContainerInstance")),(0,o.kt)("li",{parentName:"ul"},"EKS:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EKS/Cluster"},"Cluster"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EKS/NodeGroup"},"NodeGroup")),(0,o.kt)("li",{parentName:"ul"},"ELBv2:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ELBv2/LoadBalancer"},"LoadBalancer"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ELBv2/TargetGroup"},"TargetGroup"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ELBv2/Listener"},"Listener"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ELBv2/Rule"},"Rule")),(0,o.kt)("li",{parentName:"ul"},"IAM:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/IAM/OpenIDConnectProvider"},"OpenIDConnectProvider"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/IAM/User"},"User"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/IAM/Group"},"Group"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/IAM/Role"},"Role"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/IAM/Policy"},"Policy"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/IAM/InstanceProfile"},"InstanceProfile")),(0,o.kt)("li",{parentName:"ul"},"KMS:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/KMS/Key"},"Key")),(0,o.kt)("li",{parentName:"ul"},"Lambda:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/Lambda/Layer"},"Layer"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/Lambda/Function"},"Function"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/Lambda/EventSourceMapping"},"EventSourceMapping")),(0,o.kt)("li",{parentName:"ul"},"RDS:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/RDS/DBSubnetGroup"},"DBSubnetGroup"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/RDS/DBCluster"},"DBCluster"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/RDS/DBInstance"},"DBInstance")),(0,o.kt)("li",{parentName:"ul"},"Route53:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/Route53/HostedZone"},"HostedZone"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/Route53/Record"},"Record")),(0,o.kt)("li",{parentName:"ul"},"Route53Domains:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/Route53Domains/Domain"},"Domain")),(0,o.kt)("li",{parentName:"ul"},"S3:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/S3/Bucket"},"Bucket"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/S3/Object"},"Object")),(0,o.kt)("li",{parentName:"ul"},"SQS:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/SQS/Queue"},"Queue")),(0,o.kt)("li",{parentName:"ul"},"SSM:\n",(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/SSM/Parameter"},"Parameter"))))}m.isMDXComponent=!0}}]);