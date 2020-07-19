const assert = require("assert");
const _ = require("lodash");
const path = require("path");
const { defaultsDeep } = require("lodash/fp");
const { isEmpty, flatten, reverse } = require("ramda");
const { pipe, tap, map, filter, tryCatch, switchCase } = require("rubico");
const Promise = require("bluebird");
const logger = require("../logger")({ prefix: "Core" });
const { tos } = require("../tos");
const { checkConfig, checkEnv } = require("../Utils");
const { fromTagName } = require("./TagName");
const { SpecDefault } = require("./SpecDefault");
const { retryExpectOk, retryCall } = require("./Retry");
const { logError, mapPoolSize } = require("./Common");
const { Planner, mapToGraph } = require("./Planner");

const noop = ({}) => {};
const toUri = ({ providerName, type, name }) =>
  `${providerName}::${type}::${name}`;

const configProviderDefault = {
  tag: "ManagedByGru",
  managedByKey: "ManagedBy",
  managedByValue: "GruCloud",
  managedByDescription: "Managed By GruCloud",
  stageTagKey: "stage",
  stage: "dev",
  retryCount: 30,
  retryDelay: 10e3,
};

const PlanDirection = {
  UP: 1,
  DOWN: -1,
};

const ResourceMaker = ({
  name: resourceName,
  dependencies = {},
  transformConfig,
  properties = () => ({}),
  spec,
  provider,
  config,
}) => {
  const { type } = spec;
  logger.debug(
    `ResourceMaker: ${tos({ type, resourceName, properties: properties() })}`
  );

  const client = spec.Client({ spec, config });
  let parent;
  const getLive = async () => {
    logger.info(`getLive ${type}/${resourceName}`);
    const live = await client.getByName({ name: resourceName, dependencies });
    logger.debug(`getLive ${type}/${resourceName} result: ${tos(live)}`);
    return live;
  };

  const planUpdate = async ({ resource, live }) => {
    logger.info(
      `planUpdate resource: ${tos(resource.toJSON())}, live: ${tos(live)}`
    );
    const target = await resource.resolveConfig();
    logger.debug(`planUpdate target: ${tos(target)}`);

    if (_.isEmpty(target)) {
      return;
    }
    const diff = spec.compare({ target, live });
    logger.info(`planUpdate diff ${tos(diff)}`);
    if (diff.length > 0) {
      return [{ action: "UPDATE", resource: resource.toJSON(), target, live }];
    }
  };

  const resolveDependencies = pipe([
    map(async (dependency) => {
      if (_.isString(dependency)) {
        return dependency;
      }
      if (!dependency.getLive) {
        return resolveDependencies(dependency);
      }
      const live = await dependency.getLive();
      //TODO refactor
      const config = await dependency.resolveConfig();
      return { resource: dependency, live: live || config };
    }),
    tap((x) => logger.debug(`resolveDependencies: ${tos(x)}`)),
  ]);
  const resolveConfig = async () => {
    logger.info(`resolveConfig ${type}/${resourceName}`);
    //TODO use function to extract resources: mapTypeToResources.get(client.type)
    const { items } = await client.getList({
      resources: provider.getMapTypeToResources().get(client.type),
    });
    //logger.debug(`config ${tos({ type, resourceName, items })}`);

    const resolvedDependencies = await resolveDependencies(dependencies);

    assert(client.configDefault);

    const config = await client.configDefault({
      name: resourceName,
      properties: defaultsDeep(spec.propertiesDefault, properties()),
      dependencies: resolvedDependencies,
    });
    logger.debug(`resolveConfig: configDefault: ${tos(config)}`);
    const finalConfig = transformConfig
      ? await transformConfig({
          dependencies: resolvedDependencies,
          items,
          config,
          configProvider: provider.config(),
        })
      : config;

    logger.info(`resolveConfig: final: ${tos(finalConfig)}`);
    //assert(!_.isEmpty(finalConfig));
    return finalConfig;
  };
  const create = async ({ payload }) => {
    logger.info(`create ${tos({ resourceName, type, payload })}`);
    // Is the resource already created ?
    if (await getLive()) {
      throw Error(`Resource ${type}/${resourceName} already exists`);
    }

    // Create now
    const instance = await retryCall({
      name: `create ${type}/${resourceName}`,
      fn: () =>
        client.create({
          name: resourceName,
          payload,
          dependencies,
        }),
      shouldRetry: client.shouldRetryOnError,
      retryCount: provider.config().retryCount,
      retryDelay: provider.config().retryDelay,
    });

    logger.info(`created:  ${type}/${resourceName}`);

    const live = await retryCall({
      name: `create getLive ${type}/${resourceName}`,
      fn: async () => {
        const live = await getLive();
        if (!live) {
          throw Error(
            `Resource ${type}/${resourceName} not there after being created`
          );
        }
        return live;
      },
      shouldRetry: () => true,
      retryCount: provider.config().retryCount,
      retryDelay: provider.config().retryDelay,
    });

    if (
      !client.spec.isOurMinion({
        resource: live,
        resourceNames: provider.resourceNames(),
        config: provider.config(),
      })
    ) {
      throw Error(`Resource ${type}/${resourceName} is not tagged correctly`);
    }

    return instance;
  };

  const planUpsert = async ({ resource }) => {
    logger.info(`planUpsert resource: ${resource.toString()}`);
    const live = await resource.getLive();
    logger.debug(`planUpsert live: ${tos(live)}`);
    //TODO check if live is empty
    const plan = live
      ? planUpdate({ live, resource })
      : [
          {
            action: "CREATE",
            resource: resource.toJSON(),
            config: await resource.resolveConfig(),
          },
        ];
    logger.debug(`planUpsert plan: ${tos(plan)}`);
    return plan;
  };

  const toJSON = () => ({
    provider: provider.name,
    type,
    name: resourceName,
    uri: toUri({
      providerName: provider.name,
      type,
      name: resourceName,
    }),
  });

  const toString = () =>
    toUri({
      providerName: provider.name,
      type,
      name: resourceName,
    });

  const addParent = (parentToSet) => {
    parent = parentToSet;
  };
  const resourceMaker = {
    type,
    provider,
    name: resourceName,
    dependencies,
    getParent: () => parent,
    spec,
    client,
    toJSON,
    toString,
    resolveConfig,
    create,
    planUpsert,
    getLive,
    addParent,
    resolveDependencies: () => resolveDependencies(dependencies),
  };
  //TODO rubico map ?
  _.map(dependencies, (dependency) => {
    if (_.isString(dependency)) {
      return;
    }
    if (!dependency) {
      throw { code: 422, message: "missing dependency" };
    }
    if (!dependency.addParent) {
      _.forEach(dependency, (item) => {
        if (item.addParent) {
          item.addParent(resourceMaker);
        }
      });
    } else {
      dependency.addParent(resourceMaker);
    }
  });
  return resourceMaker;
};

const factoryName = (spec) => `${spec.listOnly ? "use" : "make"}${spec.type}`;

const createResourceMakers = ({ specs, config, provider }) =>
  specs.reduce((acc, spec) => {
    assert(spec.type);
    acc[factoryName(spec)] = async ({
      name,
      dependencies,
      properties,
      transformConfig,
    }) => {
      const resource = ResourceMaker({
        name,
        transformConfig,
        properties,
        dependencies,
        spec: _.defaults(spec, SpecDefault({ config })),
        provider,
        config,
      });
      provider.targetResourcesAdd(resource);

      if (resource.client.validate) {
        await resource.client.validate({ name });
      }

      return resource;
    };
    return acc;
  }, {});

function CoreProvider({
  name: providerName,
  type,
  mandatoryEnvs = [],
  mandatoryConfigKeys = [],
  fnSpecs,
  config,
}) {
  const providerConfig = defaultsDeep(configProviderDefault, config);
  logger.debug(
    `CoreProvider name: ${providerName}, type ${type}, config: ${tos(
      providerConfig
    )}`
  );

  const hookMap = new Map();
  const hookAdd = (name, hook) => {
    hookMap.set(name, { name, ...hook });
  };

  // Target Resources
  const mapNameToResource = new Map();
  const mapTypeToResources = new Map();
  const targetResourcesAdd = (resource) => {
    assert(resource.name);
    assert(resource.type);
    if (mapNameToResource.has(resource.name)) {
      throw {
        code: 400,
        message: `resource name '${resource.name}' already exists`,
      };
    }
    mapNameToResource.set(resource.name, resource);

    const resourcesPerType = mapTypeToResources.has(resource.type)
      ? mapTypeToResources.get(resource.type)
      : [];

    mapTypeToResources.set(resource.type, [...resourcesPerType, resource]);
  };

  const getTargetResources = () => [...mapNameToResource.values()];
  const resourceNames = () => [...mapNameToResource.keys()];

  const resourceByName = (name) => mapNameToResource.get(name);

  const specs = fnSpecs(providerConfig).map((spec) =>
    _.defaults(spec, SpecDefault({ config: providerConfig, providerName }))
  );

  const clients = specs.map((spec) =>
    spec.Client({ spec, config: providerConfig })
  );

  const clientByType = (type) => {
    assert(type);
    const spec = specs.find((spec) => spec.type === type);
    if (!spec) {
      throw new Error(`type ${type} not found`);
    }
    return spec.Client({ spec, config: providerConfig });
  };

  const filterClient = async ({
    client,
    our,
    name,
    id,
    canBeDeleted,
    providerName,
  }) => {
    logger.debug(`listLives type: ${client.spec.type}`);
    const { items } = await client.getList({
      resources: mapTypeToResources.get(client.type),
    });
    //logger.debug(`listLives resources: ${tos(items)}`);
    //TODO use rubico anf tap at the end
    return {
      type: client.spec.type,
      resources: items
        .map((item) => ({
          name: client.findName(item),
          id: client.findId(item),
          managedByUs: client.spec.isOurMinion({
            resource: item,
            resourceNames: resourceNames(),
            config: provider.config(),
          }),
          providerName: client.spec.providerName,
          data: item,
        }))
        .filter((item) => (our ? item.managedByUs : true))
        .filter((item) => (name ? item.name === name : true))
        .filter((item) => (id ? item.id === id : true))
        .filter((item) =>
          providerName ? item.providerName === providerName : true
        )
        .filter((item) =>
          canBeDeleted
            ? !client.cannotBeDeleted({
                resource: item.data,
                name: item.name,
                resourceNames: resourceNames(),
              }) //TODO is it ever called ?
            : true
        ),
    };
  };

  const listLives = async ({
    all = false,
    our = false,
    types = [],
    name,
    id,
    provider: providerName,
    canBeDeleted = false,
  } = {}) => {
    return await pipe([
      tap(() =>
        logger.debug(`listLives filters: ${tos({ all, our, types, name, id })}`)
      ),
      filter((client) => all || !client.spec.listOnly),
      filter((client) =>
        !_.isEmpty(types) ? types.includes(client.spec.type) : true
      ),
      map(
        async (client) =>
          await filterClient({
            client,
            our,
            name,
            id,
            canBeDeleted,
            providerName,
          })
      ),
      //tap((list) => logger.debug(`listLives before empty: ${tos(list)}`)),
      filter((live) => !isEmpty(live.resources)),
      tap((list) => logger.debug(`listLives results: ${tos(list)}`)),
    ])(clients);
  };

  const listTargets = async () => {
    const lists = (
      await Promise.all(
        getTargetResources().map(async (resource) => ({
          ...resource.toJSON(),
          data: await resource.getLive(),
        }))
      )
    ).filter((x) => x.data);
    logger.debug(`listTargets ${tos(lists)}`);
    return lists;
  };

  const listConfig = async () => {
    const lists = await Promise.all(
      getTargetResources().map(async (resource) => ({
        resource: resource.toJSON(),
        //config: await resource.config(),
      }))
    );
    logger.debug(`listConfig ${JSON.stringify(lists, null, 4)}`);
    return lists;
  };

  const planQuery = async ({ onStateChange = noop } = {}) => {
    logger.debug(`planQuery begins`);
    const plan = {
      providerName,
      newOrUpdate: await planUpsert({ onStateChange }),
      destroy: await planFindDestroy({}, PlanDirection.UP),
    };
    logger.info(
      `planQuery results: #create ${plan.newOrUpdate.length}  ${tos(plan)}`
    );
    return plan;
  };

  const runOnDeployed = ({ onStateChange }) =>
    map(
      tryCatch(
        pipe([
          tap(() => {
            logger.info(`runOnDeployed start`);
          }),
          ({ onDeployed = () => {} }) =>
            onDeployed({
              resourceMap: mapNameToResource,
            }),
          switchCase([
            (result) => result?.actions,
            ({ actions }) =>
              map(
                tryCatch(
                  pipe([
                    tap((action) => {
                      logger.info(`runOnDeployed start ${action.name}`);
                      onStateChange({
                        uri: action.name,
                        nextState: "RUNNING",
                      });
                    }),
                    tap((action) => action.command()),
                    tap((action) => {
                      logger.info(`runOnDeployed stop ${action.name}`);
                      onStateChange({ uri: action.name, nextState: "DONE" });
                    }),
                  ]),
                  (error, action) => {
                    logger.error(`runOnDeployed error ${action.name}`);
                    onStateChange({
                      uri: action.name,
                      nextState: "ERROR",
                      error,
                    });

                    logger.error(error);
                    return { error };
                  }
                )
              )(actions),
            () => {
              console.log("no actions");
            },
          ]),
        ]),
        (error, hook) => {
          return { error, hook };
        }
      )
    )([...hookMap.values()]);

  const runOnDestroyed = () =>
    map(
      tryCatch(
        ({ onDestroyed = () => {} }) =>
          onDestroyed({
            resourceMap: mapNameToResource,
          }),
        (error, hook) => ({ error, hook })
      )
    )([...hookMap.values()]);

  const planApply = async ({ plan, onStateChange = noop }) => {
    assert(plan);
    logger.info(`Apply Plan ${tos(plan)}`);
    const resultDestroy = await planDestroy({
      plans: plan.destroy,
      onStateChange,
      direction: PlanDirection.UP,
    });
    const resultCreate = await upsertResources({
      plans: plan.newOrUpdate,
      onStateChange,
    });

    const success = resultCreate.success && resultDestroy.success;
    return {
      results: [...resultCreate.results, ...resultDestroy.results],
      success,
      hookResults: runOnDeployed({ onStateChange }),
    };
  };

  /**
   * Find live resources to create or update based on the target resources
   */
  const planUpsert = async ({ onStateChange = noop }) => {
    logger.debug(`planUpsert: #resources ${getTargetResources().length}`);
    return pipe([
      filter((resource) => !resource.spec.listOnly),
      tap(
        map((resource) =>
          onStateChange({
            uri: resource.toString(),
            nextState: "WAITING",
          })
        )
      ),
      map.pool(mapPoolSize, async (resource) => {
        try {
          onStateChange({
            uri: resource.toString(),
            nextState: "RUNNING",
          });
          const actions = await resource.planUpsert({ resource });
          onStateChange({
            uri: resource.toString(),
            nextState: "DONE",
          });
          return actions;
        } catch (error) {
          logger.error(`error query resource ${resource.toString()}`);
          logger.error(error);
          onStateChange({
            uri: resource.toString(),
            nextState: "ERROR",
            error,
          });
        }
      }),
      filter((x) => x),
      flatten,
      tap((plans) =>
        logger.debug(`planUpsert: plans: ${JSON.stringify(plans, null, 4)}`)
      ),
    ])(getTargetResources());
  };

  const filterDestroyResources = ({
    client,
    resource,
    options: {
      all = false,
      name: nameToDelete = "",
      id: idToDelete = "",
      types = [],
      provider: providerName = "",
    } = {},
    direction,
  }) => {
    const { spec } = client;
    const { type } = spec;
    const name = client.findName(resource);
    const id = client.findId(resource);
    assert(direction);
    logger.debug(
      `filterDestroyResources ${tos({ name, types, id, resource })}`
    );

    // Cannot delete default resource
    if (
      client.cannotBeDeleted({ resource, name, resourceNames: resourceNames() })
    ) {
      logger.debug(
        `planFindDestroy ${type}/${name}, default resource cannot be deleted`
      );
      return false;
    }
    if (!_.isEmpty(providerName)) {
      if (providerName !== spec.providerName) {
        return false;
      }
    }
    // Delete all
    if (all) {
      logger.debug(`planFindDestroy ${type}/${name}, delete all`);
      return true;
    }
    if (
      !spec.isOurMinion({
        resource,
        resourceNames: resourceNames(),
        config: provider.config(),
      })
    ) {
      logger.debug(`planFindDestroy ${type}/${name}, not our minion`);
      return false;
    }

    // Delete by type
    if (!_.isEmpty(types)) {
      return types.includes(type);
    }

    // Delete by id
    if (!_.isEmpty(idToDelete)) {
      return id === idToDelete;
    }

    // Delete by name
    if (!_.isEmpty(nameToDelete)) {
      return name === nameToDelete;
    }

    const isNameInOurPlan = resourceNames().includes(
      fromTagName(name, providerConfig.tag)
    );
    if (direction == PlanDirection.UP) {
      if (!isNameInOurPlan) {
        logger.debug(
          `planFindDestroy ${type}/${name} is not ${resourceNames()} and plan UP`
        );
        return true;
      } else {
        return false;
      }
    } else {
      logger.debug(`planFindDestroy ${type}/${name} going down`);
      return true;
    }
  };

  const planFindDestroy = async (options, direction = PlanDirection.DOWN) => {
    return await pipe([
      tap((x) =>
        logger.debug(`planFindDestroy ${tos({ options, direction })}`)
      ),
      filter((client) => !client.spec.listOnly),
      map(async (client) =>
        pipe([
          async () =>
            await client.getList({
              resources: mapTypeToResources.get(client.type),
            }),
          ({ items }) =>
            items
              .filter((resource) =>
                filterDestroyResources({ client, resource, options, direction })
              )
              .map((live) => ({
                resource: {
                  provider: providerName,
                  type: client.spec.type,
                  name: client.findName(live),
                  id: client.findId(live),
                  uri: toUri({
                    providerName,
                    type: client.spec.type,
                    name: client.findName(live),
                  }),
                },
                action: "DESTROY",
                config: live,
              })),
        ])()
      ),
      flatten,
      filter((x) => x),
      flatten,
      reverse,
      tap((x) =>
        logger.debug(
          `planFindDestroy #resources ${x.length}: ${tos(
            x.map((x) => x.resource.name).join(",")
          )}`
        )
      ),
      tap((x) => logger.debug(`planFindDestroy  ${tos(x)}`)),
    ])(clients);
  };

  const upsertResources = async ({ plans = [], onStateChange = noop }) => {
    const executor = async ({ item }) => {
      const engine = resourceByName(item.resource.name);
      if (!engine) {
        throw Error(`Cannot find resource ${tos(item.resource.name)}`);
      }
      const input = await engine.resolveConfig();
      const output = await engine.create({
        payload: input,
      });
      return { input, output };
    };

    const planner = Planner({
      plans,
      specs: mapToGraph(mapNameToResource),
      executor,
      onStateChange,
    });
    return await planner.run();
  };
  const planQueryAndApply = async () => {
    const plan = await planQuery();
    return await planApply({ plan });
  };
  const destroyByClient = async ({
    client,
    name,
    config,
    resourcesPerType = [],
  }) => {
    assert(client);
    assert(config);

    logger.info(
      `destroyByClient: ${tos({
        type: client.spec.type,
        name,
        config,
        resourcesPerType,
      })}`
    );

    const id = client.findId(config);
    assert(id, "destroyByClient missing id");
    const result = await client.destroy({ id, name, resourcesPerType });
    await retryExpectOk({
      name: `destroy ${name}`,
      fn: () => client.isDownById({ id, name, resourcesPerType }),
      config: client.config || providerConfig,
    });

    logger.debug(
      `destroyByClient: DONE ${tos({ type: client.spec.type, name, result })}`
    );
    //TODO Double check with getByName
    return result;
  };

  const destroyById = async ({ type, config, name }) => {
    logger.debug(`destroyById: ${tos({ type, name })}`);
    const client = clientByType(type);
    if (!client) {
      throw new Error(`Cannot find endpoint type ${type}}`);
    }
    return await destroyByClient({
      client,
      name,
      config,
      resourcesPerType: provider.getMapTypeToResources().get(type),
    });
  };

  const planDestroy = async ({ plans, onStateChange = noop }) => {
    assert(plans);
    const executor = async ({ item }) => {
      return await destroyById({
        name: item.resource.name,
        type: item.resource.type,
        config: item.config,
      });
    };

    const planner = Planner({
      plans,
      specs: mapToGraph(mapNameToResource),
      executor,
      down: true,
      onStateChange,
    });

    const plannerResult = await planner.run();

    const hookResults = await runOnDestroyed();
    return {
      ...plannerResult,
      hookResults,
    };
  };

  const destroyAll = tryCatch(
    async (options) =>
      await pipe([
        tap((options) => logger.debug(`destroyAll ${tos({ options })}`)),
        async () => planFindDestroy(options, PlanDirection.DOWN),
        async (plans) => await planDestroy({ plans }),
        tap(({ success, results }) =>
          logger.debug(
            `destroyAll DONE, success: ${success}, #results ${results.length}`
          )
        ),
      ])(options),
    (error) => {
      logError("destroyAll", error);
      throw error;
    }
  );
  const isPlanEmpty = (plan) => {
    if (isEmpty(plan.newOrUpdate) && isEmpty(plan.destroy)) {
      return true;
    }
    return false;
  };

  checkEnv(mandatoryEnvs);
  checkConfig(config, mandatoryConfigKeys);

  const toType = () => type || providerName;
  const hookFilenameDefault = () => path.resolve(process.cwd(), "hooks.js");
  const getHookFactory = tryCatch(require, (error) => {
    //console.log("getHookFactory", error);
  });

  const register = ({ resources }) => {
    const hookFactory = getHookFactory(hookFilenameDefault());
    if (hookFactory) {
      const hooks = hookFactory({ resources, config: providerConfig });
      hookAdd("default", hooks);
    } else {
      // console.log("no hooks ");
    }
  };

  const provider = {
    config: () => providerConfig,
    name: providerName,
    type: toType,
    destroyAll,
    planFindDestroy,
    planQueryAndApply,
    planQuery,
    planApply,
    planDestroy,
    listLives,
    listTargets,
    listConfig,
    targetResourcesAdd,
    clientByType,
    resourceByName,
    resourceNames,
    getMapTypeToResources: () => mapTypeToResources,
    getTargetResources,
    isPlanEmpty,
    register,
    runOnDeployed,
    runOnDestroyed,
    hookAdd,
  };
  const enhanceProvider = {
    ...provider,
    ...createResourceMakers({ provider, config: providerConfig, specs }),
  };

  return enhanceProvider;
}

module.exports = CoreProvider;
