'use strict';

// load mongoose
const mongoose = require('mongoose');


// load config file
const config = require('./config.js');


// load schema
const Job = require('./models/jobModel');


// connect to database
const mLab = 'mongodb://' + config.db.user + ':' + config.db.password + config.db.host + config.db.name;
const db = mongoose.connect(mLab);

