var express = require("express");
var router = express.Router();
const userModel = require("../models/User");
const messageModel = require("../models/Message");

router.get("/all/:my_id", (req, res, next) => {
    messageModel.find({ $or : [{to : req.params.my_id}, {from : req.params.my_id}]}).populate('from').populate('to')
      .then(messages => res.status(201).json(messages)
      ).catch(dbErr => console.log(dbErr))
  });

router.get("/:to_id", (req, res, next) => {
  messageModel.find({ $or : [{to : req.params.to_id, from : req.user._id},{to : req.user._id, from : req.params.to_id}]})
    .then(messages => res.status(201).json(messages)
    ).catch(dbErr => console.log(dbErr))
});

router.post("/:to_id", (req, res, next) => {
    console.log('to_id', req.params.to_id)
    console.log('from_id', req.user._id)
const newMessage = {
    from : req.user._id,
    to : req.params.to_id,
    text: req.body.text
}
  messageModel
    .create(newMessage)
    .then(createdMessage => res.status(201).json(createdMessage)
    ).catch(dbErr => console.log(dbErr))

});


module.exports = router;
