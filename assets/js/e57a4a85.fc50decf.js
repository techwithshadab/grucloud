"use strict";(self.webpackChunkgrucloud_doc=self.webpackChunkgrucloud_doc||[]).push([[9830],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return d}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4948:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"InstanceProfile",title:"Instance Profile"},s=void 0,c={unversionedId:"aws/resources/IAM/InstanceProfile",id:"aws/resources/IAM/InstanceProfile",isDocsHomePage:!1,title:"Instance Profile",description:"Provides an Iam Instance Profile.",source:"@site/docs/aws/resources/IAM/InstanceProfile.md",sourceDirName:"aws/resources/IAM",slug:"/aws/resources/IAM/InstanceProfile",permalink:"/docs/aws/resources/IAM/InstanceProfile",tags:[],version:"current",frontMatter:{id:"InstanceProfile",title:"Instance Profile"},sidebar:"docs",previous:{title:"Group",permalink:"/docs/aws/resources/IAM/Group"},next:{title:"OpenIDConnectProvider",permalink:"/docs/aws/resources/IAM/OpenIDConnectProvider"}},p=[{value:"Examples",id:"examples",children:[],level:3},{value:"Properties",id:"properties",children:[],level:3},{value:"Dependencies",id:"dependencies",children:[],level:3},{value:"Used By",id:"used-by",children:[],level:3},{value:"List",id:"list",children:[],level:3},{value:"AWS CLI",id:"aws-cli",children:[],level:3}],u={toc:p};function m(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides an Iam Instance Profile."),(0,o.kt)("p",null,"The following example create an instance profile, a role attached to this instance profile, and create an ec2 instance under this profile:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const role = provider.IAM.makeRole({\n  name: "my-role",\n  properties: () => ({\n    Path: "/",\n    AssumeRolePolicyDocument: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Action: "sts:AssumeRole",\n          Principal: {\n            Service: "ec2.amazonaws.com",\n          },\n          Effect: "Allow",\n          Sid: "",\n        },\n      ],\n    },\n  }),\n});\n\nconst iamInstanceProfile = provider.IAM.makeInstanceProfile({\n  name: "my-instance-profile",\n  dependencies: () => ({ roles: [role] }),\n  properties: () => ({\n    Path: "/",\n  }),\n});\n\nconst image = provider.EC2.useImage({\n  name: "Amazon Linux 2",\n  properties: () => ({\n    Filters: [\n      {\n        Name: "architecture",\n        Values: ["x86_64"],\n      },\n      {\n        Name: "description",\n        Values: ["Amazon Linux 2 AMI *"],\n      },\n    ],\n  }),\n});\n\nconst server = provider.EC2.makeInstance({\n  name: "web-iam",\n  dependencies: () => ({ image, keyPair, iamInstanceProfile }),\n  properties: () => ({\n    InstanceType: "t2.micro",\n  }),\n});\n')),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/iam/iam/iac.js"},"simple example"))),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#createInstanceProfile-property"},"properties list"))),(0,o.kt)("h3",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/IAM/Role"},"IamRole"))),(0,o.kt)("h3",{id:"used-by"},"Used By"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/EC2"},"EC2"))),(0,o.kt)("h3",{id:"list"},"List"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"gc l -t IamInstanceProfile\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 3/3\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 IamInstanceProfile from aws                                                           \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name                                     \u2502 Data                                  \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 eks-54bc6e8b-43c7-2c95-7057-1af0e6e8aa77 \u2502 Path: /                               \u2502 NO   \u2502\n\u2502                                          \u2502 InstanceProfileName: eks-54bc6e8b-43\u2026 \u2502      \u2502\n\u2502                                          \u2502 InstanceProfileId: AIPA4HNBM2ZQCIF3D\u2026 \u2502      \u2502\n\u2502                                          \u2502 Arn: arn:aws:iam::840541460064:insta\u2026 \u2502      \u2502\n\u2502                                          \u2502 CreateDate: 2021-04-16T23:49:13.000Z  \u2502      \u2502\n\u2502                                          \u2502 Roles:                                \u2502      \u2502\n\u2502                                          \u2502   - Path: /                           \u2502      \u2502\n\u2502                                          \u2502     RoleName: role-node-group         \u2502      \u2502\n\u2502                                          \u2502     RoleId: AROA4HNBM2ZQICLVXAZIM     \u2502      \u2502\n\u2502                                          \u2502     Arn: arn:aws:iam::840541460064:r\u2026 \u2502      \u2502\n\u2502                                          \u2502     CreateDate: 2021-04-16T23:39:55.\u2026 \u2502      \u2502\n\u2502                                          \u2502     AssumeRolePolicyDocument: %7B%22\u2026 \u2502      \u2502\n\u2502                                          \u2502     Tags:                             \u2502      \u2502\n\u2502                                          \u2502       - Key: Name                     \u2502      \u2502\n\u2502                                          \u2502         Value: role-node-group        \u2502      \u2502\n\u2502                                          \u2502       - Key: ManagedBy                \u2502      \u2502\n\u2502                                          \u2502         Value: GruCloud               \u2502      \u2502\n\u2502                                          \u2502       - Key: CreatedByProvider        \u2502      \u2502\n\u2502                                          \u2502         Value: aws                    \u2502      \u2502\n\u2502                                          \u2502       - Key: stage                    \u2502      \u2502\n\u2502                                          \u2502         Value: dev                    \u2502      \u2502\n\u2502                                          \u2502       - Key: projectName              \u2502      \u2502\n\u2502                                          \u2502         Value: ex-eks-mod             \u2502      \u2502\n\u2502                                          \u2502 Tags: []                              \u2502      \u2502\n\u2502                                          \u2502                                       \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                                    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 IamInstanceProfile \u2502 eks-54bc6e8b-43c7-2c95-7057-1af0e6e8aa77                          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 1 provider\nCommand "gc l -t IamInstanceProfile" executed in 3s\n')),(0,o.kt)("h3",{id:"aws-cli"},"AWS CLI"),(0,o.kt)("p",null,"List all iam instances profile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"aws iam list-instance-profiles\n\n")),(0,o.kt)("p",null,"Delete an instance profile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"aws iam delete-instance-profile --instance-profile-name ExampleInstanceProfile\n")))}m.isMDXComponent=!0}}]);