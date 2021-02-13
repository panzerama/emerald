const express = require('express');
const eventsRouter = express.Router();

const eventsController = require('../controllers/eventsController');

const Event = require('../models/Event');

eventsRouter.route('/')
  .get((req, res, next) => {
    Event.find({}, (err, events) => {
      if (err) { next(err) }
      else { res.send(events) }
    });
  })
  .post(eventsController.createEvent);

eventsRouter.route('/:id')
  .get((req, res, next) => {
    Event.findById(req.params.id, (err, event) => {
      if (err) { next(err) }
      else if (event) { res.send(event) }
      else { res.sendStatus(404) }
    })
  });

module.exports = eventsRouter;