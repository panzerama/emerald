const express = require('express');
const eventsRouter = express.Router();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://panzerama.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'emeraldcitygmg.com',
  issuer: 'https://panzerama.us.auth0.com/',
  algorithms: ['RS256'],
});

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
      if (err) {
        next(err);
      } else if (event) {
        res.send(event);
      } else {
        res.sendStatus(404);
      }
    });
  });

eventsRouter.use(jwtCheck);

eventsRouter.route('/:id')
  .post((req, res, next) => {
  // get token, get role
  
})

// WORKITEM - protected create event route

module.exports = eventsRouter;