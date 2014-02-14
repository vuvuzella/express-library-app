// For creating the database
//connection.query('CREATE DATABASE Library');

/* For creating the books_by_title
connection.query('CREATE TABLE books (' +
         'isbn VARCHAR( 128 ) NOT NULL,' +
         'title TEXT,'+
         'author VARCHAR( 128 ),' +
		 'PRIMARY KEY (isbn))');

connection.query('INSERT INTO books ' +
          'VALUES ( 1-1, "The", "anonymous");');
*/

/* For creating the book_number table
connection.query('CREATE TABLE book_number (' +
         'isbn VARCHAR( 128 ) NOT NULL,' +
         'number INT NOT NULL,'+
		 'PRIMARY KEY (number))');

connection.query('INSERT INTO book_number ' +
          'VALUES ("1-1", 2);');
*/

/* For creating the employee table
connection.query('CREATE TABLE employee (' +
         'number INT NOT NULL,' +
         'firstname VARCHAR( 128 ) NOT NULL,' +
         'middlename VARCHAR( 128 ) NOT NULL,' +
         'lastname TEXT NOT NULL,'+
		 'PRIMARY KEY (number))');

connection.query('INSERT INTO employee_sample ' +
          'VALUES ( 1, "A", "G");');
*/

/* For creating the borrow table
connection.query('CREATE TABLE borrow_history (' +
         'book_number INT NOT NULL,' +
         'engineer VARCHAR( 128 ) NOT NULL,' +
         'middlename VARCHAR( 128 ) NOT NULL,' +
         'lastname TEXT NOT NULL,'+
		 'PRIMARY KEY (number))');

connection.query('INSERT INTO employee_sample ' +
          'VALUES ( 1, "A", "G");');

*/