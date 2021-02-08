const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');
// TEST CODE

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays("[1, 2, 3]", [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([1, "2", 3], [1, 2, 3]), false); // => should PASS

// TEST CODE FOR SUB-ARRAYS (NESTED) WITH RECURSION
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
assertEqual(eqArrays([[2, 3, [1, [2], 3], 10], [4]], [[2, 3, [1, [2], 3], 10], [4]]), true);
assertEqual(eqArrays([[2, 3, [1, [2], 3], 10], [4]], [[2, 3, [1, [20], 3], 10], [4]]), false);