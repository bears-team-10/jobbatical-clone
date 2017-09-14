'use strict';


// load dependencies
const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt-nodejs');



/**
 * schema that represents typical user information
 * to be collected on the 'signup' page and saved to the DB
 */
let userModel = new Schema ({
    
    local: {
        firstName: String,
        email: String,
        password: String
    },
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    twitter: {
        id: String,
        token: String, 
        displayName: String,
        username: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    }

});



/**
 * methods 
 */ 
// generate a hash
userModel.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(12), null);
}


// check if password is valid
userModel.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.local.password);
}



module.exports = mongoose.model('User', userModel);