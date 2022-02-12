"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2083],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),f=i,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||a;return t?n.createElement(m,c(c({ref:r},u),{},{components:t})):n.createElement(m,c({ref:r},u))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,c=new Array(a);c[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46056:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=t(87462),i=t(63366),a=(t(67294),t(3905)),c=["components"],o={id:"AppServiceCertificateOrderCertificate",title:"AppServiceCertificateOrderCertificate"},s=void 0,p={unversionedId:"azure/resources/CertificateRegistration/AppServiceCertificateOrderCertificate",id:"azure/resources/CertificateRegistration/AppServiceCertificateOrderCertificate",isDocsHomePage:!1,title:"AppServiceCertificateOrderCertificate",description:"Provides a AppServiceCertificateOrderCertificate from the CertificateRegistration group",source:"@site/docs/azure/resources/CertificateRegistration/AppServiceCertificateOrderCertificate.md",sourceDirName:"azure/resources/CertificateRegistration",slug:"/azure/resources/CertificateRegistration/AppServiceCertificateOrderCertificate",permalink:"/docs/azure/resources/CertificateRegistration/AppServiceCertificateOrderCertificate",tags:[],version:"current",frontMatter:{id:"AppServiceCertificateOrderCertificate",title:"AppServiceCertificateOrderCertificate"},sidebar:"docs",previous:{title:"AppServiceCertificateOrder",permalink:"/docs/azure/resources/CertificateRegistration/AppServiceCertificateOrder"},next:{title:"RoleAssignment",permalink:"/docs/azure/resources/Authorization/RoleAssignment"}},u=[{value:"Examples",id:"examples",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],l={toc:u};function d(e){var r=e.components,t=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provides a ",(0,a.kt)("strong",{parentName:"p"},"AppServiceCertificateOrderCertificate")," from the ",(0,a.kt)("strong",{parentName:"p"},"CertificateRegistration")," group"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/azure/resources/CertificateRegistration/AppServiceCertificateOrder"},"AppServiceCertificateOrder"))),(0,a.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  description: 'Key Vault container ARM resource for a certificate that is purchased through Azure.',\n  type: 'object',\n  allOf: [\n    {\n      description: 'Azure resource. This resource is tracked in Azure Resource Manager',\n      required: [ 'location' ],\n      type: 'object',\n      properties: {\n        id: { description: 'Resource Id.', type: 'string', readOnly: true },\n        name: {\n          description: 'Resource Name.',\n          type: 'string',\n          readOnly: true\n        },\n        kind: { description: 'Kind of resource.', type: 'string' },\n        location: { description: 'Resource Location.', type: 'string' },\n        type: {\n          description: 'Resource type.',\n          type: 'string',\n          readOnly: true\n        },\n        tags: {\n          description: 'Resource tags.',\n          type: 'object',\n          additionalProperties: { type: 'string' }\n        }\n      },\n      'x-ms-azure-resource': true\n    }\n  ],\n  properties: {\n    properties: {\n      description: 'Key Vault container for a certificate that is purchased through Azure.',\n      type: 'object',\n      properties: {\n        keyVaultId: { description: 'Key Vault resource Id.', type: 'string' },\n        keyVaultSecretName: { description: 'Key Vault secret name.', type: 'string' },\n        provisioningState: {\n          description: 'Status of the Key Vault secret.',\n          enum: [\n            'Initialized',\n            'WaitingOnCertificateOrder',\n            'Succeeded',\n            'CertificateOrderFailed',\n            'OperationNotPermittedOnKeyVault',\n            'AzureServiceUnauthorizedToAccessKeyVault',\n            'KeyVaultDoesNotExist',\n            'KeyVaultSecretDoesNotExist',\n            'UnknownError',\n            'ExternalPrivateKey',\n            'Unknown'\n          ],\n          type: 'string',\n          readOnly: true,\n          'x-ms-enum': { name: 'KeyVaultSecretStatus', modelAsString: false }\n        }\n      },\n      'x-ms-client-flatten': true\n    }\n  }\n}\n")),(0,a.kt)("h2",{id:"misc"},"Misc"),(0,a.kt)("p",null,"The resource version is ",(0,a.kt)("inlineCode",{parentName:"p"},"2021-03-01"),"."),(0,a.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/web/resource-manager/Microsoft.CertificateRegistration/stable/2021-03-01/AppServiceCertificateOrders.json"},"here"),"."))}d.isMDXComponent=!0}}]);