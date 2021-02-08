const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

// Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const result1 = eqObjects(ab, ba); // => true
assertEqual(result1, true);

const abc = { a: "1", b: false, c: "3" };
const result2 = eqObjects(ab, abc); // => false
assertEqual(result2, false);

const cd1 = { c: "2", d: "1" };
const result3 = eqObjects(ab, cd1); // => false
assertEqual(result3, false);

const de = { a: "1", b: false, c: "3"};
const result4 = eqObjects(abc, de); // => true
assertEqual(result4, true);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const result5 = eqObjects(cd, dc); // => true
assertEqual(result5, true);

const cd2 = { c: "1", d: ["2", 3, 4] };
const result6 = eqObjects(cd, cd2); // => false
assertEqual(result6, false);


// Test code for nested objects
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
assertEqual(eqObjects({
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
}, {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
}), true); // => true

assertEqual(eqObjects({
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file", // difference is here
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
}, {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "two files", // difference is here
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
}), false); // => false