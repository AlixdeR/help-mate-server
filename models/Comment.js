const mongoose = require("mongoose"); // import mongoose dependencie

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  recipient: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  isResponse: Boolean,
  text: String,
  date: { type: Date, default: new Date() },
  response: [{
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }]
});

const commentModel = mongoose.model("Comment", commentSchema);

module.exports = commentModel;
