(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{100:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"rightToc",(function(){return l})),r.d(n,"default",(function(){return p}));var t=r(2),a=r(6),o=(r(0),r(180)),c={id:"IamBinding",title:"IAM Binding"},i={id:"google/resources/IAM/IamBinding",isDocsHomePage:!1,title:"IAM Binding",description:"Provides a IAM Binding for a project.",source:"@site/docs/google/resources/IAM/IamBinding.md",permalink:"/docs/google/resources/IAM/IamBinding"},l=[{value:"Examples",id:"examples",children:[{value:"Bind a user to a role",id:"bind-a-user-to-a-role",children:[]},{value:"Bind a service account to a role",id:"bind-a-service-account-to-a-role",children:[]},{value:"Example Code",id:"example-code",children:[]},{value:"Used By",id:"used-by",children:[]}]}],u={rightToc:l};function p(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Provides a IAM Binding for a project."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"bind-a-user-to-a-role"},"Bind a user to a role"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'const iamBinding = await provider.makeIamBinding({\n  name: "roles/editor",\n  properties: () => ({\n    members: ["user:jane@example.com"],\n  }),\n});\n')),Object(o.b)("h3",{id:"bind-a-service-account-to-a-role"},"Bind a service account to a role"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'const serviceAccount = await provider.makeServiceAccount({\n  name: "sa",\n  properties: () => ({\n    accountId: "sa",\n  }),\n});\n\nconst iamBinding = await provider.makeIamBinding({\n  name: "roles/editor",\n  dependencies: { serviceAccounts: [serviceAccount] },\n  properties: ({}) => ({}),\n});\n')),Object(o.b)("h3",{id:"example-code"},"Example Code"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/blob/main/examples/google/iam/iam-binding/iac.js#L7"}),"basic example"))),Object(o.b)("h3",{id:"used-by"},"Used By"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(t.a)({parentName:"li"},{href:"../Compute/ServiceAccount"}),"ServiceAccount"))))}p.isMDXComponent=!0},180:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return m}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),b=t,m=s["".concat(c,".").concat(b)]||s[b]||d[b]||o;return r?a.a.createElement(m,i(i({ref:n},u),{},{components:r})):a.a.createElement(m,i({ref:n},u))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);