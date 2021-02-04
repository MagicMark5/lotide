const map = (array, callback) => {
  const mapped = [];
  for (let item of array) {
    mapped.push(callback(item));
  }
  return mapped;
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

// TEST CODE
const vegeta = {};
const goku = {};
const picolo = {};
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [10, 20, 30, 40, 50];
const booleans = [false, false, true];
const dbz = [vegeta, goku , picolo];

const results1 = map(words, word => word[0]);
const results2 = map(numbers, num => num * 10);
const results3 = map(booleans, word => !word);
const results4 = map(dbz, (obj) => {
  obj.power = 9000;
  return obj;
});

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [100, 200, 300, 400, 500]);
assertArraysEqual(results3, [true, true, false]);
console.log(results4);
