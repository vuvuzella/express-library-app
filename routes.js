/*
 * Router for the library app
 *
 */
// var routes = require('./handlers');
// var users = require('./handlers/users');
// var layout = require('./handlers/layout');
// var logIn = require('./handlers/logIn');
var admin = require('./handlers/adminViewHandler');

module.exports = function(app) {

    /* Route definition separate from the app.js file */
    app.get('/', admin.login);
    app.get('/logIn', admin.login);
    app.get('/booksByTitle', admin.booksByTitle);
    app.get('/addNewBook', admin.addNewBook);
    app.get('/borrowBook', admin.borrowBook);
    app.get('/returnBook', admin.returnBook);
    app.get('/employeeList', admin.employeeList);
    app.get('/addNewEmployeeList', admin.addNewEmployee);
    app.get('/logOut', admin.logOut);

    /* For testing purposes only */
    app.get('/editbook', admin.editBook);
    // app.post(); // sending data to the server from the page itself

    // handling login requests
    app.post('/userlogin', function(req, res) {
        var uname = req.body.uname;
        var pword = req.body.pword;
        alert('username: ' + uname + '\npassword: ' + pword);
    });
};
