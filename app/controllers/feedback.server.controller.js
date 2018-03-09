// Create a new 'render' controller method
exports.displayThankyou = (req, res) => {

    res.render('thankyou', {
        message: 'Thank you for your awesome feedback, we really appriciate it!'
    });

    console.log('POST Request made to /thankyou');
}