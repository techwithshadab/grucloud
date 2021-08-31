(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{115:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return i}));var a=t(3),r=(t(0),t(222));const s={id:"StatefulSet",title:"StatefulSet"},o={unversionedId:"k8s/resources/StatefulSet",id:"k8s/resources/StatefulSet",isDocsHomePage:!1,title:"StatefulSet",description:"Provides a Kubernetes StatefulSet",source:"@site/docs/k8s/resources/StatefulSet.md",sourceDirName:"k8s/resources",slug:"/k8s/resources/StatefulSet",permalink:"/docs/k8s/resources/StatefulSet",version:"current",frontMatter:{id:"StatefulSet",title:"StatefulSet"},sidebar:"docs",previous:{title:"Service Account",permalink:"/docs/k8s/resources/ServiceAccount"},next:{title:"Requirements",permalink:"/docs/k8s/K8sRequirements"}},c=[{value:"Examples",id:"examples",children:[{value:"Create a StatefulSet for postgres",id:"create-a-statefulset-for-postgres",children:[]}]},{value:"Source Code Examples",id:"source-code-examples",children:[]},{value:"Listing",id:"listing",children:[]}],l={toc:c};function i({components:e,...n}){return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Provides a ",Object(r.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"Kubernetes StatefulSet")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"create-a-statefulset-for-postgres"},"Create a StatefulSet for postgres"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'const label = "myLabel";\nconst pvName = "pv-db";\n\nconst namespace = provider.makeNamespace({\n  name: "myNamespace",\n});\n\nconst persistentVolume = provider.makePersistentVolume({\n  name: pvName,\n  dependencies: { namespace },\n  properties: () => ({\n    spec: {\n      accessModes: ["ReadWriteOnce"],\n      capacity: {\n        storage: "2Gi",\n      },\n      hostPath: {\n        path: "/data/pv0001/",\n      },\n    },\n  }),\n});\n\nconst statefulSetPostgres = provider.makeStatefulSet({\n  name: "myStatefulSet",\n  dependencies: { namespace, persistentVolume },\n  properties: () => ({\n    metadata: {\n      labels: {\n        app: label,\n      },\n    },\n    spec: {\n      serviceName: "postgres",\n      replicas: 1,\n      selector: {\n        matchLabels: {\n          app: label,\n        },\n      },\n      template: {\n        metadata: {\n          labels: {\n            app: label,\n          },\n        },\n        spec: {\n          containers: [\n            {\n              name: "postgres",\n              image: "postgres:10-alpine",\n              ports: [\n                {\n                  containerPort: 5432,\n                  name: "postgres",\n                },\n              ],\n              volumeMounts: [\n                {\n                  name: pvName,\n                  mountPath: "/var/lib/postgresql",\n                },\n              ],\n            },\n          ],\n        },\n      },\n      volumeClaimTemplates: [\n        {\n          metadata: {\n            name: pvName,\n          },\n          spec: {\n            accessModes: ["ReadWriteOnce"],\n            resources: {\n              requests: {\n                storage: "2Gi",\n              },\n            },\n          },\n        },\n      ],\n    },\n  }),\n});\n')),Object(r.b)("h2",{id:"source-code-examples"},"Source Code Examples"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://github.com/grucloud/grucloud/blob/main/examples/k8s/starhackit/base/charts/postgres.js#L134"},"postgres statefulset"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://github.com/grucloud/grucloud/blob/main/examples/k8s/starhackit/base/charts/redis.js#L53"},"redis statefulset")))),Object(r.b)("h2",{id:"listing"},"Listing"),Object(r.b)("p",null,"The following commands list the ",Object(r.b)("strong",{parentName:"p"},"StatefulSet")," type:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"gc list --types StatefulSet\n")),Object(r.b)("p",null,"Short version:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t Stat\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},'List Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nProvider: k8s\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 k8s                                                                              \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 StatefulSet        \u2502 postgres                                                    \u2502\n\u2502                    \u2502 redis                                                       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n2 resources, 1 type, 2 providers\nCommand "gc list --types StatefulSet" executed in 5s\n')),Object(r.b)("p",null,"To list a StatefulSet by name:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"gc l -t StatefulSet -n postgres\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'Listing resources on 2 providers: aws, k8s\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing\n\u2713 k8s\n  \u2713 Initialising\n  \u2713 Listing 6/6\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 StatefulSet from k8s                                                            \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name     \u2502 Data                                                            \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 postgres \u2502 metadata:                                                       \u2502 Yes  \u2502\n\u2502          \u2502   name: postgres                                                \u2502      \u2502\n\u2502          \u2502   namespace: default                                            \u2502      \u2502\n\u2502          \u2502   selfLink: /apis/apps/v1/namespaces/default/statefulsets/post\u2026 \u2502      \u2502\n\u2502          \u2502   uid: b8f36ec5-7788-40bc-ad90-fb50fb8b2c62                     \u2502      \u2502\n\u2502          \u2502   resourceVersion: 118835                                       \u2502      \u2502\n\u2502          \u2502   generation: 1                                                 \u2502      \u2502\n\u2502          \u2502   creationTimestamp: 2021-03-23T15:36:24Z                       \u2502      \u2502\n\u2502          \u2502   labels:                                                       \u2502      \u2502\n\u2502          \u2502     app: db                                                     \u2502      \u2502\n\u2502          \u2502   annotations:                                                  \u2502      \u2502\n\u2502          \u2502     CreatedByProvider: k8s                                      \u2502      \u2502\n\u2502          \u2502     ManagedBy: GruCloud                                         \u2502      \u2502\n\u2502          \u2502     Name: postgres                                              \u2502      \u2502\n\u2502          \u2502     stage: dev                                                  \u2502      \u2502\n\u2502          \u2502 spec:                                                           \u2502      \u2502\n\u2502          \u2502   replicas: 1                                                   \u2502      \u2502\n\u2502          \u2502   selector:                                                     \u2502      \u2502\n\u2502          \u2502     matchLabels:                                                \u2502      \u2502\n\u2502          \u2502       app: db                                                   \u2502      \u2502\n\u2502          \u2502   template:                                                     \u2502      \u2502\n\u2502          \u2502     metadata:                                                   \u2502      \u2502\n\u2502          \u2502       creationTimestamp: null                                   \u2502      \u2502\n\u2502          \u2502       labels:                                                   \u2502      \u2502\n\u2502          \u2502         app: db                                                 \u2502      \u2502\n\u2502          \u2502     spec:                                                       \u2502      \u2502\n\u2502          \u2502       containers:                                               \u2502      \u2502\n\u2502          \u2502         - name: postgres                                        \u2502      \u2502\n\u2502          \u2502           image: postgres:10-alpine                             \u2502      \u2502\n\u2502          \u2502           ports:                                                \u2502      \u2502\n\u2502          \u2502             - name: postgres                                    \u2502      \u2502\n\u2502          \u2502               containerPort: 5432                               \u2502      \u2502\n\u2502          \u2502               protocol: TCP                                     \u2502      \u2502\n\u2502          \u2502           env:                                                  \u2502      \u2502\n\u2502          \u2502             - name: POSTGRES_USER                               \u2502      \u2502\n\u2502          \u2502               valueFrom:                                        \u2502      \u2502\n\u2502          \u2502                 configMapKeyRef:                                \u2502      \u2502\n\u2502          \u2502                   name: postgres                                \u2502      \u2502\n\u2502          \u2502                   key: POSTGRES_USER                            \u2502      \u2502\n\u2502          \u2502             - name: POSTGRES_PASSWORD                           \u2502      \u2502\n\u2502          \u2502               valueFrom:                                        \u2502      \u2502\n\u2502          \u2502                 configMapKeyRef:                                \u2502      \u2502\n\u2502          \u2502                   name: postgres                                \u2502      \u2502\n\u2502          \u2502                   key: POSTGRES_PASSWORD                        \u2502      \u2502\n\u2502          \u2502             - name: POSTGRES_DB                                 \u2502      \u2502\n\u2502          \u2502               valueFrom:                                        \u2502      \u2502\n\u2502          \u2502                 configMapKeyRef:                                \u2502      \u2502\n\u2502          \u2502                   name: postgres                                \u2502      \u2502\n\u2502          \u2502                   key: POSTGRES_DB                              \u2502      \u2502\n\u2502          \u2502           resources:                                            \u2502      \u2502\n\u2502          \u2502           volumeMounts:                                         \u2502      \u2502\n\u2502          \u2502             - name: pv-db                                       \u2502      \u2502\n\u2502          \u2502               mountPath: /var/lib/postgresql                    \u2502      \u2502\n\u2502          \u2502           terminationMessagePath: /dev/termination-log          \u2502      \u2502\n\u2502          \u2502           terminationMessagePolicy: File                        \u2502      \u2502\n\u2502          \u2502           imagePullPolicy: IfNotPresent                         \u2502      \u2502\n\u2502          \u2502       restartPolicy: Always                                     \u2502      \u2502\n\u2502          \u2502       terminationGracePeriodSeconds: 30                         \u2502      \u2502\n\u2502          \u2502       dnsPolicy: ClusterFirst                                   \u2502      \u2502\n\u2502          \u2502       securityContext:                                          \u2502      \u2502\n\u2502          \u2502       schedulerName: default-scheduler                          \u2502      \u2502\n\u2502          \u2502   volumeClaimTemplates:                                         \u2502      \u2502\n\u2502          \u2502     - kind: PersistentVolumeClaim                               \u2502      \u2502\n\u2502          \u2502       apiVersion: v1                                            \u2502      \u2502\n\u2502          \u2502       metadata:                                                 \u2502      \u2502\n\u2502          \u2502         name: pv-db                                             \u2502      \u2502\n\u2502          \u2502         creationTimestamp: null                                 \u2502      \u2502\n\u2502          \u2502       spec:                                                     \u2502      \u2502\n\u2502          \u2502         accessModes:                                            \u2502      \u2502\n\u2502          \u2502           - "ReadWriteOnce"                                     \u2502      \u2502\n\u2502          \u2502         resources:                                              \u2502      \u2502\n\u2502          \u2502           requests:                                             \u2502      \u2502\n\u2502          \u2502             storage: 1Gi                                        \u2502      \u2502\n\u2502          \u2502         volumeMode: Filesystem                                  \u2502      \u2502\n\u2502          \u2502       status:                                                   \u2502      \u2502\n\u2502          \u2502         phase: Pending                                          \u2502      \u2502\n\u2502          \u2502   serviceName: postgres                                         \u2502      \u2502\n\u2502          \u2502   podManagementPolicy: OrderedReady                             \u2502      \u2502\n\u2502          \u2502   updateStrategy:                                               \u2502      \u2502\n\u2502          \u2502     type: RollingUpdate                                         \u2502      \u2502\n\u2502          \u2502     rollingUpdate:                                              \u2502      \u2502\n\u2502          \u2502       partition: 0                                              \u2502      \u2502\n\u2502          \u2502   revisionHistoryLimit: 10                                      \u2502      \u2502\n\u2502          \u2502 status:                                                         \u2502      \u2502\n\u2502          \u2502   observedGeneration: 1                                         \u2502      \u2502\n\u2502          \u2502   replicas: 1                                                   \u2502      \u2502\n\u2502          \u2502   readyReplicas: 1                                              \u2502      \u2502\n\u2502          \u2502   currentReplicas: 1                                            \u2502      \u2502\n\u2502          \u2502   updatedReplicas: 1                                            \u2502      \u2502\n\u2502          \u2502   currentRevision: postgres-765dc6b644                          \u2502      \u2502\n\u2502          \u2502   updateRevision: postgres-765dc6b644                           \u2502      \u2502\n\u2502          \u2502   collisionCount: 0                                             \u2502      \u2502\n\u2502          \u2502                                                                 \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nProvider: k8s\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 k8s                                                                              \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 StatefulSet        \u2502 postgres                                                    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 2 providers\nCommand "gc l -t StatefulSet -n postgres" executed in 4s\n')))}i.isMDXComponent=!0},222:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),p=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,b=u["".concat(o,".").concat(d)]||u[d]||m[d]||s;return t?r.a.createElement(b,c(c({ref:n},i),{},{components:t})):r.a.createElement(b,c({ref:n},i))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<s;i++)o[i]=t[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);