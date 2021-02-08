const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  let foundKey;
  // Loop through the keys on the object argument
  // Test the value of each key against the val argument with a conditional
  // If they match reassign foundKey and return it right away (only return first match)
  for (const key of Object.keys(obj)) {
    if (obj[key] === val) {
      foundKey = key;
      return foundKey;
    }
  }
};

module.exports = findKeyByValue;

// TestCode
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  anime: "death note",
  action: 24
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "death note"), "anime");
// assertEqual(findKeyByValue(bestTVShowsByGenre, " "), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, 24), "action");
