const mongoose = require("mongoose"); // import mongoose dependencie

const Schema = mongoose.Schema;

const adSchema = new Schema ({
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
        enum: ['Bricolage', 'Ménage', 'Visites de courtoisie', 'Courses']
    },
    description: String,
    adType: {
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

const adModel = mongoose.model("Ad", adSchema);

module.exports = adModel;