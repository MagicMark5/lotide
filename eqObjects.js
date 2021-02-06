const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

// Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const result1 = eqObjects(ab, ba); // => true
assertEqual(result1, true);

const abc = { a: "1", b: false, c: "3" };
const result2 = eqObjects(ab, abc); // => false
assertEqual(result2, false);

const cd1 = { c: "2", d: "1" };
const result3 = eqObjects(ab, cd1); // => false
assertEqual(result3, false);

const de = { a: "1", b: false, c: "3"};
const result4 = eqObjects(abc, de); // => true
assertEqual(result4, true);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const result5 = eqObjects(cd, dc); // => true
assertEqual(result5, true);

const cd2 = { c: "1", d: ["2", 3, 4] };
const result6 = eqObjects(cd, cd2); // => false
assertEqual(result6, false);


// Test code for nested objects
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
assertEqual(eqObjects({
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
}, {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
}), true); // => true

assertEqual(eqObjects({
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file", // difference is here
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
}, {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "two files", // difference is here
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
}), false); // => false

