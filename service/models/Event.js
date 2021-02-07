const mongoose, { Schema } = require('mongoose');

const eventSchema = new Schema({
  eventName:  String,
  gameMaster: String,
  date: { type: Date, default: Date.now },
  ticketsAvailable: Boolean,
  location: String,
  description: String,
  keywords: [String]
});

const Event = mongoose.model('Event', eventSchema);

export default Event;