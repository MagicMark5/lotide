const flatten = function(nestedArr) { // takes a nested array and returns a non-nested array
  // only handles one level of nesting
  let flattened = [];
  for (let i = 0; i < nestedArr.length; i++) {
    if (Array.isArray(nestedArr[i])) { // checks if element in index is an array
      for (let item of nestedArr[i]) { // if true, loop through that array and push its contents
        flattened.push(item);
      }
    } else {
      flattened.push(nestedArr[i]); // if the element is not an array just push the element
    }
  }
  return flattened;
};

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


// // TEST CODE into assertion
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4, 5, 6], 5, [6]]), [1, 2, 3, 4, 5, 6, 5, 6]);
assertArraysEqual(flatten([1, 2, ["three", "four"], 5, [6]]), [1, 2, "three", "four", 5, 6]);