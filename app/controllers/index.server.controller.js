// Create a new 'render' controller method
exports.displayLogin = (req, res) => {
    // Use the 'response object to render the 'index' view with a 'title' property
    res.render('index', {
        message: 'Please login: '
    });
    
    console.log('GET Request made to /');
}

// Create a new 'render' controller method
exports.displayFeedback = (req, res) => {
    
    // Get user input by using req obj
    var username = req.body.username;

    // make a reference to session obj
    var session = req.session;

    // store the username in session obj
    session.username = username;
    console.log(`username in session: ${session.username}`);

    // Use the 'response object to render the 'index' view with a 'title' property
    res.render('feedback', {
        message: 'Please fill out the form ',
        username: username
    });
    
    console.log('POST Request made to /feedback');
}