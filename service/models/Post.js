const mongoose, { Schema } = require('mongoose');

const postSchema = new Schema({
  title:  String,
  author: String,
  postedDate: { type: Date, default: Date.now },
  published: Boolean,
  summary: String,
  body: String,
  keywords: [String]
});

const Post = mongoose.model('Post', postSchema);

export default Post;