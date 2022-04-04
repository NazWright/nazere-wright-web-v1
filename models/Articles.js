const mongoose = require("mongoose");
const { Schema } = mongoose;

const ArticleSchema = new Schema({
  title: String,
  dateCreated: String,
  views: Number,
  tagline: String,
  author: String,
  content: String,
});

mongoose.model("articles", ArticleSchema);
