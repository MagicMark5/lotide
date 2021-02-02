const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



// compare array lengths
const compareArrayLengths = function(arr1, arr2) {
  return arr1.length === arr2.length ? true : false;
};

// compare 2 arrays and return a boolean if they are strictly equal, returns false if argument is not an array
const eqArrays = function(arr1, arr2) {
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


// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(11, 1);
// assertEqual(false, 0);
// assertEqual("51", "5");
// assertEqual("WOO", "WOO");

// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays("[1, 2, 3]", [1, 2, 3]), false); // => should PASS
// assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => should PASS
// assertEqual(eqArrays([1, "2", 3], [1, 2, 3]), false); // => should PASS
