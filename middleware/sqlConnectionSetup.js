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
        password : pass
    }) ;
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

var useDB = function(db) {
    if (connection === null) {
        return -1;
    }
    connection.query('USE ' + db + ';', function(err,  rows, fields) {
        if (err) throw err;
    });
};

var querySelect = function(columns, table) {
    if (connection === null) {
        return -1;
    }
    var columnSelection = "";
    for (var i = 0; i < columns.length; i++){
        columnSelection += columns[i];
        if (i != columns.length - 1) {
            columnsSelection += ",";
        }
    }
    var result;
    connection.query('SELECT ' + columnSelection + ' FROM ' + table, function(err, results) {
       if (err) throw err;
       else
       this.result = results;
    });
    return result;
};

var mysqlSetup = function(req, resp, next) {
   connectToSqlServer('root', '', 'localhost');
   useDB('libraryDB');

   // Testing the connection by querying
   console.log(querySelect('*','employees'));
   // next();
};

module.exports = {
    mysqlSetup : mysqlSetup,
    querySelect : querySelect,
    disconnect : disconnect

};
