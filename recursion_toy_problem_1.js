// Using recursion, return the number of occurences of a character
// found in a given string. Your function should be case-sensitive.

var charCount = function (string, character) {
  const arr = string.split('');
  let count = 0;
  let i = 0;
  
  var goThroughLetters   = function(array, character){
    if (array.length === 0) {
      return count;
    }
    if (array[0] === character) {
      count++;
    }
    array.shift();
    goThroughLetters(array, character);
  }
  
  goThroughLetters(arr, character);
  return count;

};



// Example:
//
var exampleData = 'My keen Korean kitty knows not to kick my knees';
//
charCount(exampleData, 'k');
// => returns 6