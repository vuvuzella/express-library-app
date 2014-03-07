/*
 * main javascript
 *
 */

// Function used to get the data of a row from a table
// decide if each row would have an 'id' that would serve as an index as well
// as well as the corresponding buttons.
function getRowData(caller, tableId) {
    var calleeParentNode = caller.parentNode;
    var rowData = calleeParentNode.parentNode.cells;
    return rowData; //  HTMLCollections (array)
};

function editBookData() {
    /* Make ajax call, sending the contents of the row array in the req/res */
};
