const _ = require('../index');
const expect = require('chai').expect;

describe("#findKeyByValue", () => {

  // Arguments used for expect calls
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire",
    anime: "death note",
    action: 24
  };

  it("should return the correct key given a string value present in the object argument", () => {

    expect(_.findKeyByValue(bestTVShowsByGenre, "The Wire")).to.equal("drama");

  });

  it("should return the undefined given a value NOT present in the object argument", () => {

    expect(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show")).to.equal(undefined);

  });

  it("should return the undefined given an empty string not present in the object argument", () => {
    
    
    expect(_.findKeyByValue(bestTVShowsByGenre, " ")).to.equal(undefined);
    
  });

  it("should return the correct key given a number value present in the object argument", () => {
    
    expect(_.findKeyByValue(bestTVShowsByGenre, 24)).to.equal("action");
    
  });

});