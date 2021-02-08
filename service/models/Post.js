const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  id: Number,
  title:  String,
  author: String,
  postedDate: { type: Date, default: Date.now },
  published: Boolean,
  summary: String,
  body: String,
  keywords: [String]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;