const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectsSchema = new Schema({
  name: String,
  rating: Number,
  description: String,
  gitHubURL: String,
  websiteURL: String,
  image: String,
});

mongoose.model("projects", ProjectsSchema);
