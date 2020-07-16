// Require in get-date and get-new-cases functions.
// Make function taking in date and arr as an arguement.
// Use for of loop to loop through arr argument.
// Make variable dates using the getDates function to find date index.
// Check with If statement if date matches any of the indexes from dates.
// Return the newCases function to find matching new cases in that index.


const getDates = require('./get-date.js');
const newCases = require('./get-new-cases.js');


const getNewCasesByDay = function(date, arr) {

  for (row of arr) {
    let dates = getDates(row);

    if (date === dates) {
      return newCases(row)
    }
  }
}





if (typeof getNewCasesByDay === 'undefined') {
  getNewCasesByDay = undefined;
}


module.exports = getNewCasesByDay;
