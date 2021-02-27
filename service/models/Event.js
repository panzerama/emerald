const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  readable: String,
  latitude: Number,
  longitude: Number,
});

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  gameMaster: { type: String, required: true },
  date: { type: Date, required: true },
  locationType: {
    type: String,
    enum: ['online', 'venue'],
    required: true,
  },
  location: locationSchema,
  description: { type: String, required: true },
  keywords: [String],
  image: String,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
