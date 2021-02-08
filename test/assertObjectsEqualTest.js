const assertObjectsEqual = require('../assertObjectsEqual');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => assertion should pass

const abc = { a: "1", b: false, c: "3" };
assertObjectsEqual(ab, abc); // => assertion should fail