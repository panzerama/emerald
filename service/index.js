const express = require("express");
const app = express();
const port = 4000;
const morgan = require('morgan');
const cors = require('cors');

// Setting up mongoose connection
// Example code from https://mzl.la/39Ngmr4
var mongoose = require('mongoose');
var mongoDB = 'insert_your_database_url_here';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Retain an instance of the connection so that we can log errors
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('close', () => { console.log("MongoDB connection closed") });

const eventsRouter = require('./routes/eventsRouter');
const postsRouter = require('./routes/postsRouter');

app.use(morgan('tiny'));
app.use(cors());

app.use('/v1/events', eventsRouter);
app.use('/v1/posts', postsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
