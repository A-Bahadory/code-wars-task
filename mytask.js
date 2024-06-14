//Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

//Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

function findMissing(arr1, arr2) {
  obj = {};
  arr1.forEach((num) => {
    if (obj[num]) {
      console.log(arr1[num]);
      obj[num] += 1;
    } else {
      obj[num] = 1;
      arr1[num];
      //console.log("obj num -->", obj[num]);
    }
  });
  return obj;
}

//find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
//find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
const array = [6, 2, 3, 2, 4, 5, 4, 5];
//console.log(array[2]);
//console.log('missing array -->',findMissing(array))
//const duplicates = arr1.filter((item, index) => arr1.indexOf(item) !== index);
//console.log(duplicates);

// arr1.filter(function (v) {
//   return !arr2.includes(v);
// });

// function findMissing(arr1, arr2) {
//   const sum = arr1.reduce((a, b) => a + b);
//   const sum2 = arr2.reduce((a, b) => a + b);
//   //arr2.reduce((a, b) => a + b);
//   //const sum2 = sum(arr2);
//   return sum - sum2;
// }

// function findMissing(arr1, arr2) {
//   const sum = arr1.reduce((a, b) => a + b);
//   arr2.reduce((a, b) => a + b);
//   console.log(typeof sum);
//   return arr1 - arr2;
// }

//console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2])); // Output: 8

//const arr1 = [6, 1, 3, 6, 8, 2];
//const arr2 = [3, 6, 6, 1, 2];

// function sum(sum1, sum2) {
//   return sum1 + sum2;
// }
// const totalArr1 = arr1.reduce(sum);
// const totalArr2 = arr2.reduce(sum);
//console.log(totalArr1 - totalArr2);f
const newTill = {
  "1p": 2,
  "3p": 5,
  "4p": 6,
};

// Object.entries(obj).forEach(([key, value]) => {
//   console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
// });

function till(obj) {
  let sum = 0;
  for (const [key, value] of Object.entries(obj)) {
    //get numbers from the keys
    const keyValue = key.split("");
    const coinValue = keyValue[0] * value;
    sum = sum + coinValue;
    console.log("sum", sum);
    //console.log(keyValue[0] * value);
  }
  sum = sum / 100;
  return `$${sum}`;
}
const objMitch = { "1p": 3, "5p": 6, "5p": 1 };
// i have 3 coin in total 1p and 1 2p and 1 5p;
console.log(till(objMitch));
