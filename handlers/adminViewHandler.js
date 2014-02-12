/*
 * Handler for routing to Admin related views
 *
 */

/* Programmatically create the table! */
var viewBooksByTitleDom = {table : "<table>" +
                             "<tr>" +
                                 "<td>Filter by:<select style='width:100px'></select></td>" +
                                 "<td><button type='button'>Download List</button></td>"+
                             "</tr>" +
                             "<tr>" +
                                 "<td>ISBN</td>" + 
                                 "<td>Title</td>" + 
                                 "<td>Author</td>" + 
                                 "<td>Qty. Total</td>" + 
                                 "<td>Available</td>" + 
                             "</tr>" +
                            "</table>"};
// var viewBooksByTitleDom = { table : 'TABLE DAPAT DITO!'};

exports.booksByTitle = function(req, res) {
    res.render('booksByTitle', viewBooksByTitleDom);
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
