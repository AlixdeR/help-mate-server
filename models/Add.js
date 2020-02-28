const mongoose = require("mongoose"); // import mongoose dependencie

const Schema = mongoose.Schema;

const addSchema = new Schema ({
    title: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    recipient: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    category: {
        type: String,
        enum: []
    },
    description: String,
    addType: {
        type: String,
        enum: ["service", "demande"]
    },
    adress: {
        street: String,
        zipCode: Number,
        city: String
    },
    image: String,
    date: {
        type : Date,
        default: Date.now
    },
    avaibility: String,
    active: {
        type : Boolean,
        default: true
    }
})

const addModel = mongoose.model("Add", addSchema);

module.exports = addModel;