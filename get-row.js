// Create function called getRow that takes in str.
// Use For loop to loop through the string.
// Make variable and use .split to split the string at the commas.
// Now return row



const getRow = function (str) {
  

  for (row of str) {
    let row = str.split(',');
    return row
  }
}




if (typeof getRow === 'undefined') {
  getRow = undefined;
}


module.exports = getRow;
