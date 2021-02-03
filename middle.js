const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// compare 2 arrays and return a boolean if they are strictly equal
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

const middle = function(arr) { // Takes in array and returns an array of middle element(s)
  let middle = [];
  let middleIndex = Math.floor(arr.length / 2);
  if (arr.length > 2) {
    middle = arr.length % 2 === 0 ? arr.slice(middleIndex - 1, middleIndex + 1) : arr.slice(middleIndex, middleIndex + 1);
  }
  return middle;
};

// Test Code assertions
assertArraysEqual(middle([1]), []); // => Should PASS
assertArraysEqual(middle([1, 2]), []); // => Should PASS
assertArraysEqual(middle([1, 2, 3]), [2]); // => Should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => Should PASS
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => Should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => Should PASS
assertArraysEqual(middle([10, 20, "30", "40", 5, 6]), ["30", "40"]); // => Should PASS
assertArraysEqual(middle([1, 2, 3, 4, 20, "30", "40", 5, 6]), [20]); // => Should PASS