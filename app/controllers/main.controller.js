'use strict';


require('dotenv').config();


const Job = require('../models/jobModel'),
    User = require('../models/userModel'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;



module.exports = {
    showHome: showHome,

    showExplore: showExplore,

    showSignUp: showSignUp,

    showLogin: showLogin,

    showJobForm: showJobForm,
    
    addNewJob: addNewJob

}



function showHome(req, res) {
    Job.find( {} ).sort( {_id: -1} ).limit(6).exec( (err, featuredJobs) => {
        if (err){
            console.error(err);
        } else if(!featuredJobs){
            res.json('jobs not found');
        } else {
            res.render('pages/home', { featuredJobs: featuredJobs });
        }
    });
}



function showExplore(req, res){
    Job.find((err, jobs) => {
        if (err) {
        console.error(err);
        } else {
            res.json(jobs);
        }
    });
}


function showSignUp(req, res){
    res.render('pages/signup', { message: req.flash('signupMessage') });
}


function showLogin(req, res){
    res.render('pages/login', { message: req.flash('loginMessage') });
}


function showJobForm(req, res){
    res.render('pages/job-add-form', {
        user: req.user 
    });
}



function addNewJob(req, res){
    let job = new Job(req.body);
    job.save((err, doc) => {
        if (err) console.error(err);
        if (!doc){ res.send('job not added'); }
        else { res.status(201).send('job added!'); }
    });
}
