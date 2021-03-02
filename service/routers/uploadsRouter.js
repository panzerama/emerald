const express = require('express');
const multer = require('multer');
const upload = multer({ dest: '../resources/uploads' });
const uploadsRouter = express.Router();

uploadsRouter.route('/')
  .post(upload.single('featImage'), (req, res, next) => {
    try {
      const featuredImage = req.file;
      // by this point the file has been saved or an error has occurred.
      // if req.file exists, the save was successful
      if (!featuredImage) {
        res.status(400);
        res.send({ error: 'No file selected' });
      } else {
        res.send({ message: 'Success' });
      }
    } catch (err) {
      next(err);
    }
  });

module.exports = uploadsRouter;
