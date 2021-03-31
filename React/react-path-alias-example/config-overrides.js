const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@services": "./src/utils/services",
    "@styles": "./src/utils/styles",
    "@icons": "./src/assets/icons",
  })(config);

  return config;
};
