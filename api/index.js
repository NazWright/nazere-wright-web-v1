// main file for API

module.exports = (app) => {
  exports.projects = require("./projects")(app);
};
