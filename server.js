'use strict';

// setup
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Job = require('./models/jobModel');
const config = require('./config.js');
const port = process.env.PORT || 8080;

// routing
app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.get('/all-jobs', (req, res) => {
    Job.find((err, jobs) => {
        if (err) {
        console.error(err);
        } else {
            res.json(jobs);
        }
    });
});

app.post('/add-job', (req, res) => {
    let job = new Job(req.body);
    job.save();
    res.sendStatus(201).send('job added!');
});


// connect to database
const mLab = 'mongodb://' + config.db.user + ':' + config.db.password + config.db.host + config.db.name;
const db = mongoose.connect(mLab);


// start server
app.listen(port, () => {
    console.log('Magic happens on port ', port);
});