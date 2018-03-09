// Load the 'feedback' controller
const feedback = require('../controllers/feedback.server.controller.js');

//Define the routes module' method
module.exports = (app) => {
    // Mount the 'feedback' controller's 'render' method
    app.post('/thankyou', feedback.displayThankyou);
}