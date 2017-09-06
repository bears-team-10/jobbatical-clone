'use strict';

const express = require('express'), 
    router = express.Router(),
    apiRoutes = express.Router(),
    mainController = require('./controllers/main.controller');


module.exports = router;


// define routes

// home page route
router.get('/', mainController.showHome);

// explore page route
router.get('/explore', mainController.showExplore);

// show sign-up page route
router.get('/sign-up', mainController.showSignUp);

// show login page route
router.get('/login', mainController.showLogin);

// add new user to database route
router.post('/register-new-user', mainController.registerNewUser);

// authenticate user on login
router.post('/authenticate', mainController.authenticateUser);


// route middleware to verify a token
router.use( mainController.verifyToken );

// show job form route
router.get('/job-form', mainController.showJobForm);

// add new job to database route
router.post('/add-job', mainController.addNewJob);

