// Load the Mongoose module and Schema object
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
// Define a new 'TaskSchema'
var FeedbackSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    favFood: String,
    fact: String,
    comment: String
});
// Create the 'Feedback' model out of the 'FeedbackSchema'
mongoose.model('Feedback', FeedbackSchema);
