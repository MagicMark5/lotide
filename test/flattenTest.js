const _ = require('../index');
const expect = require('chai').expect;

describe("#flatten", () => {

  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {

    const result = _.flatten([1, 2, [3, 4], 5, [6]]);
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6]);

  });

  it("returns [1, 2, 3, 4, 5, 6, 5, 6] for [1, 2, [3, 4, 5, 6], 5, [6]]", () => {
    
    const result2 = _.flatten([1, 2, [3, 4, 5, 6], 5, [6]]);
    expect(result2).to.deep.equal([1, 2, 3, 4, 5, 6, 5, 6]);

  });

  it("returns [1, 2, 'three', 'four', 5, 6] for [1, 2, ['three', 'four'], 5, [6]]", () => {
    
    const result3 = _.flatten([1, 2, ["three", "four"], 5, [6]]);
    expect(result3).to.deep.equal([1, 2, "three", "four", 5, 6]);
    
  });

});