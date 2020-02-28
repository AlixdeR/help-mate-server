var express = require('express');
var router = express.Router();
var addModel = require('../models/Add')
var userModel = require('../models/User')
const uploader = require("./../config/cloudinary");

/* GET users listing. */
router.get('/', function(req, res, next) {
    addModel.find()
    .then(adds => res.status(200).json(adds))
    .catch(next)
});
router.get('/:id', function(req, res, next) {
    addModel.findById(req.params.id)
    .then(add => res.status(200).json(add))
    .catch(next)
});


router.post('/:user_id',uploader.single("image"), function(req, res, next) {
    const {title, author, category, description, addType, address} = req.body;
    const newAdd = {
        title,
        author,
        category,
        description,
        addType,
        address
    }
    if (req.files) newAdd.image = req.file.secure_url;
    addModel.create(newAdd)
    .then( createdAdd => 
        userModel.findByIdAndUpdate(req.params.user_id, {$push : {add : createdAdd.id}})
    .then(user => res.status(201).json(user))
    .catch(next)
    )
    .catch (next)
});

router.patch('/:id', function(req, res, next) {
    addModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then( updatedAdd => res.status(201).json(updatedAdd))
    .catch (next)
});

router.delete('/:id', function(req, res, next) {
    addModel.findByIdAndDelete(req.params.id)
    .then( deletedAdd =>
        userModel.findByIdAndUpdate(deletedAdd.author, {$pull: { "configuration.links": deletedAdd.id} })
        .then(user => res.status(200).json(user))
        .catch(next))
    .catch (next)
});

module.exports = router;
