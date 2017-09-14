'use strict';


/**
 * schema that represents typical job information
 * to be collected on the 'job-form' page and saved to the DB
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


let jobModel = new Schema({
    jobTitle: { type: String },
    companyName: { type: String },
    location: { type: String },
    salary: { type: Number },
    date: { type: Date },
    companyDescription: { type: String }, 
    jobDescription: { type: String }, 
    responsibilities: { type: String },
    requirements: { type: String }
});


module.exports = mongoose.model('Job', jobModel);