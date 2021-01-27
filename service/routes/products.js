const express = require('express');
const productsRouter = express.Router();

const mockData = require('../data/mockData');

// app.use('/api/v1/products', productsRouter) goes in the index.js file

productsRouter.route('/')
  .get((req, res, next) => {
    res.json(mockData.productList);
  })
  .post((req, res, next) => {
    // when we encounter an error
    next("An error");
  });

productsRouter.route('/:id')
  .get((req, res, next) => {
    res.sendStatus(501);
  })
  .put((req, res, next) => {
    res.sendStatus(501);
  })
  .delete((req, res, next) => {
    res.sendStatus(501);
  });

module.exports = productsRouter;