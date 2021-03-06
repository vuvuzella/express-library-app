var http = require('http');
var express = require('express');
var fs = require('fs'); // filesystem access
var app = new express();    // Instance of Express
var dbConfig = require('./config.json')[app.get('env')]; // contains the database configuration that is contained in config.json
var mysql = require('mysql');   // create the  connection to mysql as a middleware
// mysql = require('./middleware/sqlConnectionSetup');

/* Constants */
var PORT = 3000;    // create a config file for determining the port number

/* App specific settings */
app.set('view engine', 'jade');
app.set('views', './views');

/* Load middleware */
app.use(express.logger({format : 'dev', 
                        stream : fs.createWriteStream('app.log', {'flags' : 'w'})
                       })); // console logging of events, outputted to app.log
app.use(express.responseTime());
app.use(express.bodyParser()); // to handle POST forms
// Add router middleware first before adding router dependent middleware. 
// Notice it is called from the instance of express()
app.use(app.router);  
app.use(express.errorHandler());    // requires router middleware for this to work properly

var routes = require('./routes')(app);  // routes as a middleware.

/* Set static locations to access files */
app.use(express.static('./public/'));


// app.use(mysql.mysqlSetup());
//http.createServer(app).listen(PORT, function(req, resp) {
//});
app.listen(PORT, 'localhost', function(req, resp) { // express way of starting the server. no need for http require
});

// basic routing
// app.get('/', routes.index);
// app.get('/hello', users.users);
// app.get('/list', users.list);
// app.get('/', function(req, res, next) {
//     /* Pass some variables to the view */
//     res.render('index', content);
//     next();
// });
// app.get('/hello',
//         function(req, res, next) {  // multiple callback function route handling
//             // res.render('hello');
//             res.set('X-One' , 'hello');
//             next();
//         },
//         function(req, res, next) {
//             res.set('X-Two', 'ho');
//             next();
//         },
//         function(req, res, next) {
//             res.send('hello!');
//             next();
//         }
//         );
// app.get('/test', function(req, res, next) {
//     res.send('This is a test');
//     next();
// });
// app.get('/ab(cd)?e', function(req, res, next) {
//     res.send('/ab(cd)?e');
//     next();
// });
// app.get('/user/:id', function(req, res, next) {
//     res.send('user id: ' + req.params.id);
//     next();
// });
// app.get('/country/:country/state/:state' , function(req, res, next) {
//     res.send(req.params.country + ', ' + req.params.state);
//     next();
// });

console.log("Server running at http://localhost:" + PORT);
