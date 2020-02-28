var express = require('express');
var router = express.Router();
var adModel = require('../models/Ad')
var userModel = require('../models/User')
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


router.post('/', async (req, res, next) => {

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
    // return res.send("ok")
    console.log("so far...");

    // if (req.files) newAd.image = req.file.secure_url;
    try {
        console.log("inna try...");
        const x = await adModel.create({
            "title": "test gui",
            "category": "Visites de courtoisie",
            "description": "test gui",
            "availability": "test gui",
            "adType": "service",
            "address": {"street": "14 RUE DE L ORILLON", "zipCode": "75011", "city": "PARIS"}
        })
        console.log(x);
        console.log("... so good");
        res.status(200).json({
            msg: "ok"
        })
    } catch (e) {
        console.log("et c'est le drame");

        console.log(e);

        next(e)
    }

});

// uploader.single("image")
// .then( createdAd => 
//     userModel.findByIdAndUpdate(req.params.user_id, {$push : {ad : createdAd.id}})
// )
// .catch (next)

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