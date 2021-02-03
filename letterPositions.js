const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
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

const makeLowerCase = function(string) {
  return string.toLowerCase();
};

const removeWhiteSpace = function(string) {
  let noSpaceString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      noSpaceString += string[i];
    }
  }
  return noSpaceString;
};

const letterPositions = function(sentence) {
  const characterIndices = {};
  const sentenceStr = makeLowerCase(removeWhiteSpace(sentence)); // First call helper functions to process string
  // Loop through each character of the sentence string argument
  // Add a property and update array index values of characterIndices object on each iteration
  for (let i = 0; i < sentenceStr.length; i++) {
    let char = sentenceStr[i]; // store a temp variable "char" to hold the current character to use as a key name
    if (characterIndices[char]) {
      characterIndices[char].push(i); // if the character already exists in the object, push the index to it
    } else {
      characterIndices[char] = [i]; // if the character does not exist in the count, give it an array with that index
    }
  }
  return characterIndices;
};

// Test code
const results1 = letterPositions("hello");
const results2 = letterPositions("My name is Adam Marsala");
assertArraysEqual(results1["h"], [0]);
assertArraysEqual(results1["l"], [2, 3]);
assertArraysEqual(results1["e"], [1]);
assertArraysEqual(results1["o"], [4]);
assertArraysEqual(results2["a"], [3, 8, 10, 13, 16, 18]);
