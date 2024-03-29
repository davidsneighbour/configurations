const deepmerge = require("deepmerge");
const path = require("path");

function loadConfig(filename) {
  // console.log("reading config file %s", filename);
  const configJson = require(filename);
  if (configJson.extends) {
    const baseConfigFilename = configJson.extends.startsWith(".")
      ? path.join(path.dirname(filename), configJson.extends)
      : require.resolve(configJson.extends);
    // console.log("config file extends %s", baseConfigFilename);
    const baseConfig = loadConfig(baseConfigFilename);
    // console.log("merging %s with %s", baseConfigFilename, filename);
    return deepmerge(baseConfig, configJson);
  }
  // console.log("config file %s does not extend", filename);
  // console.log(configJson);
  return configJson;
}

module.exports = loadConfig;
