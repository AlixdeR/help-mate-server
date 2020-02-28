var express = require('express');
var router = express.Router();
const userModel = require("../models/User");
const adModel = require("../models/Ad");
const commentModel = require("../models/Comment");


router.get('/', (req, res, next) => {
    commentModel
      .find()
      .then(comments => {
        res.status(200).json(comments);
      })
      .catch(next);
  });

  router.get('/:id', (req, res, next) => {
    commentModel
    .findById(req.params.id)
    .then(user => {
      res.status(200).json(comments);
    })
    .catch(next);
  })

  router.post("/:user_id'", uploader.single("image"), (req, res, next) => {
    const {author, recipient, text, date, response} = req.body;
    const newComment = {
        author,
        recipient,
        text,
        date,
        response
    }
    if (req.files) newComment.image = req.file.secure_url;
    commentModel
      .create(newComment)
      .then(createdComment =>
      .then(comment => {
        res.status(200).json(createdComment);
      })
      .catch(next);
  });

  router.patch("/:id", (req, res, next) => {
    commentModel
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(comment => {
        res.status(200).json(comment);
      })
      .catch(next);
  });

  router.delete("/:id", (req, res, next) => {
    commentModel
      .findByIdAndDelete(req.params.id)
      .then(deletedComment => {
        res.status(200).json(deletedComment);
      })
      .catch(next);
  });
  
  
  module.exports = router;



