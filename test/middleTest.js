const assert = require('chai').assert;
const middle = require('../middle');

// Test Code assertions

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); 
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]); 
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
  });
  it("returns ['30', '40'] for [10, 20, '30', '40', 5, 6]", () => {
    assert.deepEqual(middle([10, 20, "30", "40", 5, 6]), ["30", "40"]); 
  });
  it("returns [20] for [1, 2, 3, 4, 20, '30', '40', 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 20, "30", "40", 5, 6]), [20]); 
  });
});