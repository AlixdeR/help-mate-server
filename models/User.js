const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: String,
    name: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
        validate: {
            validator: function(v) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
            }
        }
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
    avatar: String,
    ads: [{
        type: Schema.Types.ObjectId,
        ref: "Ad"
    }],
    password: String,
    phone: String,
    rates: [Number],
    description: String,
    status: {
        type: String,
        enum: ["particulier", "association", "entreprise"]
    },
    gender : {
        type: String,
        enum : ['homme', 'femme', 'autre']
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
})


const userModel = mongoose.model("User", userSchema);

module.exports = userModel;