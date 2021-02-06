const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// compare 2 arrays and return a boolean if they are strictly equal, returns false if argument is not an array
const eqArrays = function(arr1, arr2) {

  // compare array lengths
  const compareArrayLengths = function(arr1, arr2) {
    return arr1.length === arr2.length ? true : false;
  };

  let result;
  result = compareArrayLengths(arr1, arr2);
  
  if (result) { // if result is still true at this point run the loop...
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        result = eqArrays(arr1[i], arr2[i]);
        if (!result) return result; // if result of recursion was false, exit 
      } else if (arr1[i] !== arr2[i]) { // comparison of values if both are not arrays or one is an array
        return false;  // if a mismatch is found exit the function
      } 
    }
  }
  return result; 
};


// TEST CODE

// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays("[1, 2, 3]", [1, 2, 3]), false); // => should PASS
// assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => should PASS
// assertEqual(eqArrays([1, "2", 3], [1, 2, 3]), false); // => should PASS


// TEST CODE FOR SUB-ARRAYS (NESTED) WITH RECURSION
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
assertEqual(eqArrays([[2, 3, [1, [2], 3], 10], [4]], [[2, 3, [1, [2], 3], 10], [4]]), true);
assertEqual(eqArrays([[2, 3, [1, [2], 3], 10], [4]], [[2, 3, [1, [20], 3], 10], [4]]), false);