// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function smallestPositive(a) {
  const positiveInteger = Array.from(new Set(a.filter((x) => x > 0)));
  let smallestPositiveNumber = 1;

  while (positiveInteger.includes(smallestPositiveNumber)) {
    smallestPositiveNumber++;
  }
  return smallestPositiveNumber;
}

const testArray = [-1, -3];
// console.log(smallestPositive(testArray));

//const str = ;
const charArray = Array.from(testArray);
console.log(smallestPositive(testArray));
