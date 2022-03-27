const assert = require("assert");
const {
  pipe,
  tap,
  get,
  eq,
  switchCase,
  not,
  assign,
  map,
  fork,
  filter,
  tryCatch,
  any,
  or,
  omit,
} = require("rubico");
const Axios = require("axios");
const { pluck, when, callProp, isEmpty, isObject } = require("rubico/x");
const mime = require("mime-types");

const path = require("path");
const Fs = require("fs");
const fs = require("fs").promises;

const ignoreResourceWithTags = [
  /*"aws:cloudformation", "aws-cdk"*/
];

const ignoredTags = [
  "aws",
  "alpha.eksctl.io",
  "eksctl.cluster.k8s.io",
  "eks",
  "AmazonECSManaged",
];

const { removeOurTags } = require("@grucloud/core/Common");

const {
  generatorMain,
  readModel,
  readMapping,
  createWritersSpec,
} = require("@grucloud/core/generatorUtils");
const { configTpl } = require("./configTpl");
const { isString } = require("util");

const bucketFileNameFromLive = ({ live: { Name }, commandOptions }) =>
  `s3/${Name}/`;

const bucketFileNameFullFromLive = ({ live, commandOptions, programOptions }) =>
  path.resolve(
    programOptions.workingDirectory,
    bucketFileNameFromLive({ live, commandOptions })
  );

const objectFileNameFromLive = ({
  live: { Bucket, Key, ContentType },
  commandOptions,
}) => `s3/${Bucket}/${Key}.${mime.extension(ContentType)}`;

const objectFileNameFullFromLive = ({ live, commandOptions, programOptions }) =>
  path.resolve(
    programOptions.workingDirectory,
    objectFileNameFromLive({ live, commandOptions })
  );

const downloadAsset = ({ url, assetPath }) =>
  pipe([
    () => path.resolve(assetPath),
    tap((params) => {
      assert(true);
    }),
    tap(pipe([path.dirname, (dir) => fs.mkdir(dir, { recursive: true })])),
    Fs.createWriteStream,
    (writer) =>
      tryCatch(
        pipe([
          () =>
            Axios({
              url,
              method: "GET",
              responseType: "stream",
            }),
          get("data"),
          callProp("pipe", writer),
          () =>
            new Promise((resolve, reject) => {
              writer.on("finish", resolve);
              writer.on("error", reject);
            }),
          tap((params) => {
            assert(true);
          }),
        ]),
        (error) =>
          pipe([
            tap((params) => {
              throw Error(error.message);
            }),
          ])()
      )(),
  ])();

const downloadS3Objects = ({ lives, commandOptions, programOptions }) =>
  pipe([
    () => lives,
    filter(eq(get("groupType"), "S3::Object")),
    pluck("live"),
    tap((params) => {
      assert(true);
    }),
    filter(
      not(
        pipe([
          tap((params) => {
            assert(true);
          }),
          or([
            pipe([
              get("Bucket"),
              or([
                callProp("startsWith", "cdk-"),
                callProp("startsWith", "aws-sam"),
              ]),
            ]),
            pipe([get("Key"), or([callProp("startsWith", "AWSLogs")])]),
          ]),
        ])
      )
    ),
    map((live) =>
      pipe([
        () =>
          objectFileNameFullFromLive({ live, commandOptions, programOptions }),
        tap((objectFileName) => {
          console.log(`Downloading ${live.signedUrl} to ${objectFileName}`);
        }),
        tap((assetPath) =>
          downloadAsset({
            url: live.signedUrl,
            assetPath,
            commandOptions,
            programOptions,
          })
        ),
        tap((objectFileName) => {
          console.log(`${objectFileName} Downloaded`);
        }),
      ])()
    ),
  ])();

const createS3Buckets = ({ lives, commandOptions, programOptions }) =>
  pipe([
    () => lives,
    filter(eq(get("groupType"), "S3::Bucket")),
    map((live) =>
      pipe([
        tap(() => {
          assert(live);
        }),
        () =>
          bucketFileNameFullFromLive({ live, commandOptions, programOptions }),
        tap((params) => {
          assert(true);
        }),
        (bucketFileName) => fs.mkdir(bucketFileName, { recursive: true }),
        tap((params) => {
          assert(true);
        }),
        // (assetPath) =>
        //   downloadAsset({ url: live.signedUrl, assetPath, options }),
      ])()
    ),
  ])();

const downloadAssets = ({ specs, commandOptions, programOptions }) =>
  pipe([
    tap((params) => {
      assert(specs);
    }),
    fork({
      lives: readModel({
        writersSpec: createWritersSpec(specs),
        commandOptions,
        programOptions,
        filterModel,
      }),
      mapping: readMapping({ commandOptions, programOptions }),
    }),
    tap((params) => {
      assert(true);
    }),
    ({ lives }) =>
      pipe([
        () => createS3Buckets({ lives, commandOptions, programOptions }),
        () => downloadS3Objects({ lives, commandOptions, programOptions }),
      ])(),
  ])();

const ignoreTags = (key) =>
  pipe([
    () => ignoredTags,
    any((ingnoredTag) => key.startsWith(ingnoredTag)),
  ])();

const removeTagsArray = ({ tagsKey, key }) =>
  pipe([
    tap((params) => {
      assert(tagsKey);
      assert(key);
    }),
    when(
      pipe([get(tagsKey), Array.isArray]),
      assign({
        [tagsKey]: pipe([
          get(tagsKey),
          tap((params) => {
            assert(true);
          }),
          filter(
            not(
              or([
                (tag) =>
                  pipe([
                    () => tag,
                    tap((params) => {
                      assert(true);
                    }),
                    get(key, tag.TagKey),
                    tap((value) => {
                      // if (!value) {
                      //   assert(value);
                      // }
                    }),
                    switchCase([isEmpty, () => true, ignoreTags]),
                  ])(),
              ])
            )
          ),
          map(
            when(
              isObject,
              omit(["ResourceId", "ResourceType", "PropagateAtLaunch"])
            )
          ),
        ]),
      })
    ),
  ]);

const filterModel = pipe([
  tap((params) => {
    assert(true);
  }),
  filter(
    not(
      pipe([
        get("live.Tags"),
        any(({ Key = "" } = {}) =>
          pipe([
            () => ignoreResourceWithTags,
            any((ignoreTag) => Key.startsWith(ignoreTag)),
          ])()
        ),
      ])
    )
  ),
  map(
    assign({
      live: pipe([
        get("live"),
        removeOurTags,
        removeTagsArray({ tagsKey: "Tags", key: "Key" }),
        removeTagsArray({ tagsKey: "tags", key: "key" }),
      ]),
    })
  ),
  tap((params) => {
    assert(true);
  }),
]);

exports.generateCode = ({
  specs,
  providerConfig,
  commandOptions,
  programOptions,
}) =>
  tryCatch(
    pipe([
      tap(() => {
        assert(specs);
      }),
      () =>
        generatorMain({
          name: "aws2gc",
          providerType: "aws",
          specs,
          providerConfig,
          commandOptions,
          programOptions,
          configTpl,
          filterModel,
        }),
      tap((params) => {
        assert(true);
      }),
      tap.if(
        () => commandOptions.download,
        () =>
          downloadAssets({
            specs,
            commandOptions,
            programOptions,
          })
      ),
    ]),
    (error) => {
      console.error(error);
      throw error;
    }
  )();
