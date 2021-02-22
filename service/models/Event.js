const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  readable: String,
  latitude: Number,
  longitude: Number,
});

const eventSchema = new mongoose.Schema({
  eventName: String,
  gameMaster: String,
  date: { type: Date, default: Date.now },
  location: { type: locationSchema, required: true },
  description: String,
  keywords: [String],
  image: String,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
