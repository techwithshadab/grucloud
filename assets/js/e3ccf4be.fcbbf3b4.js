"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1232],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?i.createElement(g,s(s({ref:n},l),{},{components:t})):i.createElement(g,s({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},53987:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var i=t(87462),r=t(63366),o=(t(67294),t(3905)),s=["components"],a={id:"SiteSlot",title:"SiteSlot"},p=void 0,c={unversionedId:"azure/resources/Web/SiteSlot",id:"azure/resources/Web/SiteSlot",isDocsHomePage:!1,title:"SiteSlot",description:"Provides a SiteSlot from the Web group",source:"@site/docs/azure/resources/Web/SiteSlot.md",sourceDirName:"azure/resources/Web",slug:"/azure/resources/Web/SiteSlot",permalink:"/docs/azure/resources/Web/SiteSlot",tags:[],version:"current",frontMatter:{id:"SiteSlot",title:"SiteSlot"},sidebar:"docs",previous:{title:"SiteRelayServiceConnectionSlot",permalink:"/docs/azure/resources/Web/SiteRelayServiceConnectionSlot"},next:{title:"SiteSlotConfigNames",permalink:"/docs/azure/resources/Web/SiteSlotConfigNames"}},l=[{value:"Examples",id:"examples",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],d={toc:l};function u(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a ",(0,o.kt)("strong",{parentName:"p"},"SiteSlot")," from the ",(0,o.kt)("strong",{parentName:"p"},"Web")," group"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Web/ServerFarm"},"ServerFarm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Web/HostingEnvironment"},"HostingEnvironment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Web/WebApp"},"WebApp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Web/Site"},"Site"))),(0,o.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  description: 'Represents a web app',\n  type: 'object',\n  allOf: [\n    {\n      required: [ 'location' ],\n      properties: {\n        id: { description: 'Resource Id', type: 'string' },\n        name: { description: 'Resource Name', type: 'string' },\n        kind: { description: 'Kind of resource', type: 'string' },\n        location: { description: 'Resource Location', type: 'string' },\n        type: { description: 'Resource type', type: 'string' },\n        tags: {\n          description: 'Resource tags',\n          type: 'object',\n          additionalProperties: { type: 'string' }\n        }\n      },\n      'x-ms-azure-resource': true\n    }\n  ],\n  properties: {\n    properties: {\n      required: [ 'usageState', 'availabilityState' ],\n      properties: {\n        name: { description: 'Name of web app', type: 'string' },\n        state: {\n          description: 'State of the web app',\n          type: 'string',\n          readOnly: true\n        },\n        hostNames: {\n          description: 'Hostnames associated with web app',\n          type: 'array',\n          items: { type: 'string' },\n          readOnly: true\n        },\n        repositorySiteName: {\n          description: 'Name of repository site',\n          type: 'string',\n          readOnly: true\n        },\n        usageState: {\n          description: 'State indicating whether web app has exceeded its quota usage',\n          enum: [ 'Normal', 'Exceeded' ],\n          type: 'string',\n          readOnly: true,\n          'x-ms-enum': { name: 'UsageState', modelAsString: false }\n        },\n        enabled: {\n          description: 'True if the site is enabled; otherwise, false. Setting this  value to false disables the site (takes the site off line).',\n          type: 'boolean'\n        },\n        enabledHostNames: {\n          description: 'Hostnames for the web app that are enabled. Hostnames need to be assigned and enabled. If some hostnames are assigned but not enabled\\r\\n' +\n            '            the app is not served on those hostnames',\n          type: 'array',\n          items: { type: 'string' },\n          readOnly: true\n        },\n        availabilityState: {\n          description: 'Management information availability state for the web app. Possible values are Normal or Limited. \\r\\n' +\n            '            Normal means that the site is running correctly and that management information for the site is available. \\r\\n' +\n            '            Limited means that only partial management information for the site is available and that detailed site information is unavailable.',\n          enum: [ 'Normal', 'Limited', 'DisasterRecoveryMode' ],\n          type: 'string',\n          readOnly: true,\n          'x-ms-enum': { name: 'SiteAvailabilityState', modelAsString: false }\n        },\n        hostNameSslStates: {\n          description: \"Hostname SSL states are  used to manage the SSL bindings for site's hostnames.\",\n          type: 'array',\n          items: {\n            description: 'Object that represents a SSL-enabled host name.',\n            required: [ 'sslState' ],\n            type: 'object',\n            properties: {\n              name: { description: 'Host name', type: 'string' },\n              sslState: {\n                description: 'SSL type',\n                enum: [ 'Disabled', 'SniEnabled', 'IpBasedEnabled' ],\n                type: 'string',\n                'x-ms-enum': { name: 'SslState', modelAsString: false }\n              },\n              virtualIP: {\n                description: 'Virtual IP address assigned to the host name if IP based SSL is enabled',\n                type: 'string'\n              },\n              thumbprint: { description: 'SSL cert thumbprint', type: 'string' },\n              toUpdate: {\n                description: 'Set this flag to update existing host name',\n                type: 'boolean'\n              }\n            }\n          }\n        },\n        serverFarmId: { type: 'string' },\n        lastModifiedTimeUtc: {\n          format: 'date-time',\n          description: 'Last time web app was modified in UTC',\n          type: 'string',\n          readOnly: true\n        },\n        siteConfig: {\n          description: 'Configuration of web app',\n          type: 'object',\n          allOf: [\n            {\n              required: [ 'location' ],\n              properties: {\n                id: { description: 'Resource Id', type: 'string' },\n                name: { description: 'Resource Name', type: 'string' },\n                kind: { description: 'Kind of resource', type: 'string' },\n                location: { description: 'Resource Location', type: 'string' },\n                type: { description: 'Resource type', type: 'string' },\n                tags: {\n                  description: 'Resource tags',\n                  type: 'object',\n                  additionalProperties: { type: 'string' }\n                }\n              },\n              'x-ms-azure-resource': true\n            }\n          ],\n          properties: {\n            properties: {\n              properties: {\n                numberOfWorkers: {\n                  format: 'int32',\n                  description: 'Number of workers',\n                  type: 'integer'\n                },\n                defaultDocuments: {\n                  description: 'Default documents',\n                  type: 'array',\n                  items: { type: 'string' }\n                },\n                netFrameworkVersion: {\n                  description: 'Net Framework Version',\n                  type: 'string'\n                },\n                phpVersion: { description: 'Version of PHP', type: 'string' },\n                pythonVersion: { description: 'Version of Python', type: 'string' },\n                nodeVersion: { description: 'Version of Node', type: 'string' },\n                requestTracingEnabled: {\n                  description: 'Enable request tracing',\n                  type: 'boolean'\n                },\n                requestTracingExpirationTime: {\n                  format: 'date-time',\n                  description: 'Request tracing expiration time',\n                  type: 'string'\n                },\n                remoteDebuggingEnabled: {\n                  description: 'Remote Debugging Enabled',\n                  type: 'boolean'\n                },\n                remoteDebuggingVersion: {\n                  description: 'Remote Debugging Version',\n                  type: 'string'\n                },\n                httpLoggingEnabled: {\n                  description: 'HTTP logging Enabled',\n                  type: 'boolean'\n                },\n                logsDirectorySizeLimit: {\n                  format: 'int32',\n                  description: 'HTTP Logs Directory size limit',\n                  type: 'integer'\n                },\n                detailedErrorLoggingEnabled: {\n                  description: 'Detailed error logging enabled',\n                  type: 'boolean'\n                },\n                publishingUsername: { description: 'Publishing user name', type: 'string' },\n                publishingPassword: { description: 'Publishing password', type: 'string' },\n                appSettings: {\n                  description: 'Application Settings',\n                  type: 'array',\n                  items: {\n                    description: 'Name value pair',\n                    type: 'object',\n                    properties: {\n                      name: { description: 'Pair name', type: 'string' },\n                      value: { description: 'Pair value', type: 'string' }\n                    }\n                  }\n                },\n                metadata: {\n                  description: 'Site Metadata',\n                  type: 'array',\n                  items: {\n                    description: 'Name value pair',\n                    type: 'object',\n                    properties: {\n                      name: { description: 'Pair name', type: 'string' },\n                      value: { description: 'Pair value', type: 'string' }\n                    }\n                  }\n                },\n                connectionStrings: {\n                  description: 'Connection strings',\n                  type: 'array',\n                  items: {\n                    description: 'Represents database connection string information',\n                    required: [ 'type' ],\n                    type: 'object',\n                    properties: {\n                      name: {\n                        description: 'Name of connection string',\n                        type: 'string'\n                      },\n                      connectionString: {\n                        description: 'Connection string value',\n                        type: 'string'\n                      },\n                      type: {\n                        description: 'Type of database',\n                        enum: [ 'MySql', 'SQLServer', 'SQLAzure', 'Custom' ],\n                        type: 'string',\n                        'x-ms-enum': {\n                          name: 'DatabaseServerType',\n                          modelAsString: false\n                        }\n                      }\n                    }\n                  }\n                },\n                handlerMappings: {\n                  description: 'Handler mappings',\n                  type: 'array',\n                  items: {\n                    description: 'The IIS handler mappings used to define which handler processes HTTP requests with certain extension. \\r\\n' +\n                      '            For example it is used to configure php-cgi.exe process to handle all HTTP requests with *.php extension.',\n                    type: 'object',\n                    properties: {\n                      extension: {\n                        description: 'Requests with this extension will be handled using the specified FastCGI application.',\n                        type: 'string'\n                      },\n                      scriptProcessor: {\n                        description: 'The absolute path to the FastCGI application.',\n                        type: 'string'\n                      },\n                      arguments: {\n                        description: 'Command-line arguments to be passed to the script processor.',\n                        type: 'string'\n                      }\n                    }\n                  }\n                },\n                documentRoot: { description: 'Document root', type: 'string' },\n                scmType: { description: 'SCM type', type: 'string' },\n                use32BitWorkerProcess: {\n                  description: 'Use 32 bit worker process',\n                  type: 'boolean'\n                },\n                webSocketsEnabled: { description: 'Web socket enabled.', type: 'boolean' },\n                alwaysOn: { description: 'Always On', type: 'boolean' },\n                javaVersion: { description: 'Java version', type: 'string' },\n                javaContainer: { description: 'Java container', type: 'string' },\n                javaContainerVersion: {\n                  description: 'Java container version',\n                  type: 'string'\n                },\n                appCommandLine: {\n                  description: 'App Command Line to launch',\n                  type: 'string'\n                },\n                managedPipelineMode: {\n                  description: 'Managed pipeline mode',\n                  enum: [ 'Integrated', 'Classic' ],\n                  type: 'string',\n                  'x-ms-enum': { name: 'ManagedPipelineMode', modelAsString: false }\n                },\n                virtualApplications: {\n                  description: 'Virtual applications',\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      virtualPath: { type: 'string' },\n                      physicalPath: { type: 'string' },\n                      preloadEnabled: { type: 'boolean' },\n                      virtualDirectories: {\n                        type: 'array',\n                        items: {\n                          type: 'object',\n                          properties: {\n                            virtualPath: { type: 'string' },\n                            physicalPath: { type: 'string' }\n                          }\n                        }\n                      }\n                    }\n                  }\n                },\n                loadBalancing: {\n                  description: 'Site load balancing',\n                  enum: [\n                    'WeightedRoundRobin',\n                    'LeastRequests',\n                    'LeastResponseTime',\n                    'WeightedTotalTraffic',\n                    'RequestHash'\n                  ],\n                  type: 'string',\n                  'x-ms-enum': { name: 'SiteLoadBalancing', modelAsString: false }\n                },\n                experiments: {\n                  description: 'This is work around for polymorphic types',\n                  type: 'object',\n                  properties: {\n                    rampUpRules: {\n                      description: 'List of {Microsoft.Web.Hosting.Administration.RampUpRule} objects.',\n                      type: 'array',\n                      items: {\n                        description: 'Routing rules for ramp up testing. This rule allows to redirect static traffic % to a slot or to gradually change routing % based on performance',\n                        type: 'object',\n                        properties: {\n                          actionHostName: {\n                            description: 'Hostname of a slot to which the traffic will be redirected if decided to. E.g. mysite-stage.azurewebsites.net',\n                            type: 'string'\n                          },\n                          reroutePercentage: {\n                            format: 'double',\n                            description: 'Percentage of the traffic which will be redirected to {Microsoft.Web.Hosting.Administration.RampUpRule.ActionHostName}',\n                            type: 'number'\n                          },\n                          changeStep: {\n                            format: 'double',\n                            description: '[Optional] In auto ramp up scenario this is the step to add/remove from {Microsoft.Web.Hosting.Administration.RampUpRule.ReroutePercentage} until it reaches \\r\\n' +\n                              '            {Microsoft.Web.Hosting.Administration.RampUpRule.MinReroutePercentage} or {Microsoft.Web.Hosting.Administration.RampUpRule.MaxReroutePercentage}. Site metrics are checked every N minutes specified in {Microsoft.Web.Hosting.Administration.RampUpRule.ChangeIntervalInMinutes}.\\r\\n' +\n                              '            Custom decision algorithm can be provided in TiPCallback site extension which Url can be specified in {Microsoft.Web.Hosting.Administration.RampUpRule.ChangeDecisionCallbackUrl}',\n                            type: 'number'\n                          },\n                          changeIntervalInMinutes: {\n                            format: 'int32',\n                            description: '[Optional] Specifies interval in minutes to reevaluate ReroutePercentage',\n                            type: 'integer'\n                          },\n                          minReroutePercentage: {\n                            format: 'double',\n                            description: '[Optional] Specifies lower boundary above which ReroutePercentage will stay.',\n                            type: 'number'\n                          },\n                          maxReroutePercentage: {\n                            format: 'double',\n                            description: '[Optional] Specifies upper boundary below which ReroutePercentage will stay.',\n                            type: 'number'\n                          },\n                          changeDecisionCallbackUrl: {\n                            description: 'Custom decision algorithm can be provided in TiPCallback site extension which Url can be specified. See TiPCallback site extension for the scaffold and contracts.\\r\\n' +\n                              '            https://www.siteextensions.net/packages/TiPCallback/',\n                            type: 'string'\n                          },\n                          name: {\n                            description: 'Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment.',\n                            type: 'string'\n                          }\n                        }\n                      }\n                    }\n                  }\n                },\n                limits: {\n                  description: 'Site limits',\n                  type: 'object',\n                  properties: {\n                    maxPercentageCpu: {\n                      format: 'double',\n                      description: 'Maximum allowed CPU usage percentage',\n                      type: 'number'\n                    },\n                    maxMemoryInMb: {\n                      format: 'int64',\n                      description: 'Maximum allowed memory usage in MB',\n                      type: 'integer'\n                    },\n                    maxDiskSizeInMb: {\n                      format: 'int64',\n                      description: 'Maximum allowed disk size usage in MB',\n                      type: 'integer'\n                    }\n                  }\n                },\n                autoHealEnabled: { description: 'Auto heal enabled', type: 'boolean' },\n                autoHealRules: {\n                  description: 'Auto heal rules',\n                  type: 'object',\n                  properties: {\n                    triggers: {\n                      description: 'Triggers - Conditions that describe when to execute the auto-heal actions',\n                      type: 'object',\n                      properties: {\n                        requests: {\n                          description: 'Requests - Defines a rule based on total requests',\n                          type: 'object',\n                          properties: {\n                            count: {\n                              format: 'int32',\n                              description: 'Count',\n                              type: 'integer'\n                            },\n                            timeInterval: {\n                              description: 'TimeInterval',\n                              type: 'string'\n                            }\n                          }\n                        },\n                        privateBytesInKB: {\n                          format: 'int32',\n                          description: 'PrivateBytesInKB - Defines a rule based on private bytes',\n                          type: 'integer'\n                        },\n                        statusCodes: {\n                          description: 'StatusCodes - Defines a rule based on status codes',\n                          type: 'array',\n                          items: {\n                            description: 'StatusCodeBasedTrigger',\n                            type: 'object',\n                            properties: {\n                              status: {\n                                format: 'int32',\n                                description: 'HTTP status code',\n                                type: 'integer'\n                              },\n                              subStatus: {\n                                format: 'int32',\n                                description: 'SubStatus',\n                                type: 'integer'\n                              },\n                              win32Status: {\n                                format: 'int32',\n                                description: 'Win32 error code',\n                                type: 'integer'\n                              },\n                              count: {\n                                format: 'int32',\n                                description: 'Count',\n                                type: 'integer'\n                              },\n                              timeInterval: {\n                                description: 'TimeInterval',\n                                type: 'string'\n                              }\n                            }\n                          }\n                        },\n                        slowRequests: {\n                          description: 'SlowRequests - Defines a rule based on request execution time',\n                          type: 'object',\n                          properties: {\n                            timeTaken: {\n                              description: 'TimeTaken',\n                              type: 'string'\n                            },\n                            count: {\n                              format: 'int32',\n                              description: 'Count',\n                              type: 'integer'\n                            },\n                            timeInterval: {\n                              description: 'TimeInterval',\n                              type: 'string'\n                            }\n                          }\n                        }\n                      }\n                    },\n                    actions: {\n                      description: 'Actions - Actions to be executed when a rule is triggered',\n                      required: [ 'actionType' ],\n                      type: 'object',\n                      properties: {\n                        actionType: {\n                          description: 'ActionType - predefined action to be taken',\n                          enum: [ 'Recycle', 'LogEvent', 'CustomAction' ],\n                          type: 'string',\n                          'x-ms-enum': {\n                            name: 'AutoHealActionType',\n                            modelAsString: false\n                          }\n                        },\n                        customAction: {\n                          description: 'CustomAction - custom action to be taken',\n                          type: 'object',\n                          properties: {\n                            exe: {\n                              description: 'Executable to be run',\n                              type: 'string'\n                            },\n                            parameters: {\n                              description: 'Parameters for the executable',\n                              type: 'string'\n                            }\n                          }\n                        },\n                        minProcessExecutionTime: {\n                          description: 'MinProcessExecutionTime - minimum time the process must execute\\r\\n' +\n                            '            before taking the action',\n                          type: 'string'\n                        }\n                      }\n                    }\n                  }\n                },\n                tracingOptions: { description: 'Tracing options', type: 'string' },\n                vnetName: { description: 'Vnet name', type: 'string' },\n                cors: {\n                  description: 'Cross-Origin Resource Sharing (CORS) settings.',\n                  type: 'object',\n                  properties: {\n                    allowedOrigins: {\n                      description: 'Gets or sets the list of origins that should be allowed to make cross-origin\\r\\n' +\n                        '            calls (for example: http://example.com:12345). Use \"*\" to allow all.',\n                      type: 'array',\n                      items: { type: 'string' }\n                    }\n                  }\n                },\n                apiDefinition: {\n                  description: 'Information about the formal API definition for the web app.',\n                  type: 'object',\n                  properties: {\n                    url: {\n                      description: 'The URL of the API definition.',\n                      type: 'string'\n                    }\n                  }\n                },\n                autoSwapSlotName: { description: 'Auto swap slot name', type: 'string' },\n                localMySqlEnabled: { description: 'Local mysql enabled', type: 'boolean' },\n                ipSecurityRestrictions: {\n                  description: 'Ip Security restrictions',\n                  type: 'array',\n                  items: {\n                    description: 'Represents an ip security restriction on a web app.',\n                    type: 'object',\n                    properties: {\n                      ipAddress: {\n                        description: 'IP address the security restriction is valid for',\n                        type: 'string'\n                      },\n                      subnetMask: {\n                        description: 'Subnet mask for the range of IP addresses the restriction is valid for',\n                        type: 'string'\n                      }\n                    }\n                  }\n                }\n              },\n              'x-ms-client-flatten': true\n            }\n          }\n        },\n        trafficManagerHostNames: {\n          description: 'Read-only list of Azure Traffic manager hostnames associated with web app',\n          type: 'array',\n          items: { type: 'string' },\n          readOnly: true\n        },\n        premiumAppDeployed: {\n          description: 'If set indicates whether web app is deployed as a premium app',\n          type: 'boolean',\n          readOnly: true\n        },\n        scmSiteAlsoStopped: {\n          description: 'If set indicates whether to stop SCM (KUDU) site when the web app is stopped. Default is false.',\n          type: 'boolean'\n        },\n        targetSwapSlot: {\n          description: 'Read-only property that specifies which slot this app will swap into',\n          type: 'string',\n          readOnly: true\n        },\n        hostingEnvironmentProfile: {\n          description: 'Specification for the hosting environment (App Service Environment) to use for the web app',\n          type: 'object',\n          properties: {\n            id: {\n              description: 'Resource id of the hostingEnvironment (App Service Environment)',\n              type: 'string'\n            },\n            name: {\n              description: 'Name of the hostingEnvironment (App Service Environment) (read only)',\n              type: 'string'\n            },\n            type: {\n              description: 'Resource type of the hostingEnvironment (App Service Environment) (read only)',\n              type: 'string'\n            }\n          }\n        },\n        microService: { description: '', type: 'string' },\n        gatewaySiteName: {\n          description: 'Name of gateway app associated with web app',\n          type: 'string'\n        },\n        clientAffinityEnabled: {\n          description: 'Specifies if the client affinity is enabled when load balancing http request for multiple instances of the web app',\n          type: 'boolean'\n        },\n        clientCertEnabled: {\n          description: 'Specifies if the client certificate is enabled for the web app',\n          type: 'boolean'\n        },\n        hostNamesDisabled: {\n          description: 'Specifies if the public hostnames are disabled the web app.\\r\\n' +\n            '            If set to true the app is only accessible via API Management process',\n          type: 'boolean'\n        },\n        outboundIpAddresses: {\n          description: 'List of comma separated IP addresses that this web app uses for outbound connections. Those can be used when configuring firewall rules for databases accessed by this web app.',\n          type: 'string',\n          readOnly: true\n        },\n        containerSize: {\n          format: 'int32',\n          description: 'Size of a function container',\n          type: 'integer'\n        },\n        maxNumberOfWorkers: {\n          format: 'int32',\n          description: 'Maximum number of workers\\r\\n' +\n            '            This only applies to function container',\n          type: 'integer'\n        },\n        cloningInfo: {\n          description: 'This is only valid for web app creation. If specified, web app is cloned from \\r\\n' +\n            '            a source web app',\n          type: 'object',\n          properties: {\n            correlationId: {\n              description: 'Correlation Id of cloning operation. This id ties multiple cloning operations\\r\\n' +\n                '            together to use the same snapshot',\n              type: 'string'\n            },\n            overwrite: {\n              description: 'Overwrite destination web app',\n              type: 'boolean'\n            },\n            cloneCustomHostNames: {\n              description: 'If true, clone custom hostnames from source web app',\n              type: 'boolean'\n            },\n            cloneSourceControl: {\n              description: 'Clone source control from source web app',\n              type: 'boolean'\n            },\n            sourceWebAppId: {\n              description: 'ARM resource id of the source web app. Web app resource id is of the form \\r\\n' +\n                '            /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and \\r\\n' +\n                '            /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots',\n              type: 'string'\n            },\n            hostingEnvironment: { description: 'Hosting environment', type: 'string' },\n            appSettingsOverrides: {\n              description: 'Application settings overrides for cloned web app. If specified these settings will override the settings cloned \\r\\n' +\n                '            from source web app. If not specified, application settings from source web app are retained.',\n              type: 'object',\n              additionalProperties: { type: 'string' }\n            },\n            configureLoadBalancing: {\n              description: 'If specified configure load balancing for source and clone site',\n              type: 'boolean'\n            },\n            trafficManagerProfileId: {\n              description: 'ARM resource id of the traffic manager profile to use if it exists. Traffic manager resource id is of the form \\r\\n' +\n                '            /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{profileName}',\n              type: 'string'\n            },\n            trafficManagerProfileName: {\n              description: 'Name of traffic manager profile to create. This is only needed if traffic manager profile does not already exist',\n              type: 'string'\n            }\n          }\n        },\n        resourceGroup: {\n          description: 'Resource group web app belongs to',\n          type: 'string',\n          readOnly: true\n        },\n        isDefaultContainer: {\n          description: 'Site is a default container',\n          type: 'boolean',\n          readOnly: true\n        },\n        defaultHostName: {\n          description: 'Default hostname of the web app',\n          type: 'string',\n          readOnly: true\n        }\n      },\n      'x-ms-client-flatten': true\n    }\n  }\n}\n")),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("p",null,"The resource version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2015-08-01"),"."),(0,o.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/web/resource-manager/Microsoft.Web/stable/2015-08-01/service.json"},"here"),"."))}u.isMDXComponent=!0}}]);