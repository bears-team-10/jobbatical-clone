'use strict';

// load environment variables
require('dotenv').config();

// load dependencies
const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,    
    mongoose = require('mongoose'),
    expressLayouts = require('express-ejs-layouts'),
    passport = require('passport'),
    flash = require('connect-flash'),
    morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session');
    

/**
 * configure app
 */


//require('./config/passport')(passport); // pass passport for configuration

 // setup express application
 app.use(morgan('dev')); // log all requests to console
 app.use(cookieParser()); // read cookies (needed for auth)

// use body-parser
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded( { extended: true } ));


// tell express where to look for static assets
app.use(express.static( __dirname + '/public'));


// set ejs as our templating engine
app.set('view engine', 'ejs');
app.use(expressLayouts);


// connect to database
mongoose.connect(process.env.DB_URI);


/*
// required for passport
app.use(session ({ secret: process.env.secret })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
*/


// direct routes to router file
app.use(require('./app/routes'));


// start server
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});