const express = require('express');
const eventsRouter = express.Router();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const debug = require('debug')('api');

const eventsController = require('../controllers/eventsController');

const Event = require('../models/Event');

// workitem return ordered by time
eventsRouter.route('/')
  .get((req, res, next) => {
    Event.find({}, (err, events) => {
      if (err) {
        next(err);
      } else {
        res.send(events);
      }
    });
  });

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

// This function serves as middleware and does the checking of a token's
// validity for us.
const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://panzerama.us.auth0.com/.well-known/jwks.json',
  }),
  audience: 'emeraldcitygmg.com',
  issuer: 'https://panzerama.us.auth0.com/',
  algorithms: ['RS256'],
});
eventsRouter.use(jwtCheck);

// After the JWT check middleware runs, the request object is decorated
// with user information.
eventsRouter.route('/')
  .post((req, res, next) => {
    const { permissions } = req.user;
    debug(`permissions for user ${permissions}`);
    if (permissions.includes('manage:events')) {
      next();
    } else {
      res.sendStatus(403);
    }
  }, eventsController.createEvent);

module.exports = eventsRouter;
