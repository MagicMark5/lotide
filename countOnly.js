// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  
  for (const item of allItems) {
    if (itemsToCount[item]) { // itemsToCount keys are booleans: true if it is to be counted, false if not
      if (results[item]) { // if accessing the properties value returns true (it has been defined)
        results[item]++; // then increment it
      } else {
        results[item] = 1; // if it's not defined assign it a count (starting at one)
      }
    }
  }
  return results;
};

module.exports = countOnly;