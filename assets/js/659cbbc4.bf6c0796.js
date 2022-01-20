"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[648],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?t.createElement(g,a(a({ref:n},s),{},{components:r})):t.createElement(g,a({ref:n},s))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},91257:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={id:"Binding",title:"Binding"},l=void 0,u={unversionedId:"google/resources/iam/Binding",id:"google/resources/iam/Binding",isDocsHomePage:!1,title:"Binding",description:"Provides a IAM Binding for a project.",source:"@site/docs/google/resources/iam/Binding.md",sourceDirName:"google/resources/iam",slug:"/google/resources/iam/Binding",permalink:"/docs/google/resources/iam/Binding",tags:[],version:"current",frontMatter:{id:"Binding",title:"Binding"},sidebar:"docs",previous:{title:"VM Instance",permalink:"/docs/google/resources/compute/VmInstance"},next:{title:"Member",permalink:"/docs/google/resources/iam/Member"}},s=[{value:"Examples",id:"examples",children:[{value:"Bind a user to a role",id:"bind-a-user-to-a-role",children:[],level:3},{value:"Bind a service account to a role",id:"bind-a-service-account-to-a-role",children:[],level:3},{value:"Example Code",id:"example-code",children:[],level:3},{value:"Used By",id:"used-by",children:[],level:3}],level:2}],d={toc:s};function p(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provides a IAM Binding for a project."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"bind-a-user-to-a-role"},"Bind a user to a role"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const iamBinding = provider.iam.makeBinding({\n  name: "roles/editor",\n  properties: () => ({\n    members: ["user:jane@example.com"],\n  }),\n});\n')),(0,i.kt)("h3",{id:"bind-a-service-account-to-a-role"},"Bind a service account to a role"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const serviceAccount = provider.iam.makeServiceAccount({\n  name: "sa",\n  properties: () => ({\n    accountId: "sa",\n  }),\n});\n\nconst iamBinding = provider.iam.makeBinding({\n  name: "roles/editor",\n  dependencies: { serviceAccounts: [serviceAccount] },\n  properties: ({}) => ({}),\n});\n')),(0,i.kt)("h3",{id:"example-code"},"Example Code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/google/iam/iam-binding/iac.js#L7"},"basic example"))),(0,i.kt)("h3",{id:"used-by"},"Used By"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/google/resources/iam/ServiceAccount"},"ServiceAccount"))))}p.isMDXComponent=!0}}]);