// Load the 'index' controller
const index = require('../controllers/index.server.controller');

//Define the routes module' method
module.exports = (app) => {
    // Mount the 'index' controller's 'render' method
    app.get('/', index.displayLogin);
    app.post('/feedback', index.displayFeedback);
}