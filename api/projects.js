// CRUD routes for projects
const mongoose = require("mongoose");
const projectController = require("../controller/projectController")(mongoose);

module.exports = (app) => {
  app.post(
    "/api/projects",

    projectController.createProject
  );

  app.get("/api/projects", projectController.getAllProjects);

  app.put("/api/projects", projectController.updateProject);

  app.delete("/api/projects", projectController.deleteProject);
};
