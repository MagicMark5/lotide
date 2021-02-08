const _ = require('../index');
const expect = require('chai').expect;

describe("#letterPositions", () => {

const results1 = _.letterPositions("hello");
const results2 = _.letterPositions("My name is Adam Marsala");
const results3 = _.letterPositions("lighthouse in the house");
  
  it("expect [0] for checking the first character of a string that appears once", () => {

    expect(results1['h']).to.deep.equal([0]);

  });

  it("expect [2, 3] for checking a character that appears only at indices 2 and 3", () => {

    expect(results1['l']).to.deep.equal([2, 3]);

  });

  it("expect [4, 11, 13, 17, 20, 22] for a character that appears 6 times in a sentence with whitespace (not counting whitespace)", () => {

    expect(results2['a']).to.deep.equal([4, 11, 13, 17, 20, 22]);

  });

  it("returns undefined for a character not present in the string", () => {
    
    expect(results3['z']).to.equal(undefined);
    
  });

});