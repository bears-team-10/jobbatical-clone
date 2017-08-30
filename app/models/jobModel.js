'use strict';


/**
 * schema that represents typical job information
 * to be collected on the 'add-job-form'
 * and displayed on the 'explore-jobs' page
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var jobModel = new Schema({
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