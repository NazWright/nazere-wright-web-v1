// CRUD routes for projects
const mongoose = require("mongoose");
const projectController = require("../controller/projectController")(mongoose);

module.exports = (app) => {
  app.post("/projects", projectController.createProject);

  app.get("/projects", projectController.getAllProjects);

  app.put("/projects", projectController.updateProject);

  app.delete("/projects", projectController.deleteProject);
};
