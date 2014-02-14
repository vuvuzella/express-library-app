/*
 * Middleware for creating a connection to the SQL server
 *
 */

var mysql = require('mysql');
var connection = null;  // local connection for this middleware

/* Current connection is defaulted to ROOT */
var connectToSqlServer = function(username, pass, serverLocation) {
    connection = mysql.createConnection({
        host : serverLocation,
        user : username,
        password : pass,
        database : 'librarydb'
    });
    connection.connect();   // create sql server connection
};

var disconnect = function() {
    if (connection == null) {
    }
    else {
        connection.end(function(err) {
            if (err) throw err;
        });
    }
};

var useDB = function(db, fn) {
    if (connection === null) {
        return -1;
    }
    connection.query('USE ' + db + ';', function(err,  rows, fields) {
        if (err) throw err;
    });
};

var querySelect = function(columns, table, req, res) {
    if (connection === null) {
        return -1;
    }
    res.locals.bookArray = [];
    var columnSelection = "";
    for (var i = 0; i < columns.length; i++){
        columnSelection += columns[i];
        if (i != columns.length - 1) {
            columnsSelection += ",";
        }
    }
    // connection.query('SELECT ' + columnSelection + ' FROM ' + table, function(err, results) {
    connection.query('SELECT * FROM ' + table, function(err, results) {
        if (err) throw err;
        else {
            res.locals.bookArray = results;
            res.render('booksByTitle');
            console.log(res.locals.bookArray);
        }
    });
};

var mySqlSetup = function(req, res, next) {
   connectToSqlServer('root', '', 'localhost');
   // useDB('librarydb');
   // querySelect('*', 'books_by_title', req, res); 

   // Testing the connection by querying
   //console.log(querySelect('*','employees', disconnect) + ' data ');
   // next();
   // disconnect();
   console.log('mySqlSetup finished');
};

// module.exports = {
//     mySqlSetup : mySqlSetup,
//     querySelect : querySelect,
//     disconnect : disconnect
// 
// };
exports.mySqlSetup = mySqlSetup;
exports.querySelect = querySelect;
exports.connection = connection;
