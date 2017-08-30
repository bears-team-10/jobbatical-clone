'use strict';

const express = require('express'), 
    router = express.Router(),
    mainController = require('./controllers/main.controller');


module.exports = router;


// define routes

// home page route
router.get('/', mainController.showHome);

// show job form route
router.get('/job-form', mainController.showJobForm);

// add new job to database route
router.post('/add-job', mainController.addNewJob);


// explore page route
router.get('/explore', mainController.showExplore);