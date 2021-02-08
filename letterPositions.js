const letterPositions = function(sentence) {
  
  const makeLowerCase = function(string) {
    return string.toLowerCase();
  };
  
  const characterIndices = {};
  const sentenceStr = makeLowerCase(sentence); // First call helper functions to process string
  // Loop through each character of the sentence string argument
  // Add a property and update array index values of characterIndices object on each iteration
  for (let i = 0; i < sentenceStr.length; i++) {
    if (sentenceStr[i] !== " ") {
      let char = sentenceStr[i]; // store a temp variable "char" to hold the current character to use as a key name
      if (characterIndices[char]) {
        characterIndices[char].push(i); // if the character already exists in the object, push the index to it
      } else {
        characterIndices[char] = [i]; // if the character does not exist in the count, give it an array with that index
      }
    }
  }
  return characterIndices;
};

module.exports = letterPositions;

