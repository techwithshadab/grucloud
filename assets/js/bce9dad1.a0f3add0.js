(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{182:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var r=a(3),n=(a(0),a(222));const i={id:"ApiGatewayV2Api",title:"Api"},p={unversionedId:"aws/resources/ApiGatewayV2/ApiGatewayV2Api",id:"aws/resources/ApiGatewayV2/ApiGatewayV2Api",isDocsHomePage:!1,title:"Api",description:"Manages an Api Gateway V2 API.",source:"@site/docs/aws/resources/ApiGatewayV2/Api.md",sourceDirName:"aws/resources/ApiGatewayV2",slug:"/aws/resources/ApiGatewayV2/ApiGatewayV2Api",permalink:"/docs/aws/resources/ApiGatewayV2/ApiGatewayV2Api",version:"current",frontMatter:{id:"ApiGatewayV2Api",title:"Api"},sidebar:"docs",previous:{title:"Stage",permalink:"/docs/aws/resources/APIGateway/APIGatewayStage"},next:{title:"ApiMapping",permalink:"/docs/aws/resources/ApiGatewayV2/ApiGatewayV2ApiMapping"}},c=[{value:"Sample code",id:"sample-code",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Used By",id:"used-by",children:[]},{value:"Full Examples",id:"full-examples",children:[]},{value:"List",id:"list",children:[]}],o={toc:c};function l({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Manages an ",Object(n.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/apigateway/main/apis"},"Api Gateway V2 API"),"."),Object(n.b)("h2",{id:"sample-code"},"Sample code"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'const restApi = provider.ApiGatewayV2.makeApi({\n  name: "myApi",\n  properties: () => ({ endpointConfiguration: { types: ["REGIONAL"] } }),\n});\n')),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#createApi-property"},"create properties"))),Object(n.b)("h2",{id:"used-by"},"Used By"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"./Authorizer"},"Authorizer")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"./Deployment"},"Deployment")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"./ApiMapping"},"ApiMapping")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"./Stage"},"Stage"))),Object(n.b)("h2",{id:"full-examples"},"Full Examples"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/api-gateway-v2/http-lambda"},"Http with Lambda"))),Object(n.b)("h2",{id:"list"},"List"),Object(n.b)("p",null,"The Apis can be filtered with the ",Object(n.b)("em",{parentName:"p"},"Api")," type:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t Api\n")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-txt"},"")))}l.isMDXComponent=!0},222:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,d=u["".concat(p,".").concat(m)]||u[m]||b[m]||i;return a?n.a.createElement(d,c(c({ref:t},l),{},{components:a})):n.a.createElement(d,c({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var l=2;l<i;l++)p[l]=a[l];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);