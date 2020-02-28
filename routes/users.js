var express = require('express');
var router = express.Router();
const userModel = require("../models/User");


router.get('/', (req, res, next) => {
  userModel
    .find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  userModel
  .findById(req.params.id)
  .then(user => {
    res.status(200).json(users);
  })
  .catch(next);
})

router.post("/", (req, res, next) => {
  //cloudinary
  userModel
    .create(req.body)
    .then(createdUser => {
      res.status(200).json(createdUser);
    })
    .catch(next);
});

router.patch("/:id", (req, res, next) => {
  userModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(user => {
      res.status(200).json(user);
    })
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  userModel
    .findByIdAndDelete(req.params.id)
    .then(deletedUser => {
      res.status(200).json(deletedUser);
    })
    .catch(next);
});


module.exports = router;
