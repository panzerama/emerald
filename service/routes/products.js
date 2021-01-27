const express = require('express');
const productsRouter = express.Router();

router.param('productId', function(request, response, next) {
  request.productObject = {
    id: 123,
    description: "Somebody's old hat"
  };
  return next(); // to ensure we don't accidentally call next elsewhere
});

router
  .route('/products/:id')
  .all(function (request, response, next) {
    // Do something for all calls to this path
  })
  .post(function (request, response, next) {
    // for the post method
  })
  .put(function (request, response, next) {
    // for the put method
  })
  .delete(function (request, response, next) {
    // for the delete method
  });

module.exports = productsRouter;