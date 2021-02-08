const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// Test Code assertions
assertArraysEqual(middle([1]), []); // => Should PASS
assertArraysEqual(middle([1, 2]), []); // => Should PASS
assertArraysEqual(middle([1, 2, 3]), [2]); // => Should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => Should PASS
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => Should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => Should PASS
assertArraysEqual(middle([10, 20, "30", "40", 5, 6]), ["30", "40"]); // => Should PASS
assertArraysEqual(middle([1, 2, 3, 4, 20, "30", "40", 5, 6]), [20]); // => Should PASS