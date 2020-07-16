// Make two variables to call functions get-date and get-total-cases to find indices.
// Create function that will take in two arguments for date and array.
// Loop through the arr argument.
// Make variable that will use the getDate function to find index for date.
// Using an If statement check to see if date argument equals to findDate index.
// If so, return the getTotalCases using rows as the argument to get total cases.

const getDate = require('./get-date.js');
const getTotalCases = require('./get-total-cases.js');


const getTotalCasesByDay = function (date, arr) {

  for (rows of arr) {
    let findDate = getDate(rows); 
    
    if (date === findDate) {
      return getTotalCases(rows)
    }
  }
}




if (typeof getTotalCasesByDay === 'undefined') {
  getTotalCasesByDay = undefined;
}


module.exports = getTotalCasesByDay;
