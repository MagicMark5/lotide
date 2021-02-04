// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const eqArrays = function(arr1, arr2) {

  // compare array lengths
  const compareArrayLengths = function(arr1, arr2) {
    return arr1.length === arr2.length ? true : false;
  };

  let result;
  result = Array.isArray(arr1); // check if inputs are arrays
  result = Array.isArray(arr2);
  result = compareArrayLengths(arr1, arr2);
  
  if (result) { // if result is still true at this point run the loop...
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        result = false;
        return result; // if a mismatch is found exit the function
      }
    }
  }
  return result;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // list all the object keys into separate arrays
  // use compareArrayLengths and use that return true/false value
  
  const compareArrayLengths = function(arr1, arr2) { // compare array lengths
    return arr1.length === arr2.length ? true : false;
  };

  let result; // will be reassigned to true or false
  let sameLength = compareArrayLengths(Object.keys(object1), Object.keys(object2));
  if (sameLength) { // if that returns false the objects are not equal due to different lengths, then exit function and return false
    for (const key of Object.keys(object1)) { // Loop through object1 and compare key values with object2 key values
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // only if both are arrays
        result = eqArrays(object1[key], object2[key]); // call eqArrays
      } else { // otherwise an array compared to something that is not an array will be false
        // console.log("object1 " + key + ": " + object1[key]);
        // console.log("object2 " + key + ": " + object2[key]);
        result = object1[key] !== object2[key] ? false : true;
      }
    }
    return result;
  }
  return false; // if they have a different number of keys
};

// Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: false, c: "3" };
assertObjectsEqual(ab, abc); // => false
