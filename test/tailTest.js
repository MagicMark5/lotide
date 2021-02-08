const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("Array with one element should return an empty array", () => {
    assert.deepEqual(tail([1]), []); 
  });
  it("Original array should have the same length", () => {
    const nums = [1, 2, 3];
    tail(nums);
    assert.equal(nums.length, 3); 
  });
  it("An empty array should return an empty array for its tail", () => {
    assert.deepEqual(tail([]), []); 
  });
});