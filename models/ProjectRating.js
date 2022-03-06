const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectRatingSchema = new Schema({
  name: String,
  rating: Number,
  additionalNotes: String,
  projectId: String,
});

mongoose.model("project-ratings", ProjectRatingSchema);
