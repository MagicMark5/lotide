const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let arrTail = arr.slice(1);
  return arrTail;
};

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
// You could also just use .join() on both arrays you are comparing in the assertEqual call
assertEqual(result.join(), ["Lighthouse", "Labs"].join());

// Test Case 2: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 3: Array with one element should return an empty array
const word = ["hello"];
assertEqual(tail(word).join(), [].join());

// Test Case 4: An empty array should return an empty array for its tail
const empty = [];
assertEqual(tail(empty).join(), [].join());
