const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const objectThing = {
    key1: 'value',
    key2: 'other value'
  }

  res.json(objectThing);
});

// Content-Type: 'application/json'

const jsonString = "{ key1: 'value', key2: 'other value'}"

// app.get("/users")..

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
