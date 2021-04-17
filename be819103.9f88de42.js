(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{193:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),o=(t(0),t(222)),c={id:"IamPolicyReadOnly",title:"Iam Policy Read Only"},l={id:"aws/resources/IAM/IamPolicyReadOnly",isDocsHomePage:!1,title:"Iam Policy Read Only",description:"Provides an Iam Read Only Policy.",source:"@site/docs/aws/resources/IAM/IamPolicyReadOnly.md",permalink:"/docs/aws/resources/IAM/IamPolicyReadOnly",sidebar:"someSidebar",previous:{title:"Iam Policy",permalink:"/docs/aws/resources/IAM/IamPolicy"},next:{title:"Iam Role",permalink:"/docs/aws/resources/IAM/IamRole"}},i=[{value:"Attach an existing policy to a role",id:"attach-an-existing-policy-to-a-role",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Used By",id:"used-by",children:[]}],s={rightToc:i};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Provides an Iam Read Only Policy."),Object(o.b)("p",null,"The examples below uses a read only policy and add it to a role, a user or a group."),Object(o.b)("h3",{id:"attach-an-existing-policy-to-a-role"},"Attach an existing policy to a role"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const iamPolicyEKSCluster = await provider.useIamPolicyReadOnly({\n  name: "AmazonEKSClusterPolicy",\n  properties: () => ({\n    Arn: "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy",\n  }),\n});\n\nconst iamRole = await provider.makeIamRole({\n  name: "eks-role",\n  dependencies: { policies: [iamPolicyEKSCluster] },\n  properties: () => ({\n    AssumeRolePolicyDocument: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Effect: "Allow",\n          Principal: {\n            Service: "eks.amazonaws.com",\n          },\n          Action: "sts:AssumeRole",\n        },\n      ],\n    },\n  }),\n});\n')),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/eks/iac.js"}),"eks example"))),Object(o.b)("h3",{id:"used-by"},"Used By"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"./IamRole"}),"IamRole")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"./IamUser"}),"IamUser")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"./IamGroup"}),"IamGroup"))))}u.isMDXComponent=!0},222:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,d=p["".concat(c,".").concat(b)]||p[b]||m[b]||o;return t?a.a.createElement(d,l(l({ref:n},s),{},{components:t})):a.a.createElement(d,l({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);