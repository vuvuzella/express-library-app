/*
 * main javascript
 *
 */

// Function used to get the data of a row from a table
// decide if each row would have an 'id' that would serve as an index as well
// as well as the corresponding buttons.
function getRowData(caller, tableId) {
    var dataTbody = document.getElementById(tableId).tbodies;
    var calleeIndex = (caller.parentNode.parentNode.cells[0].innerHTML);
    alert(calleeIndex);
    console.log(calleeIndex);
};

// function editBookEntry() {
//     var bookData = {};
//     
// };
