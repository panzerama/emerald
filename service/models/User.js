const mongoose = require('mongoose');

// eslint-disable-next-line no-useless-escape
const EMAIL_VALIDATOR = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [EMAIL_VALIDATOR, 'Must be a valid email'],
  },
  userType: {
    type: String,
    enum: ['admin', 'user'],
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
