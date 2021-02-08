const countLetters = function(string) {

  const makeLowerCase = function(string) {
    return string.toLowerCase();
  };
  
  const removeWhiteSpace = function(string) {
    let noSpaceString = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== " ") {
        noSpaceString += string[i];
      }
    }
    return noSpaceString;
  };

  const countOfLetters = {};
  const onlyLowerCaseLetters = makeLowerCase(removeWhiteSpace(string)); // First call helper functions to process string
  // Loop through each character of the string argument
  // Add a property and increment values of countOfLetters object on each iteration
  for (const char of onlyLowerCaseLetters) {
    if (countOfLetters[char]) {
      countOfLetters[char]++; // if the character already exists in the count, increment it
    } else {
      countOfLetters[char] = 1; // if the character does not exist in the count, give it a count
    }
  }
  return countOfLetters;
};

module.exports = countLetters;


