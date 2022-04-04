// main file for API

module.exports = (app) => {
  exports.projects = require("./projects")(app);
  exports.contact = require("./contact")(app);
  exports.blog = require("./blog")(app);
};
