const pkg = require("./package.json");
module.exports = () => ({
  projectName: pkg.name,
  credentials: { profile: "oregon" },
});
