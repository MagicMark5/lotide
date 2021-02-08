const _ = require('../index');
const expect = require('chai').expect;


describe("#eqObjects", () => {

  // Example variables for testing
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: false, c: "3" };
  const cd1 = { c: "2", d: "1" };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };
  const nest1 = { a: { z: 1 }, b: 2 };
  const nest2 = { a: { z: 1 }, b: 2 };
  const nest3 = { a: { y: 0, z: 1 }, b: 2 };
  const office1 = {
      "desk": {
        "drawer": "stapler"
      },
      "cabinet": {
        "top drawer": { 
          "folder1": "a file", // here is the difference between office1 and 2
          "folder2": "secrets"
          },
        "bottom drawer": "soda"
      } 
    };
  const office2 = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "two files", // here is the difference between office1 and 2
        "folder2": "secrets"
        },
      "bottom drawer": "soda"
    } 
  };
  const officeOne = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file", // same as office1
        "folder2": "secrets"
        },
      "bottom drawer": "soda"
    } 
  };

  it("should return true for two objects with identical key/value pairs listed in different order", () => {

    expect(_.eqObjects(ab, ba)).to.equal(true);

  });

  it("should return false for two objects with a different number of keys", () => {

    expect(_.eqObjects(ab, abc)).to.equal(false);

  });

  it("should return false for objects with identical values but different key names", () => {

    expect(_.eqObjects(ba, cd1)).to.equal(false);

  });

  it("should return true for objects with identical non-primitive values", () => {

    expect(_.eqObjects(cd, dc)).to.equal(true);

  });

  it("should return false for objects with non-identical non-primitive values", () => {

    expect(_.eqObjects(cd, cd2)).to.equal(false);

  });

  it("should return true for objects with identical nested object values", () => {

    expect(_.eqObjects(nest1, nest2)).to.equal(true);

  });

  it("should return false for objects with non-identical nested object values", () => {

    expect(_.eqObjects(nest3, nest2)).to.equal(false);

  });

  it("should return true for deep nested objects with identical values", () => {

    expect(_.eqObjects(office1, officeOne)).to.equal(true);

  });

  it("should return false for deep nested objects with non-identical values", () => {

    expect(_.eqObjects(office1, office2)).to.equal(false);

  });

});