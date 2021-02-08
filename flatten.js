const flatten = function(nestedArr) { // takes a nested array and returns a non-nested array
  // only handles one level of nesting
  let flattened = [];
  for (let i = 0; i < nestedArr.length; i++) {
    if (Array.isArray(nestedArr[i])) { // checks if element in index is an array
      for (let item of nestedArr[i]) { // if true, loop through that array and push its contents
        flattened.push(item);
      }
    } else {
      flattened.push(nestedArr[i]); // if the element is not an array just push the element
    }
  }
  return flattened;
};

module.exports = flatten;


