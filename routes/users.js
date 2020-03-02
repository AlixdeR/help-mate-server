var express = require('express');
var router = express.Router();
const userModel = require("../models/User");
const adModel = require("../models/Ad");
const commentModel = require("../models/Comment");
const uploader = require("./../config/cloudinary");

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
    .findById(req.params.id).populate('ads')
    .then(user => {
      res.status(200).json(user);
    })
    .catch(next);
})


router.patch("/:id", uploader.single("avatar"),(req, res, next) => {
  const newUser = {...req.body};
  if (req.file) newUser.avatar = req.file.secure_url
  userModel
    .findByIdAndUpdate(req.params.id, newUser, { new: true })
    .then(user => {
      res.status(200).json(user);
    })
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  const deleteUser = userModel.findByIdAndDelete(req.params.id)
  const deleteAds = adModel.deleteMany({ author: req.param.id })
  const deleteComments = commentModel.deleteMany({ author: req.param.id })

  Promise.all([deleteUser, deleteAds, deleteComments])
    .then(dbRes => res.status(200).json(dbRes))
    .catch(next);
});


module.exports = router;
