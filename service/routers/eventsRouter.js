const express = require('express');
const eventsRouter = express.Router();

const { upcomingEvents } = require('../data/mockEvents');

eventsRouter
  .route('/')
  .get((req, res) => {
    res.send(upcomingEvents);
  });

eventsRouter.route('/:id')
.get((req, res) => {
  if (req.params.id < upcomingEvents.length) {
    res.send(upcomingEvents[req.params.id]);
  } else {
    res.sendStatus(404);
  }
})

module.exports = eventsRouter;