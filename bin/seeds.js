const userModel = require("../models/User");
const adModel = require("../models/Ad");
const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/helpmate', {
        useNewUrlParser: true
    })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

const users = [
    {
        name: "Xe",
        lastName: "Yolo",
        email: "xe@yolo.com",
        comments: [],
        ads: [],
        password: "yolo",
        phone: 666,
        rates: [],
        description: "yopjporejnblqkg",
        status: "particulier",
        role: "admin"
    }
];

const ads =[
    {
        "title": "test gui",
        "category": "Visites de courtoisie",
        "description": "test gui",
        "availability": "test gui",
        "adType": "service",
        "address": {"street": "14 RUE DE L ORILLON", "zipCode": "75011", "city": "PARIS"}
    }
]



adModel
    .insertMany(ads)
    .then(dbSuccess => {
        console.log("ads inserted successfully", dbSuccess)
    })
    .catch(dbErr => {
        console.log(dbErr)
    });

// userModel
//     .insertMany(users)
//     .then(dbSuccess => {
//         console.log("users inserted successfully", dbSuccess)
//     })
//     .catch(dbErr => {
//         console.log("oh no, error connecting to mongo", dbErr)
//     });

module.exports = users;