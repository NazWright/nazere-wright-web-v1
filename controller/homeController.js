const homeService = require("../services/homeService");

/**
 * homeController
 * Handles CRUD updates for the home page.
 */

const homeController = {
  async getServices(req, res) {
    try {
      const skillsResponse = await homeService.getServices();
      return res.status(200).send(JSON.stringify(skillsResponse));
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = homeController;
