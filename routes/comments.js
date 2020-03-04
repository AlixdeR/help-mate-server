var express = require("express");
var router = express.Router();
const userModel = require("../models/User");
const commentModel = require("../models/Comment");

// router.get('/', (req, res, next) => {
//   commentModel
//     .find()
//     .then(comments => {
//       res.status(200).json(comments);
//     })
//     .catch(next);
// });

// router.get("/:userId", (req, res, next) => {
//   userModel
//   .findById(req.params.userId) // fetch all user
//     .populate("comments")
//     .then(user => {
//       res.status(200).json(user);
//     })
//     .catch(next);
// });

router.post("/:userId", (req, res, next) => {
  const { currentResponseId, text, rate } = req.body;
  const newComment = {
    text,
  };

  if (currentResponseId) {
    newComment.response= currentResponseId;
  }

  commentModel
    .create(newComment)
    .then(createdComment => {
      userModel
        .findByIdAndUpdate(
          req.params.userId,
          {
            $push: { comments: createdComment._id, rates: rate }
          },
          { new: true }
        )
        .then(updatedUser => {
          console.log(updatedUser);
          res.send("Ok");
        })
      }
    ).catch(dbErr => console.log(dbErr))
    
  // .then(userModel.create(newRate) => res.status(200).json(comment)).catch(next);
});

// router.patch("/:id", (req, res, next) => {
//   commentModel
//     .findByIdAndUpdate(req.params.id, req.body, { new: true })
//     .then(comment => {
//       res.status(200).json(comment);
//     })
//     .catch(next);
// });

// router.delete("/:id", (req, res, next) => {
//   commentModel
//     .findByIdAndDelete(req.params.id)
//     .then(deletedComment =>
//       userModel
//         .findByIdAndUpdate(deletedComment.author, {
//           $pull: { "clsonfiguration.links": deletedComment.id }
//         })
//         .then(user => res.status(200).json(user))
//         .catch(next)
//     )
//     .catch(next);
// });

module.exports = router;
