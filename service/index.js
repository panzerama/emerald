const express = require("express");
const app = express();
const port = 4000;

require('dotenv').config({ path: '../.env' });

const morgan = require('morgan');
const cors = require('cors');

const eventsRouter = require('./routers/eventsRouter');
const postsRouter = require('./routers/postsRouter');
const usersRouter = require('./routers/usersRouter');

const mongoose = require('mongoose');

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const mongoDB = `mongodb+srv://${user}:${password}@cluster0.49ssl.mongodb.net/emerald?retryWrites=true&w=majority`;;
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => { console.log("Connected successfully") },
    (err) => { console.log(`Connection failed with ${err}`) }
  );

// Retain an instance of the connection so that we can log errors
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('close', () => { console.log("MongoDB connection closed") });

// Middleware

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json())

// Routers

app.use('/v1/events', eventsRouter);
app.use('/v1/posts', postsRouter);
app.use('/v1/user', usersRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
