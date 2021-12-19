const assert = require("assert");
const path = require("path");
const {
  tap,
  get,
  eq,
  reduce,
  pipe,
  switchCase,
  map,
  not,
  and,
} = require("rubico");
const {
  callProp,
  identity,
  first,
  last,
  append,
  values,
  find,
  when,
  size,
  prepend,
  findIndex,
  isEmpty,
} = require("rubico/x");
const CoreClient = require("@grucloud/core/CoreClient");
const AxiosMaker = require("@grucloud/core/AxiosMaker");

const {
  isInstanceUp: isInstanceUpDefault,
  AZURE_MANAGEMENT_BASE_URL,
  isSubstituable,
} = require("./AzureCommon");

const queryParameters = (apiVersion) => `?api-version=${apiVersion}`;

module.exports = AzClient = ({
  spec,
  apiVersion,
  isInstanceUp = isInstanceUpDefault,
  config,
  configDefault,
  isDefault,
  cannotBeDeleted,
  findDependencies,
  findTargetId = ({ path }) =>
    (result) =>
      pipe([
        () => result,
        get("id"),
        when(
          isEmpty,
          pipe([() => path, callProp("split", "?api-version"), first])
        ),
      ])(),
  getList = () => undefined,
  getByName = () => undefined,
  onResponseList = () => get("value", []),
  decorate,
  verbCreate = "PUT",
  verbUpdate = "PATCH",
  pathUpdate = ({ id }) => `${id}${queryParameters(apiVersion)}`,
  methods,
  dependencies = () => ({}),
}) => {
  assert(methods);
  assert(spec);
  assert(spec.type);
  assert(apiVersion);
  assert(config);
  assert(config.bearerToken);

  const findIdfromPath = ({ path, id, name }) =>
    pipe([
      tap((params) => {
        assert(path);
        assert(name);
        assert(id);
      }),
      () => path,
      callProp("split", "/"),
      findIndex(eq(identity, `{${name}}`)),
      tap((index) => {
        assert(index >= 1);
      }),
      (index) =>
        pipe([
          () => id,
          callProp("split", "/"),
          callProp("slice", 0, index + 1),
          callProp("join", "/"),
        ])(),
      tap((params) => {
        assert(true);
      }),
    ])();

  const findDependenciesDefault = ({ live, lives }) =>
    pipe([
      dependencies,
      map.entries(([key, { group, type, name }]) => [
        key,
        {
          group,
          type,
          ids: [
            findIdfromPath({
              id: live.id,
              path: methods.get.path,
              name,
              group,
              type,
            }),
          ],
        },
      ]),
      values,
      tap((params) => {
        assert(true);
      }),
    ])();

  const pathGet = ({ id }) => `${id}${queryParameters(apiVersion)}`;

  const substituteDependency =
    ({ dependencies }) =>
    (paramName) =>
      pipe([
        tap(() => {
          assert(dependencies);
        }),
        () => dependencies,
        map.entries(([varName, resource]) => [varName, { varName, resource }]),
        values,
        find(eq(pipe([({ varName }) => `{${varName}Name}`]), paramName)),
        tap((resource) => {
          assert(resource);
        }),
        get("resource.name"),
      ])();

  const substituteSubscriptionId = () =>
    map(
      when(eq(identity, "{subscriptionId}"), () => process.env.SUBSCRIPTION_ID)
    );

  const substitutePath = ({ dependencies }) =>
    map(when(isSubstituable, substituteDependency({ dependencies })));

  const pathCreate = ({ dependencies, name }) =>
    pipe([
      () => methods,
      get("get.path"),
      tap((path) => {
        assert(name);
        assert(path);
      }),
      callProp("split", "/"),
      tap(
        pipe([last, isSubstituable], (isParam) => {
          assert(isParam, "last part of the path must be a substituable");
        })
      ),
      callProp("slice", 0, -1),
      substituteSubscriptionId(),
      substitutePath({ dependencies }),
      callProp("join", "/"),
      append(`/${name}`),
      append(queryParameters(apiVersion)),
      tap((params) => {
        assert(true);
      }),
    ])();

  const pathDelete = ({ id }) => `${id}${queryParameters(apiVersion)}`;

  const getPathsListNoDeps = ({ methods }) =>
    pipe([
      tap(() => {
        assert(methods.getAll);
      }),
      () => methods,
      get("getAll.path"),
      tap((path) => {
        assert(path);
      }),
      //TODO common
      callProp("replace", "{subscriptionId}", process.env.SUBSCRIPTION_ID),
      append(queryParameters(apiVersion)),
      tap((params) => {
        assert(true);
      }),
      (url) => [url],
    ]);

  const getPathsListWithDeps = ({ lives, config, methods }) =>
    pipe([
      tap(({ type, group }) => {
        assert(type);
        assert(group);
        assert(lives);
        assert(methods);
      }),
      ({ type, group }) =>
        lives.getByType({
          providerName: config.providerName,
          type,
          group,
        }),
      tap((params) => {
        assert(true);
      }),
      map(({ id }) =>
        pipe([
          tap((params) => {
            assert(id);
          }),
          () => methods,
          get("getAll.path", methods.get.path),
          tap((path) => {
            assert(path, `no getAll or get`);
          }),
          callProp("split", "/"),
          callProp("slice", size(id.split("/"))),
          callProp("join", "/"),
          prepend(`${id}/`),
          append(queryParameters(apiVersion)),
        ])()
      ),
      tap((params) => {
        assert(true);
      }),
    ]);

  const numberOfDependenciesInPath = (path = "") =>
    pipe([
      () => path,
      callProp("split", "/"),
      reduce(
        (acc, value) =>
          pipe([
            () => value,
            switchCase([
              and([
                not(eq(value, "{subscriptionId}")),
                callProp("startsWith", "{"),
              ]),
              () => acc + 1,
              () => acc,
            ]),
          ])(),
        0
      ),
      tap((params) => {
        assert(true);
      }),
    ])();

  const pathList = ({ lives }) =>
    pipe([
      tap((params) => {
        assert(methods);
        assert(lives);
        assert(dependencies);
      }),
      () => methods,
      switchCase([
        and([
          get("getAll.path"),
          pipe([get("getAll.path"), eq(numberOfDependenciesInPath, 0)]),
        ]),
        getPathsListNoDeps({ methods }),
        pipe([
          dependencies,
          values,
          last,
          tap((dep) => {
            assert(dep);
          }),
          getPathsListWithDeps({ lives, config, methods }),
        ]),
      ]),
      tap((params) => {
        assert(true);
      }),
    ])();

  const axios = AxiosMaker({
    baseURL: AZURE_MANAGEMENT_BASE_URL,
    onHeaders: () => ({
      Authorization: `Bearer ${config.bearerToken()}`,
    }),
  });

  return CoreClient({
    type: "azure",
    spec,
    config,
    findDependencies: findDependencies || findDependenciesDefault,
    onResponseList,
    decorate,
    configDefault,
    pathGet,
    pathCreate,
    pathUpdate,
    pathDelete,
    pathList,
    findTargetId,
    verbCreate,
    verbUpdate,
    isInstanceUp,
    isDefault,
    cannotBeDeleted,
    axios,
    getList: getList({ axios }),
    getByName: getByName({ axios }),
  });
};
