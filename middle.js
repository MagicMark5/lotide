const middle = function(arr) { // Takes in array and returns an array of middle element(s)
  let middle = [];
  let middleIndex = Math.floor(arr.length / 2);
  if (arr.length > 2) {
    middle = arr.length % 2 === 0 ? arr.slice(middleIndex - 1, middleIndex + 1) : arr.slice(middleIndex, middleIndex + 1);
  }
  return middle;
};

module.exports = middle;

