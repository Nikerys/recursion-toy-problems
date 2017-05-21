// Using recursion, write a function called `getAllKeys` that takes an
// object and returns array of all its keys. Your function should list
// all keys for any nested objects. You may assume any object passed to
// your function will only contain strings, numbers, and other objects.
//

var getAllKeys = function (object) {
  let array = [];
  
  var loopThroughObjects = function(object){
    for (key in object) {
      array.push(key);
      if (typeof object[key] === "object") {
        loopThroughObjects(object[key]);
      }
    }
  }
  
  loopThroughObjects(object);
  return array;
};

// Example:
//
var exampleData = {name: 'Beth', address: {street: '123 main', city: {kids: '123 main', country: '122' }}, sada: {strsdfeet: '123 main', cidfgty: {khjids: '123 main', counerstry: '122' }}};
//
getAllKeys(exampleData);
// => returns ['name', 'address', 'street', 'city']
//