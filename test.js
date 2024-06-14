// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.
//arrayDiff([1, 2], [1]) == [2];
//If a value is present in b, all of its occurrences must be removed from the other:
//arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3];

//steps
//1 function should remove one list from another
// 2 keep them in order
// 3 if value percent in A all occurrences must remove from B

function difference(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
    } else if (a[i] !== b[i]) {
      return a, b;
    }
  }
}

function difference(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      result.push(a[i]);
    }
  }

  // Return the result array
  return result;
}

console.log(difference([1, 2, 2, 2, 3], [2]));
