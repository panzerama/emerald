const dateFns = require('date-fns');
const debug = require('debug')('api');

const Event = require('../models/Event');

exports.createEvent = (req, res, next) => {
  const {
    date,
    time,
    timeZone,
    keywords,
  } = req.body;
  const dateTime = `${date} ${time} ${timeZone}`;
  debug(`Date time string ${dateTime}`);
  const eventDate = dateFns.parse(
    dateTime,
    'yyyy-MM-dd HH:mm XX',
    new Date(),
  );

  debug(`Event Date ${eventDate}`);

  if (!dateFns.isFuture(eventDate)) {
    res.status(400);
    res.send({ error: 'Event date must be in the future' });
  }

  let keywordArr = [];
  if (typeof (keywords) === 'string') {
    keywordArr = keywords.split(',');
  }

  const event = {
    eventName: req.body.eventName,
    gameMaster: req.body.gameMaster,
    date: eventDate,
    location: req.body.location,
    description: req.body.description,
    keywords: keywordArr,
  };

  Event.create(event)
    .then((newEvent) => {
      res.send({ eventId: newEvent._id });
    })
    .catch((err) => {
      next(err);
    });
};
