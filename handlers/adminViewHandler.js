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
    database : 'librarydb'
}

exports.booksByTitle = function(req, res) {
    // res.render('booksByTitle', viewBooksByTitleDom);
    // Sample data. Call query function here
    // res.locals.connection.query('SELECT * FROM books_by_title', function(err, result, field) {
    //     console.log(result);
    // });
    // console.log(res.locals.bookArray);
    // res.locals.bookArray = [{
    //                             isbn : 1234567890, 
    //                             title : 'Express JS',
    //                             author : 'Douglas Crockford',
    //                             total : 5,
    //                             available : 5
    //                        },
    //                        {
    //                            isbn : 222222, 
    //                            title : 'Programming in Dart',
    //                            author : 'Mr Google',
    //                            total : 1,
    //                            available : 0
    //                        }
    //                       ];
    //mysql.querySelect('*', 'books_by_title', req, res);
    // res.render('booksByTitle');
    connection = mysql.createConnection(sqlInfo);
    connection.connect();
    connection.query('SELECT * FROM books_by_title', function(err, result, field) {
        res.locals.bookArray = result;
        res.render('booksByTitle');
        connection.disconnect();
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
