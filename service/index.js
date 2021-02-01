const express = require("express");
const app = express();
const port = 4000;
const morgan = require('morgan');
const cors = require('cors');

const eventsRouter = require('./routes/eventsRouter');

app.use(morgan('tiny'));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/v1/events', eventsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
