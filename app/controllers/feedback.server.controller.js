// Load the 'Feedback' Mongoose model
const mongoose = require('mongoose');
require('../models/feedback.server.model')
const Feedback = mongoose.model('Feedback');

exports.createFeedback = function(req, res, next){
    var feedback = new Feedback(req.body);

    feedback.save(function(err){
        if(err){
            return next(err);
        } else{
            res.json(feedback);
        }
    });
};

exports.readFeedback = function(req, res, next){
    console.log('in readFeedback')

    Feedback.find({}, function(err, feedback){
        console.log(feedback)
        if(err){
            console.log('some error in the readFeedback method')
            return next(err);
        } else{
            res.render('list_feedback', {
                feedback: feedback
            });
        }
        console.log(feedback);
    })
}

// Create a new 'render' controller method
exports.displayThankyou = (req, res) => {
    var feedback = new Feedback(req.body);

    feedback.save(function(err){
        if(err){
            return next(err);
        } else{
            res.render('thankyou', {
                message: 'Thank you for your awesome feedback, we really appriciate it!'
            });
        }
    });

    console.log('POST Request made to /thankyou');
}

exports.displayFeedback = (req, res) => {

    res.render('list_feedback');

    console.log('POST Request made to /list_feedback');
}