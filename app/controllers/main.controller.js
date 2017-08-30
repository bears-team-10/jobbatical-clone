'use strict';

const Job = require('../models/jobModel');


module.exports = {
    showHome: (req, res) => {
        Job.find( {} ).sort( {_id: -1} ).limit(6).exec( (err, featuredJobs) => {
            if (err){
                console.error(err);
            } else if(!featuredJobs){
                res.json('jobs not found');
               // res.json(featuredJobs);
            } else {
                res.render('pages/home', { featuredJobs: featuredJobs });
            }
        });
    }
}

