(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{117:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return p}));var n=t(3),o=(t(0),t(222));const a={id:"NetworkInterface",title:"Network Interface"},c={unversionedId:"azure/resources/NetworkInterface",id:"azure/resources/NetworkInterface",isDocsHomePage:!1,title:"Network Interface",description:"Provides a Network Interface:",source:"@site/docs/azure/resources/NetworkInterface.md",sourceDirName:"azure/resources",slug:"/azure/resources/NetworkInterface",permalink:"/docs/azure/resources/NetworkInterface",version:"current",frontMatter:{id:"NetworkInterface",title:"Network Interface"},sidebar:"docs",previous:{title:"Google Requirements",permalink:"/docs/google/GoogleRequirements"},next:{title:"Public Ip Address",permalink:"/docs/azure/resources/PublicIpAddress"}},i=[{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]}],u={toc:i};function p({components:e,...r}){return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Provides a Network Interface:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const networkInterface = provider.makeNetworkInterface({\n  name: `network-interface`,\n  dependencies: {\n    resourceGroup,\n    virtualNetwork,\n    securityGroup,\n    subnet: `subnet`,\n    publicIpAddress,\n  },\n  properties: () => ({\n    properties: {\n      ipConfigurations: [\n        {\n          name: "ipconfig",\n          properties: {\n            privateIPAllocationMethod: "Dynamic",\n          },\n        },\n      ],\n    },\n  }),\n});\n')),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/azure/vm/iac.js#70"},"basic example"))),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/rest/api/virtualnetwork/networkinterfaces/createorupdate#request-body"},"all properties"))),Object(o.b)("h3",{id:"dependencies"},"Dependencies"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./ResourceGroup"},"ResourceGroup")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./VirtualNetwork"},"VirtualNetwork")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./SecurityGroup"},"SecurityGroup")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./PublicIpAddress"},"PublicIpAddress"))))}p.isMDXComponent=!0},222:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(t),d=n,f=s["".concat(c,".").concat(d)]||s[d]||b[d]||a;return t?o.a.createElement(f,i(i({ref:r},p),{},{components:t})):o.a.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);