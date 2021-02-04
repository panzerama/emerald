const express = require('express');
const eventsRouter = express.Router();

const { upcomingEvents } = require('../data/mockEvents');

eventsRouter
  .route('/')
  .get((req, res) => {
    res.send(upcomingEvents);
  });

module.exports = eventsRouter;