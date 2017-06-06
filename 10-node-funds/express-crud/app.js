const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const morgan = require("morgan");
const puppyRoutes = require('./routes/puppies')

app.set('view engine', 'pug');
app.use(bodyParser());
app.use(methodOverride('_method')); // this is like Modus - ?_method=DELETE

// morgan gives you information about your server logs
app.use(morgan('dev'));

app.use('/puppies', puppyRoutes)

// when you make a GET request to /, there's a response with a 300 (redirect) with a location header to /puppies
app.get('/', function(req, res, next) {
    if(err) next(err) // doesn't use throw keyword - which crashes server - this sends an error message using next, so that next function being called accepts the `error` parameter
    // in development rather than production, you can do: 
    // if(err) throw err
    // next parameter means "pass this to the next function"
    eval(require("locus"))
    res.redirect('/puppies')
});

// data comes in the request via the query string
// req.params - URL parameters
// req.query - query string
// req.body - form POST
// the req comes as an object
app.get('/puppies', function(req, res) {
    // this can only send text; if you want to send an object, it will be sent back as JSON
    res.send([{hello: 'Hello'}]);
});

app.listen(3000, function() {
    console.log('SERVER STARTING!')
});


