const dateFns = require("date-fns");

const Event = require("../models/Event");

exports.createEvent = (req, res, next) => {
  const date = req.body.date;
  const time = req.body.time;
  const timeZone = req.body.timeZone;
  const dateTime = date + " " + time + " " + timeZone;
  const eventDate = dateFns.parse(
    dateTime,
    "yyyy-MM-dd hh:mm aa XX",
    new Date()
  );

  if (!dateFns.isFuture(eventDate)) {
    res.sendStatus(400);
    res.send({ error: "Event date must be in the future" });
  }

  const keywords = req.body.keywords;
  const keywordArr = keywords.split(",");

  const event = {
    eventName: req.body.eventName,
    gameMaster: req.body.gameMaster,
    date: eventDate,
    location: req.body.location,
    description: req.body.description,
    keywords: keywordArr,
  };

  Event.create(event)
    .then((event) => {
      res.send({ eventId: event._id });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
