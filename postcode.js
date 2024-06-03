// Task
// Write a function called which_postcode/whichPostcode that takes a string, and determines whether it represents a British or Slovakian postcode.
// If the string is a valid British postcode, return "GB". If it's a valid Slovakian postcode, return "SK". If the input is neither a valid British nor a valid Slovakian postcode, return "Not valid".

// Leading and trailing spaces should be ignored, but if there are spaces in wrong place in the middle of the postcode, then it is invalid.

// The input will always be a valid British postcode, a valid Slovakian postcode or an invalid postcode.

// British Postcodes
// To be considered valid, a British postcode must follow the rules below:

// Consists a mix of letters and numbers, separated to two segments by a single space.
// First segment must start with either 1 or 2 letters, followed by 1 or 2 numbers. Example: G4, G40, DN4 or DN11
// Second segment must start with a number, followed by 2 letters. Example: 1AB
// British postcodes are not case-sensitive, so Se21 7aA is a valid postcode.

// Slovakian Postcodes
// Consists of 5 numbers, where the first 3 are separated by a space from the last 2 numbers. Example: 123 45

function whichPostcode(postcode) {
  let splitInTwo = postcode.split(" ");
  let arr = [];
  let arr2 = [];
  const arrValue = arr.push(splitInTwo[0]);
  const arrTwoValue = arr2.push(splitInTwo[1]);
  //   if (postcode) {
  //     for (let i = 0; i < splitInTwo.length; i++) {
  //       const getIndex = (splitInTwo[i] = splitInTwo[0]);
  //       const getIndexTwo = (splitInTwo[i] = splitInTwo[1]);
  //       arr.push(getIndex);
  //       arr2.push(getIndexTwo);
  //       return arr;
  //     }
  //   }

  return arrValue;
}

console.log(whichPostcode("WS5 9DH")); // -> Returns "GB"
