// models/Farm.js
const mongoose = require('mongoose');

const farmSchema = new mongoose.Schema({
    name: String,
    location: {
        lat: Number,
        lng: Number
    },
    price: Number,
    size: Number, // in acres or square meters
    description: String
});

module.exports = mongoose.model('Farm', farmSchema);
