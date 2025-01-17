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
  switchCase,
  any,
} = require("rubico");

const {
  pluck,
  includes,
  unless,
  when,
  defaultsDeep,
  callProp,
  find,
  values,
  size,
  last,
  append,
  isEmpty,
  identity,
} = require("rubico/x");

const {
  compare,
  omitIfEmpty,
  replaceWithName,
} = require("@grucloud/core/Common");
const { deepPick } = require("@grucloud/core/deepPick");
const { deepDefaults } = require("@grucloud/core/deepDefault");

const AppSpec = require("./resources/AppSpec");
const AuthorizationSpec = require("./resources/AuthorizationSpec");
const ContainerServiceSpec = require("./resources/ContainerServiceSpec");
const ComputeSpec = require("./resources/ComputeSpec");

const DBForPortgreSQLSpec = require("./resources/DBForPostgreSQLSpec");
const DocumentDBSpec = require("./resources/DocumentDBSpec");
const KeyVaultSpec = require("./resources/KeyVaultSpec");
const NetworkSpec = require("./resources/NetworkSpec");
const OperationalInsightsSpec = require("./resources/OperationalInsightsSpec");
const ResourceManagementSpec = require("./resources/ResourcesSpec");

const StorageSpec = require("./resources/StorageSpec");
const WebSpec = require("./resources/WebSpec");

const AzTag = require("./AzTag");

const Schema = require("./schema/AzureSchema.json");

const { AzClient } = require("./AzClient");
const { isSubstituable } = require("./AzureCommon");

const createSpecsOveride = (config) =>
  pipe([
    () => [
      AppSpec,
      AuthorizationSpec,
      ComputeSpec,
      ContainerServiceSpec,
      DBForPortgreSQLSpec,
      DocumentDBSpec,
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

const removeBracket = callProp("replace", "[]", "");
const hasBracket = includes("[]");

const assignDeep = ({
  providerConfig,
  lives,
  groupType,
  keys: [key, ...otherKey],
}) =>
  pipe([
    tap((params) => {
      assert(key);
      assert(lives);
    }),
    when(
      get(removeBracket(key)),
      assign({
        [removeBracket(key)]: pipe([
          get(removeBracket(key)),
          switchCase([
            () => isEmpty(otherKey),
            pipe([
              replaceWithName({
                groupType,
                path: "id",
                providerConfig,
                lives,
              }),
            ]),
            pipe([
              switchCase([
                () => hasBracket(key),
                map((live) =>
                  assignDeep({
                    providerConfig,
                    lives,
                    groupType,
                    keys: otherKey,
                  })(live)
                ),
                (live) =>
                  assignDeep({
                    providerConfig,
                    lives,
                    groupType,
                    keys: otherKey,
                  })(live),
              ]),
            ]),
          ]),
        ]),
      })
    ),
  ]);

const filterLiveOneDependency =
  ({ live, providerConfig, lives }) =>
  ({ type, group, pathId = "" }) =>
    pipe([
      tap((params) => {
        assert(lives);
        assert(type);
        assert(group);
      }),
      () => pathId,
      switchCase([
        isEmpty,
        () => live,
        pipe([
          callProp("split", "."),
          (keys) =>
            pipe([
              () => live,
              assignDeep({
                providerConfig,
                lives,
                groupType: `${group}::${type}`,
                keys,
              }),
            ])(),
        ]),
      ]),
    ])();

const filterLiveDependencyArray =
  ({ dependencies, providerConfig, lives }) =>
  (live) =>
    pipe([
      () => dependencies,
      filter(get("list")),
      tap((params) => {
        assert(live);
      }),
      reduce(
        (acc, value) =>
          defaultsDeep(acc)(
            filterLiveOneDependency({ providerConfig, lives, live: acc })(value)
          ),
        live
      ),
    ])();

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
                      assert(depName, `path ${path} id:${id}  `);
                    }),
                    when(
                      pipe([
                        () => ["resourceGroup"],
                        any((type) => pipe([() => value, includes(type)])()),
                      ]),
                      callProp("toLowerCase")
                    ),
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
  inferName:
    ({ dependencies }) =>
    (resource) =>
      pipe([
        tap(() => {
          assert(dependencies);
          assert(resource);
          assert(resource.dependenciesSpec);
        }),
        () => dependencies,
        map.entries(([key, dep]) => [key, { varName: key, ...dep }]),
        filter(get("parent")),
        values,
        last,
        switchCase([
          isEmpty,
          () => "",
          ({ varName }) =>
            pipe([
              () => resource.dependenciesSpec,
              get(varName),
              tap((name) => {
                assert(name);
              }),
            ])(),
        ]),
        unless(
          () => isEmpty(resource.properties.name),
          pipe([
            unless(isEmpty, append("::")),
            append(resource.properties.name),
          ])
        ),
        tap((params) => {
          assert(true);
        }),
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
    ({ pickPropertiesCreate = [], dependencies }) =>
    ({ providerConfig, lives }) =>
      //TODO
      pipe([
        tap((params) => {
          assert(lives);
          assert(pickPropertiesCreate);
          assert(providerConfig);
          assert(dependencies);
        }),
        deepPick([
          "name",
          "kind",
          ...pickPropertiesCreate,
          ...pipe([
            () => dependencies,
            values,
            filter(get("list")),
            pluck("pathId"),
            filter(not(isEmpty)),
          ])(),
        ]),
        omit([
          "properties.provisioningState",
          "etag",
          "type",
          "identity.userAssignedIdentities",
        ]),
        filterLiveDependencyArray({ dependencies, providerConfig, lives }),
      ]),
  compare: ({
    pickPropertiesCreate = [],
    omitProperties = [],
    omitPropertiesExtra = [],
    propertiesDefaultArray,
  }) =>
    compare({
      filterTarget: (input) =>
        pipe([
          tap((params) => {
            assert(input);
          }),
        ]),
      filterLive: ({ live, config, filterLiveExtra = () => identity }) =>
        pipe([
          tap((params) => {
            assert(true);
          }),
          filterLiveExtra({ live, providerConfig: config }),
          tap((params) => {
            assert(true);
          }),
        ]),
      filterAll: () =>
        pipe([
          tap((params) => {
            assert(pickPropertiesCreate);
          }),
          deepPick(pickPropertiesCreate),
          tap((params) => {
            assert(true);
          }),
          deepDefaults(propertiesDefaultArray),
          tap((params) => {
            assert(true);
          }),
          omit(omitProperties),
          omit(omitPropertiesExtra),
          omit([
            "type",
            //TODO keep the name and add inferName
            "name",
            "properties.provisioningState",
            "etag",
            "location", // feed 'uksouth' in, get 'UK South' out.
            "identity", //TODO
          ]),
          omitIfEmpty(["properties"]),
          tap((params) => {
            assert(true);
          }),
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
