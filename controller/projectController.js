const mongoose = require("mongoose");

const projectController = (validation) => {
  const Project = mongoose.model("projects");
  const ProjectRating = mongoose.model("project-ratings");

  return {
    async createProject(req, res) {
      const { name, image, description, rating, gitHubURL, websiteURL } =
        req.body;
      //   validate this data somewhere here

      //   save the data
      const newProject = await Project.create(project);

      return res.status(200).send(newProject);
    },

    async getProject(req, res) {},

    async deleteProject(req, res) {},

    async updateProject(req, res) {
      try {
        if (req.body.projectId) {
          const createProjectRating = await ProjectRating.create({
            projectId: req.body.projectId,
            rating: req.body.rating,
            additionalNotes: req.body.additionalNotes,
            name: req.body.name,
            date: Date.now(),
          });
          return res.status(200).send(createProjectRating);
        }
      } catch (error) {
        return res.status(500).send({ error: error });
      }
    },

    async getAllProjects(req, res) {
      const allProjects = await Project.find({});
      return res.status(200).send(allProjects || {});
    },
  };
};

module.exports = projectController;
