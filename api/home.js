const homeController = require("../controller/homeController");

module.exports = (app) => {
  app.get("/api/services", async (req, res) => {
    await homeController.getServices(req, res);
  });
};
