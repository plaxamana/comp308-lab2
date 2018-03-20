// Set the 'NODE_ENV' variable 
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the 'express' module
const configureExp = require('./config/express'),
      mongoose = require('./config/mongoose');

// create a new mongoose connection instance
var db = mongoose();

// Create a new Express application instance
const app = configureExp();

// Use the Express application instance to listen to the '3000' port
app.listen(3000);

// Log the server status to the console
console.log('Server running at http://localhost:3000/');

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;