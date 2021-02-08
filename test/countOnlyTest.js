const _ = require('../index');
const expect = require('chai').expect;

describe("#countOnly", () => {

  // Arguments used for it blocks
  const firstNames = [ 
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const namesToCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }; 

  it("returns 1 for a name to be counted that appears only once in array", () => {

    const howMany = _.countOnly(firstNames, namesToCount);
    expect(howMany['Jason']).to.equal(1);

  });

  it("returns undefined for a name to be counted that is not present in the array", () => {
    
    const howMany = _.countOnly(firstNames, namesToCount);
    expect(howMany['Karima']).to.equal(undefined);

  });

  it("returns 2 for a name to be counted that appears twice in the array", () => {
    
    const howMany = _.countOnly(firstNames, namesToCount);
    expect(howMany['Fang']).to.equal(2);
    
  });

  it("returns undefined for a name not to be counted that is present in the array", () => {
    
    const howMany = _.countOnly(firstNames, namesToCount);
    expect(howMany['Agouhanna']).to.equal(undefined);
    
  });

});