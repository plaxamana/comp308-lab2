// Load the module dependencies
const config = require('./config');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const path = require('path');
const mongoose = require('mongoose');

// Define the Express configuration method
module.exports = function() {
	// Create a new Express application instance
	const app = express();

	// Use the 'NDOE_ENV' variable to activate the 'morgan' logger or 'compress' middleware
	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production') {
		app.use(compress());
	}

	// Use the 'body-parser' and 'method-override' middleware functions
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());

	// Configure the 'session' middleware
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));

	// Set the application view engine and 'views' folder
	app.set('views', './app/views');
    app.set('view engine', 'ejs');
    
    // Add path
    app.use(express.static(path.join(__dirname, '../node_modules')));
    app.use(express.static(path.join(__dirname, '../public')));

	// Load the 'index' routing file
	require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/feedback.server.routes')(app);

	// Return the Express application instance
	return app;
};