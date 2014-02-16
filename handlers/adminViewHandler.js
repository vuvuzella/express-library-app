/*
 * Handler for routing to Admin related views
 *
 */
var mysql = require('mysql');

var connection = null;

var sqlInfo = {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'librarydb',
    // Connection options
    connectTimeout: '10'
}

exports.login = function(req, res) {
    res.render('logIn');
};

exports.booksByTitle = function(req, res) {
    connection = mysql.createConnection(sqlInfo);
    connection.connect(function(err) {
        if (err) {
            console.log(err.code);
            res.render('booksByTitle');
        }
        else {
            connection.query('SELECT * FROM books_by_title', function(err, result, field) {
                res.locals.bookArray = result;
                res.render('booksByTitle');
                connection.disconnect();
            });
        }
    });
};

exports.addNewBook = function(req, res) {
};

exports.borrowBook = function(req, res) {
};

exports.returnBook = function(req, res) {
};

exports.employeeList = function(req, res) {
};

exports.addNewEmployee = function(req, res) {
};

exports.logOut = function(req, res) {
};
