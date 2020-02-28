var express = require('express');
var router = express.Router();
const userModel = require("../models/User");
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

  router.post("/:user_id'", (req, res, next) => {
    const {author, recipient, text, date, response} = req.body;
    const newComment = {
        author,
        recipient,
        text,
        date,
        response
    }

    commentModel
      .create(newComment)
      .then(createdComment =>
        userModel.findByIdAndUpdate(req.params.user_id, {$push : {comment : createdComment.id}})
      .then(comment => res.status(200).json(comment))
      .catch(next)
      )
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
      .then(deletedComment => 
        userModel.findByIdAndUpdate(deletedComment.author, {$pull: { "configuration.links": deletedComment.id} })
        .then(user => res.status(200).json(user))
        .catch(next))
    .catch (next)
  });
  
  
  module.exports = router;



