const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
  name: String,
  phoneNumber: String,
  email: String,
  reason: String,
  notes: String,
});

mongoose.model("messages", messageSchema);
