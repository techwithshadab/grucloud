"use strict";(self.webpackChunkgrucloud_doc=self.webpackChunkgrucloud_doc||[]).push([[1975],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7476:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"Table",title:"Table"},c=void 0,s={unversionedId:"aws/resources/DynamoDB/Table",id:"aws/resources/DynamoDB/Table",isDocsHomePage:!1,title:"Table",description:"Manages an DynamoDB Table.",source:"@site/docs/aws/resources/DynamoDB/Table.md",sourceDirName:"aws/resources/DynamoDB",slug:"/aws/resources/DynamoDB/Table",permalink:"/docs/aws/resources/DynamoDB/Table",tags:[],version:"current",frontMatter:{id:"Table",title:"Table"},sidebar:"docs",previous:{title:"LogGroup",permalink:"/docs/aws/resources/CloudWatchLogs/LogGroup"},next:{title:"Elastic Ip Address",permalink:"/docs/aws/resources/EC2/ElasticIpAddress"}},u=[{value:"Sample code",id:"sample-code",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Full Examples",id:"full-examples",children:[],level:2},{value:"List",id:"list",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Manages an ",(0,l.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/dynamodbv2/home?#tables"},"DynamoDB Table"),"."),(0,l.kt)("h2",{id:"sample-code"},"Sample code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'provider.DynamoDB.makeTable({\n  name: "myTable"\n  properties: () => ({\n    AttributeDefinitions: [\n      {\n        AttributeName: "Id",\n        AttributeType: "S",\n      },\n    ],\n    KeySchema: [\n      {\n        AttributeName: "Id",\n        KeyType: "HASH",\n      },\n    ],\n    ProvisionedThroughput: {\n      ReadCapacityUnits: 5,\n      WriteCapacityUnits: 5,\n    },\n    Tags: [\n      {\n        Key: "TOTOKEY",\n        Value: "TOTO",\n      },\n    ],\n  }),\n});\n')),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#createTable-property"},"create properties"))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/aws/resources/KMS/Key"},"KMS Key"))),(0,l.kt)("h2",{id:"full-examples"},"Full Examples"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/dynamodb/table"},"Simple table"))),(0,l.kt)("h2",{id:"list"},"List"),(0,l.kt)("p",null,"The tables can be filtered with the ",(0,l.kt)("em",{parentName:"p"},"Table")," type:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gc l -t Table\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"")))}m.isMDXComponent=!0}}]);