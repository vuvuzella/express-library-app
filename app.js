var http = require('http');
var express = require('express');
var fs = require('fs'); // filesystem access
var app = express();
var dbConfig = require('./config.json')[app.get('env')]; // contains the database configuration that is contained in config.json
// var mysql = require('mysql');   // create the  connection to mysql as a middleware
// var mysql = require('./middleware/sqlConnectionSetup')

/* Constants */
var PORT = 3000;    // create a config file for determining the port number


/* App specific settings */
app.set('view engine', 'jade');
app.set('views', './views');

/* default middleware */
// app.use(express.logger('dev')); // console logging of events
app.use(express.logger({format : 'dev', 
                        stream : fs.createWriteStream('app.log', {'flags' : 'w'})
                       })); // console logging of events, outputted to app.log
app.use(express.responseTime());
app.use(app.router);  // Add router middleware first before adding router dependent middleware. Notice it is called from the instance of express()
app.use(express.errorHandler());    // requires router middleware for this to work properly

/* Set static locations to access files */
app.use(express.static('./public/'));

// app.use(mysql.mysqlSetup());
http.createServer(app).listen(PORT, function(req, resp) {
});

// basic routing
var content = {title : 'NSP Library', header : 'NSP Library System', message : 'Welcome to the NSP Library System'};
app.get('/', function(req, res) {
    /* Pass some variables to the view */
    res.render('index', content);
    // fail();
});
app.get('/hello', function(req, res) {
    res.render('hello');
});
app.get('/test', function(req, res) {
    res.send('This is a test');
});

console.log("Server running at http://localhost:" + PORT);
