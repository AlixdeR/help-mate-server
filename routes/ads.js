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


router.post('/', uploader.single("image"), (req, res, next) => {
    console.log(req.body)
    const {
        title,
        category,
        description,
        adType,
        availability,
        lat,
        lng
    } = req.body;

    const newAd = {
        availability,
        title,
        category,
        description,
        adType,
    }
    newAd.address = {
        street: req.body.street,
        zipCode: req.body.zipCode,
        city: req.body.city
    }
    newAd.author = req.user._id
    let location = {
        type: 'Point',
        coordinates: [lng, lat]
      };
      newAd.location = location;
    if (req.file) newAd.image = req.file.secure_url;
    adModel.create(newAd)
        .then(newAdInDB =>
            userModel.findByIdAndUpdate(req.user._id, {
                $push: {
                    ads: newAdInDB.id
                }
            })
            .then(dbRes => {
                console.log(dbRes);
                res.status(200).json('ad created')
            })
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
    console.log(req.params.id)
    adModel.findByIdAndDelete(req.params.id)
        .then(deletedAd =>
            userModel.findByIdAndUpdate(deletedAd.author, {
                $pull: {
                    // "configuration.links": deletedAd.id
                    ads: deletedAd.id
                }
            }, {
                new: true
            })
            .then(user => res.status(200).json(user))
            .catch(next))
        .catch(next)
});

module.exports = router;