const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventId: Number,
  eventName:  String,
  gameMaster: String,
  date: { type: Date, default: Date.now },
  location: String,
  description: String,
  keywords: [String]
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;