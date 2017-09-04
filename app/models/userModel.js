'use strict';

// load dependencies
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let userModel = new Schema ({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

module.exports = mongoose.model('User', userModel);