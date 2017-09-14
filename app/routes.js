'use strict';


const express = require('express'), 
    router = express.Router(),
    mainController = require('./controllers/main.controller'),
    jobsController = require('./controllers/jobs.controller'),
    passport = require('passport');



// pass passport for configuration
require('../config/passport')(passport); 



/**
 * define all routes
 */

/**
 * Home and Explore Pages
 */
router.get('/', mainController.showHome); // display home page
router.get('/explore', mainController.showExplore); // display explore page
router.post('/explore', jobsController.searchJobs); // search DB for jobs



/**
 * signup
 */
router.get('/signup', mainController.showSignUp); // display sign-up page
router.post('/signup', passport.authenticate('local-signup', {  // add new user to database    
    successRedirect: '/job-form',
    failureRedirect: '/signup',
    failureFlash: true
}));



/**
 * login
 */
router.get('/login', mainController.showLogin); // display login page
router.post('/login', passport.authenticate('local-login', {  // authenticate user on login    
    successRedirect: '/job-form',
    failureRedirect: '/login',
    failureFlash: true
}));



/**
 * Job-Form
 */
router.get('/job-form', isLoggedIn, jobsController.showJobForm); // display job form route
router.post('/job-form', isLoggedIn, jobsController.addNewJob); // add new job to database



/**
 * Job Details
 */
router.get('/job/:id', jobsController.showSingleJob); // display details of a single job



/**
 * logout
 */
// log user out
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})



/**
 * middleware to make sure a user is logged in
 */
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){  // if user is authenticated in the session, carry on        
        return next();
    } else {
        res.redirect('/login');
    }
}



/**
 * create demo data
 */
// router.get('/seed', jobsController.seedDatabase);



module.exports = router;
