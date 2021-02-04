const findKey = (object, callback) => {
  let foundKey;  
  for (const key of Object.keys(object)) {
    if (callback(object[key])) {
      foundKey = key;
      return foundKey;
    }
  }
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

const result2 = findKey({
  "vegeta": 9000, 
  "goku": 8000, 
  "picolo": 7000
}, x => x === 9000);

const result3 = findKey({
  a: "",
  b: false, 
  c: 0,
  d: undefined,
  e: "hello"
}, x => x)

const result4 = findKey({ 
  a: 1, 
  b: 2, 
  adam: { "quality": "is awesome"} 
}, x => x.quality === "is awesome");

assertEqual(result1, "noma");
assertEqual(result2, "vegeta");
assertEqual(result3, "e");
assertEqual(result4, "adam");