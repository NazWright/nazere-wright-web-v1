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
      // check if req.body.id is existing
      // add a entry into the project rating table
      // update the entry in the projects table
      console.log("hit");
      try {
        if (req.body.id) {
          const createProjectRating = await ProjectRating.create({
            projectId: req.body.id,
            rating: req.body.rating,
            additonalNotes: req.body.additionalNotes,
          });
          if (createProjectRating) {
            return res.status(200).send(createProjectRating);
          }
          throw new Error("Rating could not be sumbitted. Please try again.");
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
