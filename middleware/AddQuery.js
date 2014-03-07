function add( table, data, fn ) {
	var statement = 'INSERT INTO ' + table + ' ' +
					'VALUES ' + '(' + data + ')'; //value1,value2,value3,...

	connection.query(statement, fn);
}

// The Element ID used should be according to the DOM ID
function getBookData(rowNumber) {
	var row = document.getElementById("row" + rowNumber);
	var data = row.getElementById("isbnNumber") + ", " +
			(parseInt(row.getElementById("totalQty")) + 1);

	return data;
}

//This is the function that will update the screen with the new QTY
function updateQty() {
	
}

function addBookQty( rowNumber ) {
	add(book_number, getBookData(rowNumber), updateQty );
}