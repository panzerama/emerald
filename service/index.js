const express = require('express');
const app = express();
const port = 4000;

const debug = require('debug')('api');
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const eventsRouter = require('./routers/eventsRouter');
const postsRouter = require('./routers/postsRouter');
const usersRouter = require('./routers/usersRouter');

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const mongoDB = `mongodb+srv://${user}:${password}@cluster0.49ssl.mongodb.net/emerald?retryWrites=true&w=majority`;
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => { debug('Connected successfully'); },
    (err) => { debug(`Connection failed with ${err}`); },
  );

// Retain an instance of the connection so that we can log errors
const db = mongoose.connection;
db.on('error', () => debug('MongoDB connection error:'));
db.on('close', () => { debug('MongoDB connection closed'); });

// Middleware

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(helmet());

// Routers

app.use('/v1/events', eventsRouter);
app.use('/v1/posts', postsRouter);
app.use('/v1/users', usersRouter);

app.listen(port, () => {
  debug(`Example app listening at http://localhost:${port}`);
});
