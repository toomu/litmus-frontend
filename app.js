// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');
var consolidate = require('consolidate');

// configure app to use bodyParser()
// this will let us get the data from a POST
var engines = require('consolidate');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/views'));

var port = process.env.PORT 	// set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 				// get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.render('basic');
//    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);


var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/mean-dev1');

var db = mongoose.connect('mongodb://toomu:toomu@ds039880.mongolab.com:39880/alienadventures');

//ds039880.mongolab.com:39880/alienadventures -u <dbuser> -p <dbpassword>




var Schema = mongoose.Schema;
var EventSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    event: {
        type: String,
        required: true,
        trim: true
    },
    days: {
        type: String,
        required: true,
        trim: true
    },
    type:{
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true,
        trim: true
    }
});
mongoose.model('Event', EventSchema);
var Event = mongoose.model('Event');

router.get('/getEvents' ,getEvents);

function getEvents(req, res){
//    console.log(req.body,req.query);
    if(typeof req.query.types != 'object'){
        req.query.types = [req.query.types];
    }
    console.log(req.query);
    Event.find({ type: { $in: req.query.types } }).sort('-created').exec(function(err, events) {
        if (err) {
            return res.json(500, {
                error: 'Cannot list the events'
            });
        }
//        console.log(events);
        res.jsonp({events: events});

    });
}