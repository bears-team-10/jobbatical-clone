'use strict';

// load environment variables
require('dotenv').config();

// load dependencies
const express = require('express'),
    app = express(),
    // bodyParser = require('body-parser');
    mongoose = require('mongoose'),
    expressLayouts = require('express-ejs-layouts'),
    port = process.env.PORT || 4000;


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