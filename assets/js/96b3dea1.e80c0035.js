"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6116],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1922:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={id:"RoleDefinition",title:"RoleDefinition"},c=void 0,p={unversionedId:"azure/resources/Authorization/RoleDefinition",id:"azure/resources/Authorization/RoleDefinition",isDocsHomePage:!1,title:"RoleDefinition",description:"Provides a RoleDefinition from the Authorization group",source:"@site/docs/azure/resources/Authorization/RoleDefinition.md",sourceDirName:"azure/resources/Authorization",slug:"/azure/resources/Authorization/RoleDefinition",permalink:"/docs/azure/resources/Authorization/RoleDefinition",tags:[],version:"current",frontMatter:{id:"RoleDefinition",title:"RoleDefinition"},sidebar:"docs",previous:{title:"RoleAssignment",permalink:"/docs/azure/resources/Authorization/RoleAssignment"},next:{title:"AppServiceCertificateOrder",permalink:"/docs/azure/resources/CertificateRegistration/AppServiceCertificateOrder"}},l=[{value:"Examples",id:"examples",children:[{value:"Create role definition",id:"create-role-definition",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],u={toc:l};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a ",(0,o.kt)("strong",{parentName:"p"},"RoleDefinition")," from the ",(0,o.kt)("strong",{parentName:"p"},"Authorization")," group"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"create-role-definition"},"Create role definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.Authorization.makeRoleDefinition({\n  name: "myRoleDefinition",\n});\n\n')),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    id: {\n      type: 'string',\n      readOnly: true,\n      description: 'The role definition ID.'\n    },\n    name: {\n      type: 'string',\n      readOnly: true,\n      description: 'The role definition name.'\n    },\n    type: {\n      type: 'string',\n      readOnly: true,\n      description: 'The role definition type.'\n    },\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'Role definition properties.',\n      properties: {\n        roleName: { type: 'string', description: 'The role name.' },\n        description: {\n          type: 'string',\n          description: 'The role definition description.'\n        },\n        type: {\n          type: 'string',\n          description: 'The role type.',\n          'x-ms-client-name': 'roleType'\n        },\n        permissions: {\n          type: 'array',\n          items: {\n            properties: {\n              actions: {\n                type: 'array',\n                items: { type: 'string' },\n                description: 'Allowed actions.'\n              },\n              notActions: {\n                type: 'array',\n                items: { type: 'string' },\n                description: 'Denied actions.'\n              },\n              dataActions: {\n                type: 'array',\n                items: { type: 'string' },\n                description: 'Allowed Data actions.'\n              },\n              notDataActions: {\n                type: 'array',\n                items: { type: 'string' },\n                description: 'Denied Data actions.'\n              }\n            },\n            type: 'object',\n            description: 'Role definition permissions.'\n          },\n          description: 'Role definition permissions.'\n        },\n        assignableScopes: {\n          type: 'array',\n          items: { type: 'string' },\n          description: 'Role definition assignable scopes.'\n        }\n      },\n      type: 'object'\n    }\n  },\n  type: 'object',\n  description: 'Role definition.'\n}\n")),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("p",null,"The resource version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2018-01-01-preview"),"."),(0,o.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/authorization/resource-manager/Microsoft.Authorization/preview/2018-01-01-preview/authorization-RoleDefinitionsCalls.json"},"here"),"."))}d.isMDXComponent=!0}}]);