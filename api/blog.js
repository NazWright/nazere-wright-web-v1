const { body } = require("express-validator");

// CRUD routes for projects
const mongoose = require("mongoose");
const blogController = require("../controller/blogController")(mongoose);

module.exports = (app) => {
  app.get("/api/blog", blogController.getArticles);
};
