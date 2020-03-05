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
        enum: ['Bricolage', 'Ménage', "Visites", 'Courses']
    },
    description: String,
    adType: {
        type: String,
        enum: ["service", "demande"]
    },
    address: {
        street: String,
        zipCode: Number,
        city: String
    },
    location : {
        type: { type: String },
        coordinates: [Number]
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
adSchema.index({location: '2dsphere'});
const adModel = mongoose.model("Ad", adSchema);

module.exports = adModel;