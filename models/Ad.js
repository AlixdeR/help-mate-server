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
        enum: ['Bricolage', 'Ménage', "Visites de courtoisie", 'Courses']
    },
    description: String,
    adType: {
        type: String,
        enum: ["service", "demande"]
    },
    address: {
        street: String,
        zipCode: String,
        city: String
    },
    image: String,
    date: {
        type : Date,
        default: Date.now
    },
    availability: String,
    active: {
        type : Boolean,
        default: true
    }
})

const adModel = mongoose.model("Ad", adSchema);

module.exports = adModel;