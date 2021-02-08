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

