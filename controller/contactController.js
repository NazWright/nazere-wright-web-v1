const mongoose = require("mongoose");
const Messages = mongoose.model("messages");
const { validationResult } = require("express-validator");

const contactController = () => {
  return {
    async sendMessage(req, res) {
      try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const { notes, reason, name, phoneNumber, email } = req.body;
        const submittedEntry = await Messages.create({
          notes,
          reason,
          name,
          phoneNumber,
          email,
        });
        if (submittedEntry) return res.status(200).send(submittedEntry);
        throw new Error("Something went wrong. Please try again.");
      } catch (error) {
        return res.status(500).send({ error: error });
      }
    },
  };
};
module.exports = contactController;
