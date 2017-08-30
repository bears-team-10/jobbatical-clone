'use strict';

const express = require('express'), 
    router = express.Router(),
    mainController = require('./controllers/main.controller');


module.exports = router;


// routing
router.get('/', mainController.showHome);


// retrieve all jobs
router.get('/all-jobs', (req, res) => {
    Job.find((err, jobs) => {
        if (err) {
        console.error(err);
        } else {
            res.json(jobs);
        }
    });
});


// featured jobs
router.get('/featured', (req, res) => {
    Job.find( {} ).sort( {_id: -1} ).limit(6).exec( (err, featuredJobs) => {
        if (err){
            console.error(err);
        } else {
            res.json(featuredJobs);
        }
        
    });

});


router.post('/add-job', (req, res) => {
    let job = new Job(req.body);
    job.save();
    res.status(201).send('job added!');
});
