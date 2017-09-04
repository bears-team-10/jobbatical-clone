'use strict';

const Job = require('../models/jobModel'),
    User = require('../models/userModel');


module.exports = {
    showHome: (req, res) => {
        Job.find( {} ).sort( {_id: -1} ).limit(6).exec( (err, featuredJobs) => {
            if (err){
                console.error(err);
            } else if(!featuredJobs){
                res.json('jobs not found');
               // res.json(featuredJobs);
            } else {
                res.render('pages/home', { featuredJobs: featuredJobs });
            }
        });
    },

    showJobForm: (req, res) => {
        res.render('pages/job-add-form');
    },

    addNewJob: (req, res) => {
        let job = new Job(req.body);
        job.save((err, doc) => {
            if (err) console.error(err);
            if (!doc){ res.send('job not added'); }
            else { res.status(201).send('job added!'); }
        });
    },

    showExplore: (req, res) => {
        Job.find((err, jobs) => {
            if (err) {
            console.error(err);
            } else {
                res.json(jobs);
            }
        });
    },

    registerNewUser: (req, res) => {
        let user = new User(req.body);

        // hash password then save
        // user.password = 
        
        user.save();
        res.send('new user registered');
    }
}

