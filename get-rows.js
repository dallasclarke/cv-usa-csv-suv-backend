// Require in get-row function.
// Create getRows function that takes in the str.
// Make an empty array to push results into.
// Make a variable where you will split the string at '/n'.
// Use a For Of loop to loop through.
// Push the results and inside the brackets call get-row function.
// Return the result.


const rowCall = require('./get-row.js')


const getRows = function (str) {
  let result = [];
  const splitter = str.split('\n');
  
  for (rows of splitter) {
    
    result.push(rowCall(rows));

  }
  return result;
}





if (typeof getRows === 'undefined') {
  getRows = undefined;
}


module.exports = getRows;
