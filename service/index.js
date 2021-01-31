const express = require("express");
const app = express();
const port = 4000;

const eventsRouter = require('./routes/eventsRouter');
const morgan = require('morgan');

app.use(morgan('tiny'));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/v1/events', eventsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
