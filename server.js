'use strict';

// load environment variables
require('dotenv').config();

// load dependencies
const express = require('express'),
    app = express(),
 // Job = require('./models/jobModel');
// bodyParser = require('body-parser');
    mongoose = require('mongoose'),
    expressLayouts = require('express-ejs-layouts'),
    port = process.env.PORT || 3000;


// const config = require('./config.js');
// connect to database
// const mLab = 'mongodb://' + config.db.user + ':' + config.db.password + config.db.host + config.db.name;
// mongoose.connect(mLab);


// use body-parser
// app.use(bodyParser.urlencoded( { extended: false } ));
// app.use(bodyParser.json());


// tell express where to look for static assets
app.use (express.static( __dirname + '/public'));


// set ejs as our templating engine
app.set('view engine', 'ejs');
app.use(expressLayouts);


// connect to database
mongoose.connect(process.env.DB_URI);

// direct routes to router file
app.use(require('./app/routes'));


// start server
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});