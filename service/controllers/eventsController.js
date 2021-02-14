const dateFns = require('date-fns');

const Event = require('../models/Event');

exports.createEvent = (req, res, next) => {
  const {
    date,
    time,
    timeZone,
    keywords,
  } = req.body;
  const dateTime = `${date} ${time} ${timeZone}`;
  const eventDate = dateFns.parse(
    dateTime,
    'yyyy-MM-dd hh:mm aa XX',
    new Date(),
  );

  if (!dateFns.isFuture(eventDate)) {
    res.sendStatus(400);
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
