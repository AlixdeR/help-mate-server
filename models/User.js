const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const userSchema = new Schema ({
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
    ad: [{
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
    }
})


const userModel = mongoose.model("User", userSchema);

module.exports = userModel;