/*
 * Router for the library app
 *
 */
var routes = require('./handlers');
var users = require('./handlers/users');
var layout = require('./handlers/layout');
var logIn = require('./handlers/logIn');
var admin = require('./handlers/adminViewHandler');

module.exports = function(app) {

    /* Route definition separate from the app.js file */
    // app.get('/', routes.index);
    // app.get('/index', routes.index);
    // app.get('/hello', users.users);
    // app.get('/list', users.list);
    // app.get('/layout', layout.layout);
    // app.get('/logIn', logIn.logIn);
    app.get('/booksByTitle', admin.booksByTitle);
    app.get('/addNewBook', admin.addNewBook);
    app.get('/borrowBook', admin.borrowBook);
    app.get('/returnBook', admin.returnBook);
    app.get('/employeeList', admin.employeeList);
    app.get('/addNewEmployeeList', admin.addNewEmployee);
    app.get('/logOut', admin.logOut);
};
