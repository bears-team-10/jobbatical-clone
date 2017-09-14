'use strict';


const Job = require('../models/jobModel'),
    photos = ['photo1.jpeg', 'photo2.jpeg', 'photo3.jpeg', 'photo4.jpeg', 'photo2.jpeg', 'photo1.jpeg'];


module.exports = {
    showHome: showHome,

    showExplore: showExplore,

    showSignUp: showSignUp,

    showLogin: showLogin

}


/**
 * display the home page 
 */
function showHome(req, res) {
    
    Job.find( {} ) // find documents in Job collection
    .sort( {_id: -1} ) // sort according to the most recent
    .limit(6) // limit results to 6 documents
    .exec( (err, featuredJobs) => {  // execute callback
        if (err){
            console.error(err);
        } else if(!featuredJobs){
            res.send('error! Unable to retrieve jobs from database');
        } else {
            // if user first name exists set to user; if not set as empty string
            let user = req.user ? req.user.local.firstName : '';  // req.user exists only when user is logged in            

            res.render('pages/home', { 
                user: user,
                featuredJobs: featuredJobs,
                photos: photos
            });
        }
    });
    
}



function showExplore(req, res){
    Job.find( {} ) // find documents in Job collection
    .sort( {_id: -1} ) // sort according to the most recent
    .limit(15) // limit results to 15 documents
    .exec( (err, jobs) => {  // execute callback
        
        if (err) {
        console.error(err);
        } 
        if (!jobs){
            res.send("can't display jobs at the moment");
        }         
        else {
            // if user first name exists set to user; if not set as empty string
            let user = req.user ? req.user.local.firstName : '';  // req.user exists only when user is logged in
            
            res.render('pages/explore-jobs', {
                user: user,
                jobs: jobs,
                photos: photos
            });
        }

    });
}


/**
 * display signup page 
 */
function showSignUp(req, res){
    // since user is not logged in, set user to empty
    let user = '';
    
    res.render('pages/signup', { 
        user: user,
        message: req.flash('signupMessage')
    });
}



/**
 * display login page
 */ 
function showLogin(req, res){
    // since user is not logged in, set user to empty
    let user = '';

    res.render('pages/login', { 
        user: user,
        message: req.flash('loginMessage')
    });   
}
