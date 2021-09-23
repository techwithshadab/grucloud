(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{124:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(8),c=(a(0),a(233)),i={id:"EC2",title:"EC2 Instance"},l={unversionedId:"aws/resources/EC2/EC2",id:"aws/resources/EC2/EC2",isDocsHomePage:!1,title:"EC2 Instance",description:"Manages an EC2 instance resource, a.k.a virtual machine.",source:"@site/docs/aws/resources/EC2/EC2.md",sourceDirName:"aws/resources/EC2",slug:"/aws/resources/EC2/EC2",permalink:"/docs/aws/resources/EC2/EC2",version:"current",frontMatter:{id:"EC2",title:"EC2 Instance"},sidebar:"docs",previous:{title:"Table",permalink:"/docs/aws/resources/DynamoDB/DynamoDBTable"},next:{title:"Elastic Ip Address",permalink:"/docs/aws/resources/EC2/ElasticIpAddress"}},o=[{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Update",id:"update",children:[]}],b={toc:o};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Manages an EC2 instance resource, a.k.a virtual machine."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const server = provider.EC2.makeInstance({\n  name: "myserver",\n  properties: () => ({\n    InstanceType: "t2.micro",\n    ImageId: "ami-0917237b4e71c5759", // Ubuntu 20.04\n  }),\n  dependencies: {\n    keyPair,\n    subnet,\n    securityGroups: [sg],\n    iamInstanceProfile,\n    volumes: [volume],\n  },\n});\n')),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/ec2/ec2-simple/iac.js"},"one ec2")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/ec2/ec2/iac.js"},"ec2 with elastic ip address, key pair")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/ec2/volume/iac.js"},"attached an EBS volume")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/iam/iam/iac.js"},"example with IAM")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/ec2/ec2-vpc/iac.js"},"full example"))),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#runInstances-property"},"properties list"))),Object(c.b)("h3",{id:"dependencies"},"Dependencies"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./SecurityGroup"},"SecurityGroup")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./Subnet"},"Subnet")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./KeyPair"},"KeyPair")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./ElasticIpAddress"},"ElasticIpAddress")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./Volume"},"Volume")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./Image"},"Image")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"../IAM/iamInstanceProfile"},"IamInstanceProfile"))),Object(c.b)("h3",{id:"update"},"Update"),Object(c.b)("p",null,"There are 2 kind of update depending on the attribute to modify:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Stop and Start"),": The instance is stopped, the attribute is changed, the instance is started."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Destroy and Create"),": The instance is destroyed and created with the new attributes.")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Attribute"),Object(c.b)("th",{parentName:"tr",align:"center"},"Description"),Object(c.b)("th",{parentName:"tr",align:"right"},"Update Kind"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"ImageId"),Object(c.b)("td",{parentName:"tr",align:"center"},"The Amazon Managed Image Id"),Object(c.b)("td",{parentName:"tr",align:"right"},"Destroy & Create")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"InstanceType"),Object(c.b)("td",{parentName:"tr",align:"center"},"The Instance Type"),Object(c.b)("td",{parentName:"tr",align:"right"},"Stop & Start")))))}p.isMDXComponent=!0},233:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(a),m=r,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||c;return a?n.a.createElement(d,l(l({ref:t},b),{},{components:a})):n.a.createElement(d,l({ref:t},b))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<c;b++)i[b]=a[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);