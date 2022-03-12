const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectRatingSchema = new Schema({
  name: String,
  rating: Number,
  additionalNotes: String,
  projectId: String,
  date: Date,
});

mongoose.model("project-ratings", ProjectRatingSchema);
