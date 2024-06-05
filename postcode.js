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

function isLetter(char) {
  return (char >= "A" && char <= `Z`) || (char >= "a" && char <= "z");
}

function isDigit(char) {
  return char >= "0" && char <= "9";
}

function isValidBritishPostcode(parts) {
  if (parts.length !== 2) {
    return false;
  }

  let firstPart = parts[0];
  let secondPart = parts[1];

  // Validate the first part (1 or 2 letters followed by 1 or 2 digits)
  if (firstPart.length < 2 || firstPart.length > 4) {
    return false;
  }

  let i = 0;
  while (i < firstPart.length && isLetter(firstPart[i])) {
    i++;
  }

  if (i === 0 || i > 2) {
    return false;
  }

  let digitCount = 0;
  while (i < firstPart.length && isDigit(firstPart[i])) {
    i++;
    digitCount++;
  }

  if (digitCount === 0 || digitCount > 2 || i !== firstPart.length) {
    return false;
  }

  // Validate the second part (1 digit followed by 2 letters)
  if (secondPart.length !== 3) {
    return false;
  }

  if (!isDigit(secondPart[0])) {
    return false;
  }

  if (!isLetter(secondPart[1]) || !isLetter(secondPart[2])) {
    return false;
  }

  return true;
}

function isValidSlovakianPostcode(parts) {
  if (parts.length !== 2) {
    return false;
  }

  let firstPart = parts[0];
  let secondPart = parts[1];

  if (firstPart.length !== 3 || secondPart.length !== 2) {
    return false;
  }

  if (
    !firstPart.split("").every(isDigit) ||
    !secondPart.split("").every(isDigit)
  ) {
    return false;
  }
  return true;
}

function whichPostcode(postcode) {
  postcode = postcode.trim();

  let partsOfPostcode = postcode.split(" ");

  if (isValidBritishPostcode(partsOfPostcode)) {
    return "GB";
  }

  if (isValidSlovakianPostcode(partsOfPostcode)) {
    return "SK";
  }

  return "Not valid";
}
