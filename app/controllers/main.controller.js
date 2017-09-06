'use strict';


require('dotenv').config();


const Job = require('../models/jobModel'),
    User = require('../models/userModel'),
    jwt = require('jsonwebtoken');


module.exports = {
    showHome: showHome,

    showExplore: showExplore,

    showSignUp: showSignUp,

    showLogin: showLogin,

    registerNewUser: registerNewUser,

    authenticateUser: authenticateUser,
    
    verifyToken: verifyToken,

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
    res.render('pages/sign-up');
}


function showLogin(req, res){
    res.render('pages/login');
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



function verifyToken(req, res, next){

    // check header or url parameters or post parameters for token
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    
        // decode token
        if (token){
            
            // verifies secret and checks expiration
            jwt.verify(token, process.env.secret, (err, decoded) => {
                if (err){
                    return res.json({ success: false, message: 'Failed to authenticate token'});
                } else {
                    // if everything is good, save request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });
        
        } else {
            
            // if there is no token
            // return an error
            return res.status(403).send({ success: false, message: 'No token provided.' });
        
        }

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
