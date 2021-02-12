const express = require("express");
const postsRouter = express.Router();

const Post = require('../models/Post');

postsRouter.route("/")
  .get((req, res, next) => {
    Post.find({}, (err, posts) => {
      if (err) { next(err) }
      res.send(posts);
    });
});

module.exports = postsRouter;