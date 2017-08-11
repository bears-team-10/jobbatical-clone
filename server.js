'use strict';

// setup
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Job = require('./models/jobModel');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;


// const config = require('./config.js');
// connect to database
// const mLab = 'mongodb://' + config.db.user + ':' + config.db.password + config.db.host + config.db.name;

const mLab = 'mongodb://localhost/job-listings';
const db = mongoose.connect(mLab);


// use body-parser
app.use(bodyParser.urlencoded( { extended: false } ));
app.use(bodyParser.json());

// define static file paths
app.use (express.static( __dirname + '/views'));

// routing
app.get('/', (req, res) => {
    res.sendFile('index.html');
});


// retrieve all jobs
app.get('/all-jobs', (req, res) => {
    Job.find((err, jobs) => {
        if (err) {
        console.error(err);
        } else {
            res.json(jobs);
        }
    });
});


/**
 * // featured jobs
 * app.get('/featured', (req, res) => {
    let featuredJobs = Job.find( {}, {_id: 0} ).sort( {_id: -1} ).limit(10);
    console.log(featuredJobs);
}); 
 */



app.post('/add-job', (req, res) => {
    let job = new Job(req.body);
    job.save();
    res.status(201).send('job added!');
});



// start server
app.listen(port, () => {
    console.log('Magic happens on port ', port);
});