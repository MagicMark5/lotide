const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');
// Test Code
const result1 = countLetters("lighthouse in the house");
const myName = countLetters("Adam Marsala");

assertEqual(result1["l"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["e"], 3);
assertEqual(result1["n"], 1);
assertEqual(myName["a"], 5);