'use strict';


require('dotenv').config();


const Job = require('../models/jobModel'),
    User = require('../models/userModel'),
    jwt = require('jsonwebtoken');


module.exports = {
    showHome: showHome,

    showExplore: showExplore,

    showJobForm: showJobForm,

    showSignUp: showSignUp,

    showLogin: showLogin,

    addNewJob: addNewJob,

    registerNewUser: registerNewUser,

    authenticateUser: authenticateUser
    
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
    res.render('pages/sign-up');
}


function showLogin(req, res){
    res.render('pages/login');
}


function showJobForm(req, res){
     res.render('pages/job-add-form');
}



function addNewJob(req, res){
    let job = new Job(req.body);
    job.save((err, doc) => {
        if (err) console.error(err);
        if (!doc){ res.send('job not added'); }
        else { res.status(201).send('job added!'); }
    });
}



function registerNewUser(req, res){
        let user = new User(req.body);
        
        // validate form: www.validate.js
        

        // check if email exists
        User.findOne({
            email: req.body.email
        }, (err, userEmail) => {
            if (err) throw err;
            if (userEmail){
                // email exists; registration failed
                res.send('email exists, please use another email address to register.');
            } 
            else {
                // email not in database, proceed to register user
                
                // hash password then save
                // user.password = 

                  /*
                bcrypt.hash(user.password, 10, (err, hash) => {
                    if(err){
                        console.error(err)
                    } else {
                        res.json({hash: hash});
                    } 
                })
                */


                // generate token
                let token = jwt.sign(user, process.env.secret, {
                    expiresIn: '24h'
                }); 
              
                
                user.save( err => {
                    if (err) console.error(err); 
                    else {
                        res.json({message: "user registered", token: token});
                    }
                });
                
            }
        });

}


function authenticateUser(req, res){
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err) console.error(err);
        if (!user) {
            res.send('email not found');
        }
        else {
            // email found

            // check if password matches 
            if (req.body.password != user.password){
                // password does not match
                res.send('password does not match')
            } else {
                // password matches

                // generate token
                let token = jwt.sign(user, process.env.secret, {
                    expiresIn: '24h'
                });
                // persist token 

                res.render('pages/job-add-form', { user: user });
            }
        }
    })
}
