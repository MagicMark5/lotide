const without = function(source, itemsToRemove) {
  // This function should take in a source array and a itemsToRemove array.
  // It should return a new array with only those elements from source
  // that are not present in the itemsToRemove array.
  let indexToRemove; // contains index numbers to remove from source
  let withoutArray = []; // will contain final array to return

  for (let i = 0; i < source.length; i++) {

    for (let item of itemsToRemove) { // compare each element of outer loop with itemsToRemove
      if (source[i] === item) {
        indexToRemove = i; // store indices which need to be removed from each iteration of outer loop
      }
    }

    if (source[i] !== source[indexToRemove]) {
      withoutArray.push(source[i]);
    }

  }

  return withoutArray;
};

module.exports = without;

// TEST FUNCTIONS/CODE
// // assert Arrays are equal by calling eqArrays
// const assertArraysEqual = function(actual, expected) {
//   if (eqArrays(actual, expected)) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };



// // compare 2 arrays and return a boolean if they are strictly equal
// const eqArrays = function(arr1, arr2) {
  
//   // compare array lengths
//   const compareArrayLengths = function(arr1, arr2) {
//     return arr1.length === arr2.length ? true : false;
//   };
  
//   let result;
//   result = Array.isArray(arr1); // check if inputs are arrays
//   result = Array.isArray(arr2);
//   result = compareArrayLengths(arr1, arr2);
  
//   if (result) { // if result is still true at this point run the loop...
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         result = false;
//         return result; // if a mismatch is found exit the function
//       }
//     }
//   }
//   return result;
// };


// TEST CODE
// without([1, 2, 3], [1]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
// // assertArraysEqual test cases
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => Should PASS
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => Should PASS
// assertArraysEqual(without([12, 23, 43, 50, "dog"], ["12", 50, 0, "dog"]), [12, 23, 43]); // should pass
// assertArraysEqual(without([12, 23], []), [12, 23]); // should pass
// // Make sure the original array was not altered by the without function
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);