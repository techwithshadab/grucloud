"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8981],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,g=m["".concat(c,".").concat(d)]||m[d]||l[d]||o;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80998:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),s=["components"],a={id:"SiteHostNameBinding",title:"SiteHostNameBinding"},c=void 0,u={unversionedId:"azure/resources/Web/SiteHostNameBinding",id:"azure/resources/Web/SiteHostNameBinding",isDocsHomePage:!1,title:"SiteHostNameBinding",description:"Provides a SiteHostNameBinding from the Web group",source:"@site/docs/azure/resources/Web/SiteHostNameBinding.md",sourceDirName:"azure/resources/Web",slug:"/azure/resources/Web/SiteHostNameBinding",permalink:"/docs/azure/resources/Web/SiteHostNameBinding",tags:[],version:"current",frontMatter:{id:"SiteHostNameBinding",title:"SiteHostNameBinding"},sidebar:"docs",previous:{title:"SiteDeploymentSlot",permalink:"/docs/azure/resources/Web/SiteDeploymentSlot"},next:{title:"SiteHostNameBindingSlot",permalink:"/docs/azure/resources/Web/SiteHostNameBindingSlot"}},p=[{value:"Examples",id:"examples",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],l={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a ",(0,o.kt)("strong",{parentName:"p"},"SiteHostNameBinding")," from the ",(0,o.kt)("strong",{parentName:"p"},"Web")," group"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/DomainRegistration/Domain"},"Domain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Web/Site"},"Site"))),(0,o.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  description: 'A host name binding object',\n  type: 'object',\n  allOf: [\n    {\n      required: [ 'location' ],\n      properties: {\n        id: { description: 'Resource Id', type: 'string' },\n        name: { description: 'Resource Name', type: 'string' },\n        kind: { description: 'Kind of resource', type: 'string' },\n        location: { description: 'Resource Location', type: 'string' },\n        type: { description: 'Resource type', type: 'string' },\n        tags: {\n          description: 'Resource tags',\n          type: 'object',\n          additionalProperties: { type: 'string' }\n        }\n      },\n      'x-ms-azure-resource': true\n    }\n  ],\n  properties: {\n    properties: {\n      properties: {\n        name: { description: 'Hostname', type: 'string' },\n        siteName: { description: 'Web app name', type: 'string' },\n        domainId: {\n          description: 'Fully qualified ARM domain resource URI',\n          type: 'string'\n        },\n        azureResourceName: { description: 'Azure resource name', type: 'string' },\n        azureResourceType: {\n          description: 'Azure resource type',\n          enum: [ 'Website', 'TrafficManager' ],\n          type: 'string',\n          'x-ms-enum': { name: 'AzureResourceType', modelAsString: false }\n        },\n        customHostNameDnsRecordType: {\n          description: 'Custom DNS record type',\n          enum: [ 'CName', 'A' ],\n          type: 'string',\n          'x-ms-enum': { name: 'CustomHostNameDnsRecordType', modelAsString: false }\n        },\n        hostNameType: {\n          description: 'Host name type',\n          enum: [ 'Verified', 'Managed' ],\n          type: 'string',\n          'x-ms-enum': { name: 'HostNameType', modelAsString: false }\n        }\n      },\n      'x-ms-client-flatten': true\n    }\n  }\n}\n")),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("p",null,"The resource version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2015-08-01"),"."),(0,o.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/web/resource-manager/Microsoft.Web/stable/2015-08-01/service.json"},"here"),"."))}m.isMDXComponent=!0}}]);