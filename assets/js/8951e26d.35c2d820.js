"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7163],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,y=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?t.createElement(y,a(a({ref:r},u),{},{components:n})):t.createElement(y,a({ref:r},u))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49844:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var t=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={id:"Gallery",title:"Gallery"},l=void 0,p={unversionedId:"azure/resources/Compute/Gallery",id:"azure/resources/Compute/Gallery",isDocsHomePage:!1,title:"Gallery",description:"Provides a Gallery from the Compute group",source:"@site/docs/azure/resources/Compute/Gallery.md",sourceDirName:"azure/resources/Compute",slug:"/azure/resources/Compute/Gallery",permalink:"/docs/azure/resources/Compute/Gallery",tags:[],version:"current",frontMatter:{id:"Gallery",title:"Gallery"},sidebar:"docs",previous:{title:"DiskEncryptionSet",permalink:"/docs/azure/resources/Compute/DiskEncryptionSet"},next:{title:"GalleryApplication",permalink:"/docs/azure/resources/Compute/GalleryApplication"}},u=[{value:"Examples",id:"examples",children:[{value:"Create or update a simple gallery.",id:"create-or-update-a-simple-gallery",children:[],level:3},{value:"Create or update a simple gallery with sharing profile.",id:"create-or-update-a-simple-gallery-with-sharing-profile",children:[],level:3},{value:"Create or update a simple gallery with soft deletion enabled.",id:"create-or-update-a-simple-gallery-with-soft-deletion-enabled",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],c={toc:u};function d(e){var r=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a ",(0,o.kt)("strong",{parentName:"p"},"Gallery")," from the ",(0,o.kt)("strong",{parentName:"p"},"Compute")," group"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"create-or-update-a-simple-gallery"},"Create or update a simple gallery."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "Gallery",\n    group: "Compute",\n    name: "myGallery",\n    properties: () => ({\n      location: "West US",\n      properties: { description: "This is the gallery description." },\n    }),\n    dependencies: ({}) => ({ resourceGroup: "myResourceGroup" }),\n  },\n];\n\n')),(0,o.kt)("h3",{id:"create-or-update-a-simple-gallery-with-sharing-profile"},"Create or update a simple gallery with sharing profile."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "Gallery",\n    group: "Compute",\n    name: "myGallery",\n    properties: () => ({\n      location: "West US",\n      properties: {\n        description: "This is the gallery description.",\n        sharingProfile: { permissions: "Groups" },\n      },\n    }),\n    dependencies: ({}) => ({ resourceGroup: "myResourceGroup" }),\n  },\n];\n\n')),(0,o.kt)("h3",{id:"create-or-update-a-simple-gallery-with-soft-deletion-enabled"},"Create or update a simple gallery with soft deletion enabled."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "Gallery",\n    group: "Compute",\n    name: "myGallery",\n    properties: () => ({\n      location: "West US",\n      properties: {\n        description: "This is the gallery description.",\n        softDeletePolicy: { isSoftDeleteEnabled: true },\n      },\n    }),\n    dependencies: ({}) => ({ resourceGroup: "myResourceGroup" }),\n  },\n];\n\n')),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup"))),(0,o.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      properties: {\n        description: {\n          type: 'string',\n          description: 'The description of this Shared Image Gallery resource. This property is updatable.'\n        },\n        identifier: {\n          properties: {\n            uniqueName: {\n              readOnly: true,\n              type: 'string',\n              description: 'The unique name of the Shared Image Gallery. This name is generated automatically by Azure.'\n            }\n          },\n          description: 'Describes the gallery unique name.'\n        },\n        provisioningState: {\n          readOnly: true,\n          type: 'string',\n          title: 'The current state of the gallery.',\n          description: 'The provisioning state, which only appears in the response.',\n          enum: [\n            'Creating',\n            'Updating',\n            'Failed',\n            'Succeeded',\n            'Deleting',\n            'Migrating'\n          ]\n        },\n        sharingProfile: {\n          description: 'Profile for gallery sharing to subscription or tenant',\n          properties: {\n            permissions: {\n              type: 'string',\n              description: 'This property allows you to specify the permission of sharing gallery. <br><br> Possible values are: <br><br> **Private** <br><br> **Groups**',\n              enum: [ 'Private', 'Groups' ],\n              'x-ms-enum': {\n                name: 'GallerySharingPermissionTypes',\n                modelAsString: true\n              }\n            },\n            groups: {\n              readOnly: true,\n              type: 'array',\n              items: {\n                description: 'Group of the gallery sharing profile',\n                properties: {\n                  type: {\n                    type: 'string',\n                    description: 'This property allows you to specify the type of sharing group. <br><br> Possible values are: <br><br> **Subscriptions** <br><br> **AADTenants**',\n                    enum: [ 'Subscriptions', 'AADTenants' ],\n                    'x-ms-enum': {\n                      name: 'SharingProfileGroupTypes',\n                      modelAsString: true\n                    }\n                  },\n                  ids: {\n                    type: 'array',\n                    items: { type: 'string' },\n                    description: 'A list of subscription/tenant ids the gallery is aimed to be shared to.'\n                  }\n                }\n              },\n              description: 'A list of sharing profile groups.'\n            }\n          }\n        },\n        softDeletePolicy: {\n          type: 'object',\n          properties: {\n            isSoftDeleteEnabled: {\n              type: 'boolean',\n              description: 'Enables soft-deletion for resources in this gallery, allowing them to be recovered within retention time.'\n            }\n          },\n          description: 'Contains information about the soft deletion policy of the gallery.'\n        }\n      },\n      description: 'Describes the properties of a Shared Image Gallery.'\n    }\n  },\n  allOf: [\n    {\n      description: 'The Resource model definition.',\n      properties: {\n        id: { readOnly: true, type: 'string', description: 'Resource Id' },\n        name: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource name'\n        },\n        type: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource type'\n        },\n        location: { type: 'string', description: 'Resource location' },\n        tags: {\n          type: 'object',\n          additionalProperties: { type: 'string' },\n          description: 'Resource tags'\n        }\n      },\n      required: [ 'location' ],\n      'x-ms-azure-resource': true\n    }\n  ],\n  description: 'Specifies information about the Shared Image Gallery that you want to create or update.'\n}\n")),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("p",null,"The resource version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-07-01"),"."),(0,o.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/gallery.json"},"here"),"."))}d.isMDXComponent=!0}}]);