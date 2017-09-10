'use strict';


const express = require('express'), 
    router = express.Router(),
    mainController = require('./controllers/main.controller'),
    passport = require('passport');


require('../config/passport')(passport); // pass passport for configuration


// define routes



// home page route
router.get('/', mainController.showHome);

// explore page route
router.get('/explore', mainController.showExplore);

// search DB for jobs
router.post('/explore', mainController.searchJobs);



// show sign-up page route
router.get('/signup', mainController.showSignUp);

// add new user to database route
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/job-form',
    failureRedirect: '/signup',
    failureFlash: true
}));


// show login page route
router.get('/login', mainController.showLogin);

// authenticate user on login
router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/job-form',
    failureRedirect: '/login',
    failureFlash: true
}));



// show job form route
router.get('/job-form', isLoggedIn, mainController.showJobForm);

// add new job to database route
router.post('/job-form', isLoggedIn, mainController.addNewJob);


// job details route
router.get('/job/:id', mainController.showSingleJob);


router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next){
    // if user is authenticated in the session, carry on
    if(req.isAuthenticated()){
        return next();
    } else {
        res.redirect('/login');
    }
}


// create demo data
// router.get('/seed', mainController.seedDatabase);


module.exports = router;
