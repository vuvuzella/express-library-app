function getBookData() {
	var data = "";
	var elements = document.getElementsByTagName("input");
	var lastIndex = elements.length - 1;

	for( var i = 0; i < lastIndex; i++ ) {
		string += elements[i].id + "=" + elements[i].value + ",";
	}
	string += elements[lastIndex].id + "=" + elements[lastIndex].value + " ";
	
	return data;
}

function showEditPopUp() {
	// Display pop-up message
}

function edit( table, data, id ) {
	var statement = 'UPDATE ' + table + ' ' +
					'SET ' + data + // column1=value1,column2=value2,...
					'WHERE ' + id; //some_column=some_value

	querySelect(statement, showEditPopUp, res);
}

function onSaveClicked() {
	var data = getBookData();
	var id = "isbn=" + document.getElementById("isbn");

	edit( "books", data, id );
}