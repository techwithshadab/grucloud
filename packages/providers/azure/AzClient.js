const assert = require("assert");
const {
  tap,
  get,
  eq,
  reduce,
  pipe,
  or,
  switchCase,
  map,
  not,
  filter,
  and,
  always,
  any,
  fork,
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
  includes,
  defaultsDeep,
} = require("rubico/x");

const CoreClient = require("@grucloud/core/CoreClient");
const { findIdsByPath } = require("@grucloud/core/Common");

const {
  isInstanceUp: isInstanceUpDefault,
  AZURE_MANAGEMENT_BASE_URL,
  isSubstituable,
  configDefaultGeneric,
  findDependenciesUserAssignedIdentity,
  createAxiosAzure,
  shortName,
} = require("./AzureCommon");
const logger = require("@grucloud/core/logger")({ prefix: "AzClient" });

const listExpectedExceptionCodes = [404];

const listExpectedExceptionMessages = [
  "DataTransfer capability is not supported on this account",
  "No valid GraphAPICompute Service found",
  "Mongo Role Defination is not enabled for the account",
  "Mongo User Defination is not enabled for the account",
  "This runtime stack is not yet supported on Linux", // Web::WebAppProcess
  "We are unable to serve this request due to an internal error", // ContainerService::TrustedAccessRoleBinding
  "Preview feature", //ContainerService::TrustedAccessRoleBinding
];

const shouldRetryOnExceptionAzure = pipe([
  fork({
    status: get("error.response.status"),
    data: get("error.response.data"),
  }),
  tap(({ status, data }) => {
    logger.error(
      `shouldRetryOnExceptionCreate status: ${status}, data: ${JSON.stringify(
        data
      )}`
    );
  }),
  or([
    and([eq(get("status"), 503) /*, eq(get("code"), "ServerTimeout")*/]),
    and([
      eq(get("status"), 429),
      pipe([
        get("data.Message"),
        includes(
          "Cannot acquire exclusive lock to create or update this server farm."
        ),
      ]),
    ]),

    and([eq(get("status"), 429), eq(get("data.Code"), "TooManyRequests")]),
    and([eq(get("status"), 429), eq(get("data.error.code"), "RetryableError")]),
    and([eq(get("status"), 409), eq(get("data.error.code"), "Conflict")]),
    and([
      eq(get("status"), 409),
      eq(get("data.error.code"), "AnotherOperationInProgress"),
    ]),
  ]),
]);

const shouldRetryOnExceptionDeleteAzure = pipe([
  get("error.response.status"),
  (status) => pipe([() => [409, 429], includes(status)])(),
]);

const queryParameters = ({ apiVersion, queryParameters }) =>
  pipe([
    () => `?api-version=${apiVersion}`,
    when(
      () => queryParameters,
      (qs) =>
        pipe([
          () => qs,
          append("&"),
          append(new URLSearchParams(queryParameters()).toString()),
        ])()
    ),
  ])();

const onResponseListDefault = () => get("value", []);

const verbCreateFromMethods = switchCase([
  get("post"),
  () => "POST",
  () => "PUT",
]);

const verbUpdateFromMethods = switchCase([
  get("patch"),
  () => "PATCH",
  () => "PUT",
]);

const onCreateFilterPayload = pipe([
  tap((params) => {
    assert(true);
  }),
]);

//TODO remove
const specDefault = {
  operations: { getAll: {} },
  cannotBeDeleted: () => false,
  managedByOther: () => false,
};

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
      tap((params) => {
        assert(true);
      }),
      find(
        or([
          eq(pipe([({ varName }) => `{${varName}Name}`]), paramName),
          eq(pipe([({ varName }) => `{${varName}}`]), paramName),
        ])
      ),
      // tap((resource) => {
      //   assert(
      //     resource,
      //     `no resource for ${paramName} in dependencies ${JSON.stringify(
      //       dependencies,
      //       null,
      //       4
      //     )}`
      //   );
      // }),
      get("resource.name"),
      // tap((name) => {
      //   assert(
      //     name,
      //     `cannot find ${paramName} in ${JSON.stringify(dependencies, null, 4)}`
      //   );
      // }),
      switchCase([isEmpty, () => paramName, shortName]),
    ])();

const substituteSubscriptionId = () =>
  map(
    when(
      eq(identity, "{subscriptionId}"),
      () => process.env.AZURE_SUBSCRIPTION_ID
    )
  );
const substituteScope = ({ payload }) =>
  pipe([
    tap((params) => {
      assert(true);
    }),
    map(
      when(
        eq(identity, "{scope}"),
        pipe([
          () => payload,
          get("properties.scope", ""),
          callProp("substring", 1), //remove first slash
        ])
      )
    ),
    tap((params) => {
      assert(true);
    }),
  ]);

const substitutePath = ({ dependencies }) =>
  map(when(isSubstituable, substituteDependency({ dependencies })));

const pathCreate =
  ({ methods, apiVersion }) =>
  ({ dependencies, name, payload }) =>
    pipe([
      () => methods,
      get("get.path"),
      tap((path) => {
        assert(name);
        assert(path);
      }),
      callProp("split", "/"),
      substituteSubscriptionId(),
      substituteScope({ payload }),
      substitutePath({ dependencies }),
      map(when(isSubstituable, () => shortName(name))),
      callProp("join", "/"),
      append(queryParameters({ apiVersion })),
      tap((params) => {
        assert(true);
      }),
    ])();

exports.pathCreate = pathCreate;

const pathDelete =
  ({ apiVersion }) =>
  ({ id }) =>
    `${id}${queryParameters({ apiVersion })}`;

exports.AzClient = ({
  lives,
  spec,
  isInstanceUp = isInstanceUpDefault,
  config,
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
  pathUpdate = pipe([
    ({ id }) => `${id}${queryParameters({ apiVersion: spec.apiVersion })}`,
  ]),
}) => {
  assert(lives);
  assert(spec);
  const {
    methods,
    operations,
    apiVersion,
    dependencies = {},
    cannotBeDeleted,
    managedByOther,
  } = defaultsDeep(specDefault)(spec);

  if (!methods) {
    assert(methods);
  }
  if (!dependencies) {
    assert(dependencies);
  }
  assert(apiVersion);

  assert(spec.type);
  assert(config);
  assert(config.bearerToken);

  const findIdfromPath = ({ path, id, name, type }) =>
    pipe([
      tap((params) => {
        assert(path);
        assert(name, `no name in path ${path}, id ${id}`);
        assert(id);
      }),
      () => path,
      callProp("split", "/"),
      findIndex(eq(identity, `{${name}}`)),
      tap((index) => {
        assert(
          index >= 1,
          `findIdfromPath ${path}, ${id}, ${name}, type ${type}`
        );
      }),
      (index) =>
        pipe([
          () => id,
          callProp("split", "/"),
          callProp("slice", 0, index + 1),
          callProp("join", "/"),
          callProp("replace", "resourcegroups", "resourceGroups"),
        ])(),
      tap((params) => {
        assert(true);
      }),
    ])();

  const findDependenciesFromList = ({ live, lives }) =>
    pipe([
      tap((params) => {
        assert(dependencies);
      }),
      () => dependencies,
      filter(get("parent")),
      map.entries(([key, { group, type, name }]) => [
        key,
        {
          group,
          type,
          ids: [
            findIdfromPath({
              id: live.id,
              path: methods.get.path,
              name: name || key,
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

  const findDependenciesFromCreate = ({ live, lives }) =>
    pipe([
      tap((params) => {
        assert(dependencies);
      }),
      () => dependencies,
      filter(get("pathId")),
      map.entries(([key, { group, type, pathId }]) => [
        key,
        pipe([
          () => live,
          findIdsByPath({ pathId }),
          (ids) => ({
            group,
            type,
            ids,
          }),
        ])(),
      ]),
      values,
      tap((params) => {
        assert(true);
      }),
    ])();

  const findDependenciesDefault = ({ live, lives }) =>
    pipe([
      tap((params) => {
        assert(true);
      }),
      () => [
        ...findDependenciesFromList({ live, lives }),
        findDependenciesUserAssignedIdentity({ live, lives }),
        ...findDependenciesFromCreate({ live, lives }),
      ],
      filter(not(isEmpty)),
      tap((params) => {
        assert(true);
      }),
    ])();

  const pathGet = pipe([
    tap((params) => {
      assert(true);
    }),
    ({ id }) => `${id}${queryParameters({ apiVersion })}`,
  ]);

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
      callProp(
        "replace",
        "{subscriptionId}",
        process.env.AZURE_SUBSCRIPTION_ID
      ),
      //TODO wrong
      callProp(
        "replace",
        "{scope}",
        `subscriptions/${process.env.AZURE_SUBSCRIPTION_ID}`
      ),
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
                not(eq(always(value), "{subscriptionId}")),
                not(eq(always(value), "{scope}")),
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
          () => dependencies,
          values,
          filter(get("parent")),
          last,
          tap((dep) => {
            if (!dep) {
              assert(dep);
            }
          }),
          getPathsListWithDeps({ lives, config, methods }),
        ]),
      ]),
      map(
        append(
          queryParameters({
            apiVersion,
            queryParameters: operations.getAll.queryParameters,
          })
        )
      ),
      tap((params) => {
        assert(true);
      }),
    ])();

  const axios = createAxiosAzure({
    baseURL: AZURE_MANAGEMENT_BASE_URL,
    bearerToken: () => config.bearerToken(AZURE_MANAGEMENT_BASE_URL),
  });

  return CoreClient({
    type: "azure",
    lives,
    spec,
    config,
    findName: spec.findName,
    findDependencies: spec.findDependencies || findDependenciesDefault,
    onResponseCreate: spec.onResponseCreate,
    onResponseList: spec.onResponseList || onResponseListDefault,
    decorate: spec.decorate,
    configDefault: spec.configDefault || configDefaultGeneric,
    pathGet,
    pathCreate: pathCreate({ methods, apiVersion }),
    pathUpdate,
    pathDelete: pathDelete({ methods, apiVersion }),
    pathList,
    listIsExpectedException: or([
      pipe([
        get("response.status"),
        (status) =>
          pipe([() => listExpectedExceptionCodes, includes(status)])(),
      ]),
      pipe([
        get("response.data.message", ""),
        (message) =>
          pipe([
            () => listExpectedExceptionMessages,
            any((expectedMessage) => message.includes(expectedMessage)),
          ])(),
      ]),
      pipe([
        get("response.data", ""),
        (message) =>
          pipe([
            () => listExpectedExceptionMessages,
            any((expectedMessage) =>
              pipe([() => message, includes(expectedMessage)])()
            ),
          ])(),
      ]),
    ]),
    shouldRetryOnExceptionList: shouldRetryOnExceptionAzure,
    shouldRetryOnExceptionCreate: shouldRetryOnExceptionAzure,
    shouldRetryOnExceptionGetById: shouldRetryOnExceptionAzure,
    shouldRetryOnExceptionDelete: shouldRetryOnExceptionDeleteAzure,
    onCreateExpectedException: spec.onCreateExpectedException,
    findTargetId,
    verbCreate: verbCreateFromMethods(methods),
    verbUpdate: verbUpdateFromMethods(methods),
    onCreateFilterPayload,
    isInstanceUp,
    isDefault: spec.isDefault,
    cannotBeDeleted: pipe([
      tap((params) => {
        assert(true);
      }),
      or([
        managedByOther,
        cannotBeDeleted,
        pipe([() => methods, get("delete"), isEmpty]),
      ]),
      tap((params) => {
        assert(true);
      }),
    ]),
    managedByOther,
    axios,
  });
};
