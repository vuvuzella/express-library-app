var http = require('http');
var mysql = require('mysql');

var sqlInfo = {
	host: 'localhost',
	connection: 'root',
	password: '',
	database: 'Library'
};
connection = mysql.createConnection(sqlInfo);
connection.connect();

var printList = function(err, rows, fields) {
  if (err) {
	  throw err;
  }

  var all = JSON.stringify(rows);
  console.log('The list is: ', all);
};

var querySelect = function(statement, fn) {
    if (connection === null) {
        return -1;
    }
    connection.query(statement, fn);
};

var book_list = 'SELECT books.isbn, COUNT(book_number.isbn) as total ' + 
				'FROM books ' + 
				'JOIN book_number ' +
				'ON books.isbn = book_number.isbn';

var book_number = 'SELECT * ' + 
				'FROM book_number ';

var employee_list = 'SELECT * ' + 
				'FROM employees';

var employee_borrowed = 'SELECT * ' + 
				'FROM employees';

var state = 'SELECT * FROM books';

var book_list = 'SELECT books.isbn, COUNT(book_number.isbn) as total ' + 
			'FROM books ' + 
			'JOIN book_number ' +
			'ON books.isbn = book_number.isbn';

querySelect(book_list, printList);

connection.end();