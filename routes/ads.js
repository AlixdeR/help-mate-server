var express = require('express');
var router = new express.Router();
var adModel = require('../models/Ad');
var userModel = require('../models/User');
const uploader = require("../config/cloudinary");

/* GET users listing. */
router.get('/', function (req, res, next) {
    adModel.find()
        .then(ads => res.status(200).json(ads))
        .catch(next)
});

router.get('/:id', function (req, res, next) {
    adModel.findById(req.params.id)
        .then(ad => res.status(200).json(ad))
        .catch(next)
});


router.post('/', uploader.single("avatar"), (req, res, next) => {
console.log(req.body)
    const {
        title,
        category,
        description,
        adType,
        address,
        availability
    } = req.body;

    const newAd = {
        availability,
        title,
        category,
        description,
        adType,
        address
    }
    newAd.author = req.user._id
    if (req.files) newAd.avatar = req.file.secure_url;
    adModel.create(newAd)
        .then(newAdInDB=> 
            userModel.findByIdAndUpdate(req.user._id, {$push : {ads : newAdInDB.id}})
            .then(dbRes => {console.log(dbRes);
                res.status(200).json('ad created')})
            .catch(next)
            )
        .catch(next)
});

router.patch('/:id', function (req, res, next) {
    adModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .then(updatedAd => res.status(201).json(updatedAd))
        .catch(next)
});

router.delete('/:id', function (req, res, next) {
    adModel.findByIdAndDelete(req.params.id)
        .then(deletedAd =>
            userModel.findByIdAndUpdate(deletedAdd.author, {
                $pull: {
                    "configuration.links": deletedAd.id
                }
            })
            .then(user => res.status(200).json(user))
            .catch(next))
        .catch(next)
});

module.exports = router;