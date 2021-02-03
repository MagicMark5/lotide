const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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

const countLetters = function(string) {
  const countOfLetters = {};
  const onlyLowerCaseLetters = makeLowerCase(removeWhiteSpace(string)); // First call helper functions to process string
  // Loop through each character of the string argument
  // Add a property and increment values of countOfLetters object on each iteration
  for (const char of onlyLowerCaseLetters) {
    if (countOfLetters[char]) {
      countOfLetters[char]++; // if the character already exists in the count, increment it
    } else {
      countOfLetters[char] = 1; // if the character does not exist in the count, give it a count
    }
  }
  return countOfLetters;
};

// Test Code
const result1 = countLetters("lighthouse in the house");
const myName = countLetters("Adam Marsala");

assertEqual(result1["l"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["e"], 3);
assertEqual(result1["n"], 1);
assertEqual(myName["a"], 5);
