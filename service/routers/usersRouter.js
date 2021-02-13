const express = require('express');
const usersRouter = express.Router();

const User = require('../models/User');

// DELETE /v1/users?email=jane@eatwor.ld

usersRouter.route("/")
  .get((req, res, next) => {
    User.find({}, (err, users) => {
      if (err) { next(err) }
      res.send(users);
    })
  })
  .post((req, res, next) => {
    User.create(req.body, (err, newUser) => {
      if (err) { next(err) }
      res.status(200);
      res.send(newUser);
    })
  })
  .delete((req, res, next) => {
    const email = req.query.email;
    if (!email) {
      res.status(400);
      res.send({ error: "must provide an email" });
    }
    User.findOneAndDelete({ email: email }, (err, user) => {
      if (err) { next(err) }
      else if (user) {
        res.status(200);
        res.send(user);
      } else {
        res.status(404);
        res.send({ error: `Couldn't find user with email ${email}` });
      }
    })
  })

usersRouter.route('/:id')
  .get((req, res, next) => {
    User.findById(req.params.id, (err, user) => {
      if (err) { next(err) }
      else if (user) {
        res.send(user);
      } else {
        res.status(404);
        res.send({ error: `Couldn't find user with id ${req.params.id}` });
      }
    })
  })
  .put((req, res, next) => {
    console.log('request body ', req.body);
    User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
      if (err) { next(err) }
      else if (user) {
        User.findById(req.params.id, (err, user) => { res.send(user) });
      } else {
        res.status(404);
        res.send({ error: `Couldn't find user with id ${req.params.id}` });
      }
    })
  })
  .delete((req, res, next) => {
    User.findByIdAndDelete(req.params.id, (err, user) => {
      if (err) { next(err) }
      else if (user) {
        res.sendStatus(204);
      } else {
        res.status(404);
        res.send({ error: `Couldn't find user with id ${req.params.id}` });
      }
    })
  });

module.exports = usersRouter;