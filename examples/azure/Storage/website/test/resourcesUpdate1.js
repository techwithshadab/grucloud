// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

const createResources = ({ provider }) => {
  provider.Storage.makeBlob({
    properties: ({}) => ({
      properties: {
        contentType: "text/html",
      },
      source: "assets/index1.html",
      name: "index.html",
    }),
    dependencies: () => ({
      resourceGroup: "rg-storage-web",
      container: "rg-storage-web::gcstorageweb::$web",
    }),
  });
};

exports.createResources = createResources;