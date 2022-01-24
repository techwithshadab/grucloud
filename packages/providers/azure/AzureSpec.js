const assert = require("assert");
const {
  pipe,
  map,
  tap,
  flatMap,
  filter,
  not,
  eq,
  get,
  and,
  assign,
  omit,
  pick,
  reduce,
  fork,
  any,
} = require("rubico");

const {
  when,
  defaultsDeep,
  callProp,
  find,
  values,
  size,
} = require("rubico/x");

const { compare } = require("@grucloud/core/Common");

const AuthorizationSpec = require("./resources/AuthorizationSpec");
const ComputeSpec = require("./resources/ComputeSpec");
const DBForPortgreSQLSpec = require("./resources/DBForPostgreSQLSpec");
const KeyVaultSpec = require("./resources/KeyVaultSpec");
const NetworkSpec = require("./resources/NetworkSpec");
const OperationalInsightsSpec = require("./resources/OperationalInsightsSpec");
const ResourceManagementSpec = require("./resources/ResourcesSpec");
const StorageSpec = require("./resources/StorageSpec");
const WebSpec = require("./resources/WebSpec");

const AzTag = require("./AzTag");

const Schema = require("./AzureSchema.json");
const AzClient = require("./AzClient");
const { isSubstituable } = require("./AzureCommon");

const createSpecsOveride = (config) =>
  pipe([
    () => [
      AuthorizationSpec,
      ComputeSpec,
      DBForPortgreSQLSpec,
      KeyVaultSpec,
      NetworkSpec,
      OperationalInsightsSpec,
      ResourceManagementSpec,
      StorageSpec,
      WebSpec,
    ],
    flatMap(callProp("fnSpecs", { config })),
    tap((params) => {
      assert(true);
    }),
  ])();

exports.createSpecsOveride = createSpecsOveride;

const buildDefaultSpec = fork({
  isDefault: () => eq(get("live.name"), "default"),
  managedByOther: () => eq(get("live.name"), "default"),
  ignoreResource: () => () => pipe([get("isDefault")]),
  findName: ({ methods, dependencies }) =>
    pipe([
      tap((params) => {
        assert(methods);
        assert(dependencies);
      }),
      fork({
        path: pipe([() => methods, get("get.path"), callProp("split", "/")]),
        id: pipe([get("live.id"), callProp("split", "/")]),
        lives: get("lives"),
      }),
      ({ path, id }) =>
        pipe([
          () => path,
          reduce(
            (acc, value, index) =>
              pipe([
                () => acc,
                when(
                  and([
                    () => isSubstituable(value),
                    not(eq(value, "{subscriptionId}")),
                    not(eq(value, "{scope}")),
                  ]),
                  pipe([
                    () => id[index + size(id) - size(path)],
                    tap((depName) => {
                      assert(depName);
                    }),
                    callProp("toLowerCase"),
                    (depName) => [...acc, depName],
                  ])
                ),
              ])(),
            []
          ),
        ])(),
      callProp("join", "::"),
      tap((name) => {
        assert(name, "missing name");
      }),
    ]),
  dependsOn: ({ dependencies, type }) =>
    pipe([
      tap((params) => {
        assert(type);
        if (!dependencies) {
          assert(dependencies);
        }
      }),
      () => dependencies,
      values,
      map(({ group, type }) => `${group}::${type}`),
    ])(),
  dependsOnList: ({ dependencies }) =>
    pipe([
      tap(() => {
        assert(dependencies);
      }),
      () => dependencies,
      values,
      filter(not(get("createOnly"))),
      map(({ group, type }) => `${group}::${type}`),
    ])(),
  Client:
    ({ dependencies }) =>
    ({ spec, config, lives }) =>
      AzClient({
        spec,
        dependencies,
        config,
        lives,
      }),
  filterLive:
    ({ pickPropertiesCreate = [] }) =>
    () =>
      pipe([
        pick(pickPropertiesCreate),
        omit([
          "properties.provisioningState",
          "etag",
          "type",
          //"identity",
          "identity.userAssignedIdentities",
        ]),
      ]),
  compare: ({
    pickProperties = [],
    omitProperties = [],
    propertiesDefault = {},
  }) =>
    compare({
      filterTarget: pipe([
        tap((params) => {
          assert(true);
        }),
      ]),
      filterAll: pipe([
        tap((params) => {
          assert(pickProperties);
          assert(propertiesDefault);
        }),
        pick(pickProperties),
        defaultsDeep(propertiesDefault),
        omit(omitProperties),
        omit([
          "type",
          "name",
          "properties.provisioningState",
          "etag",
          "identity", //TODO
        ]),
      ]),
    }),
  isOurMinion: () => AzTag.isOurMinion,
});

const addDefaultSpecs = pipe([
  tap((params) => {
    assert(true);
  }),
  map((spec) => ({ ...buildDefaultSpec(spec), ...spec })),
  tap((params) => {
    assert(true);
  }),
]);

// const addUsedBy = (specs) =>
//   pipe([
//     tap((params) => {
//       assert(true);
//     }),
//     () => specs,
//     map(
//       assign({
//         usedBy: (spec) =>
//           pipe([
//             tap((params) => {
//               assert(spec);
//             }),
//             () => specs,
//             filter(
//               pipe([
//                 get("dependencies"),
//                 filter(get("parent")),
//                 tap((params) => {
//                   assert(true);
//                 }),
//                 any(
//                   and([
//                     eq(get("group"), spec.group),
//                     eq(get("type"), spec.type),
//                   ])
//                 ),
//               ])
//             ),
//             tap((params) => {
//               assert(true);
//             }),
//           ])(),
//       })
//     ),
//     tap((params) => {
//       assert(true);
//     }),
//   ])();

const findByGroupAndType = ({ group, type }) =>
  pipe([
    tap((params) => {
      assert(type);
      assert(group);
    }),
    find(and([eq(get("group"), group), eq(get("type"), type)])),
  ]);
exports.findByGroupAndType = findByGroupAndType;

const mergeSpec = ({ specsGen, specsOveride }) =>
  pipe([
    tap((params) => {
      assert(Array.isArray(specsGen));
      assert(Array.isArray(specsOveride));
    }),
    () => specsOveride,
    map((overideSpec) =>
      pipe([
        () => specsGen,
        findByGroupAndType(overideSpec),
        (found) => ({ ...found, ...overideSpec }),
        tap((params) => {
          assert(true);
        }),
      ])()
    ),
    tap((params) => {
      assert(true);
    }),
  ])();

exports.mergeSpec = mergeSpec;

exports.fnSpecs = (config) =>
  pipe([
    assign({
      specsOveride: () => createSpecsOveride(config),
      specsGen: pipe([() => Schema]),
    }),
    assign({
      specsOveride: mergeSpec,
    }),
    assign({
      specsGen: ({ specsGen, specsOveride }) =>
        pipe([
          () => specsGen,
          filter(
            not((spec) =>
              pipe([() => specsOveride, findByGroupAndType(spec)])()
            )
          ),
        ])(),
    }),
    ({ specsGen, specsOveride }) => [...specsGen, ...specsOveride],
    map(
      assign({ groupType: pipe([({ group, type }) => `${group}::${type}`]) })
    ),
    callProp("sort", (a, b) => a.groupType.localeCompare(b.groupType)),
    addDefaultSpecs,
    tap((params) => {
      assert(true);
    }),
  ])();
