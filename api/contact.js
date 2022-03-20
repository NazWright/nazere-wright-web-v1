const { body } = require("express-validator");

// CRUD routes for projects
const mongoose = require("mongoose");
const contactController = require("../controller/contactController")(mongoose);

module.exports = (app) => {
  app.post(
    "/api/contact",
    body("name").not().isEmpty(),
    body("email").isEmail(),
    body("reason").not().isEmpty(),
    body("phoneNumber").isMobilePhone(),
    contactController.sendMessage
  );
};
