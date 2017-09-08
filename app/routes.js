'use strict';


const express = require('express'), 
    router = express.Router(),
    mainController = require('./controllers/main.controller'),
    passport = require('passport'),
    flash = require('connect-flash'),
    session = require('express-session');


require('../config/passport')(passport); // pass passport for configuration
    
    
router.use(session ({ secret: "process.env.secret" })); // session secret
router.use(passport.initialize());
router.use(passport.session()); // persistent login sessions
router.use(flash()); // use connect-flash for flash messages stored in session


// define routes

// home page route
router.get('/', mainController.showHome);

// explore page route
router.get('/explore', mainController.showExplore);

// show sign-up page route
router.get('/signup', mainController.showSignUp);

// show login page route
router.get('/login', mainController.showLogin);


// add new user to database route
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
}));

// authenticate user on login
router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/job-form',
    failureRedirect: '/login',
    failureFlash: true
}));




// show job form route
router.get('/job-form', isLoggedIn, mainController.showJobForm);

// add new job to database route
router.post('/add-job', isLoggedIn, mainController.addNewJob);


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
        res.redirect('/');
    }
}


module.exports = router;
