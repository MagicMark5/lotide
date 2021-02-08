const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // Calls eqArrays only when both objects are arrays..
  /* Handles nested objects with recursion */
  
  const compareArrayLengths = function(arr1, arr2) { // compare array lengths
    return arr1.length === arr2.length ? true : false;
  };

  let result; // will be reassigned to true or false
  let sameLength = compareArrayLengths(Object.keys(object1), Object.keys(object2));
  if (sameLength) { // if that returns false the objects are not equal due to different lengths, then exit function and return false
    for (const key of Object.keys(object1)) { // Loop through object1 and compare key values with object2 key values
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // only if both are arrays
        result = eqArrays(object1[key], object2[key]); // call eqArrays
      } else if (!Array.isArray(object1[key]) && !Array.isArray(object2[key])) { // only if both are NOT arrays
        if (typeof object1[key] === "object" && typeof object2[key] === "object") { // only if both are objects (but not arrays)
          // console.log("BOTH OBJECTS!");
          // console.log("object1 " + key + ": " + object1[key]);
          // console.log("object2 " + key + ": " + object2[key]);
          result = eqObjects(object1[key], object2[key]); // recursive-case both elements are objects
        } else { // regular values are being compared here OR one is an object and the other is NOT.. so result = false;
          // console.log("object1 " + key + ": " + object1[key]);
          // console.log("object2 " + key + ": " + object2[key]);
          result = object1[key] !== object2[key] ? false : true;
        }
      } // if false result if found within looping through the keys
      if (!result) return false;
    }
    // console.log("all keys have been compared.....");
    return result;
  }
  // console.log("the objects have different number of keys!");
  return false; // if they have a different number of keys
};

module.exports = eqObjects;



