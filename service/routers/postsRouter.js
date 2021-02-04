const express = require("express");
const postsRouter = express.Router();

const { posts } = require("../data/mockPosts");

postsRouter.route("/").get((req, res) => {
  res.json(posts);
});

module.exports = postsRouter;