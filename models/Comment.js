const mongoose = require("mongoose"); // import mongoose dependencie

const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    recipient: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    text: String,
    date: {
        type: Date,
        default: Date.now
    },
    response: [String]

})

const commentModel = mongoose.model("Comment", commentSchema);

module.exports = commentModel;