const projectController = (mongoose, validation) => {
  const Project = mongoose.model("projects");

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

    async updateProject(req, res) {},

    async getAllProjects(req, res) {
      const allProjects = await Project.find({});
      return res.status(200).send(allProjects);
    },
  };
};

module.exports = projectController;
