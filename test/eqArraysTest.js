const _ = require('../index');
const expect = require('chai').expect;

describe("#eqArrays", () => {

  it("should return true for two arrays of the same length with identical element values", () => {

    expect(_.eqArrays([1, 2, 3], [1, 2, 3])).to.equal(true);

  });

  it("should return false for comparing an array with an identical string", () => {

    expect(_.eqArrays("[1, 2, 3]", [1, 2, 3])).to.equal(false);

  });

  it("should return false for comparing two arrays with different lengths", () => {
    
    
    expect(_.eqArrays([1, 2, 3], [1, 2, 3, 4])).to.equal(false);
    
  });

  it("should return false for comparing two arrays with values of different data types", () => {
    
    expect(_.eqArrays([1, "2", 3], [1, 2, 3])).to.equal(false);
    
  });

  it("should return true for identical nested arrays", () => {
    
    expect(_.eqArrays([[2, 3], [4]], [[2, 3], [4]])).to.equal(true);
    
  });

  it("should return false for non-identical nested arrays", () => {
    
    expect(_.eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])).to.equal(false);
    
  });

  it("should return true for multi-layered identical nested arrays", () => {
    
    expect(_.eqArrays([[2, 3, [1, [2], 3], 10], [4]], [[2, 3, [1, [2], 3], 10], [4]])).to.equal(true);
    
  });

  it("should return false for multi-layered non-identical nested arrays", () => {
    
    expect(_.eqArrays([[2, 3, [1, [2], 3], 10], [4]], [[2, 3, [1, [20], 3], 10], [4]])).to.equal(false);
    
  });

});