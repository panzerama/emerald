const express = require("express");
const app = express();
const port = 4000;
const morgan = require('morgan');
const cors = require('cors');

const eventsRouter = require('./routes/eventsRouter');
const postsRouter = require('./routes/postsRouter');

app.use(morgan('tiny'));
app.use(cors());

app.use('/v1/events', eventsRouter);
app.use('/v1/posts', postsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
