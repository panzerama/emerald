const express = require("express");
const app = express();
const port = 4000;

const productsRouter = require('./routes/products');

// a logging middleware
const logger = (req, res, next) => {
  console.log(`App received request ${req.method} - ${req.url}`);
  return next();
}

const addSomething = (req, res, next) => {
  req.newValue = "something valueable";
  // what happens when we neglect to add next()
  return next();
}

app.use(logger);
app.use(addSomething)
app.use(express.json());
// alternatively, app.use('/api/v4', [logger, addSomething, express.json()]);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Get all products
app.get('/api/v1/products', (req, res) => {
  res.sendStatus(501);
});

// Get a single product by id
app.get('/api/v1/products/:id', (req, res) => {
  res.sendStatus(501);
});

// Create a new product
app.post('/api/v1/products', (req, res) => {
  res.sendStatus(501);
});

// Update an existing product
app.put('/api/v1/products/:id', (req, res) => {
  res.sendStatus(501);
});

// Delete an existing product
app.delete('/api/v1/products/:id', (req, res) => {
  res.sendStatus(501);
});

app.use('/api/v2/products', productsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
