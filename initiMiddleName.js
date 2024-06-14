// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).
// function initializeNames(name) {
//   const middleName = name.split(" ");
//   if (middleName.length === 1) {
//     return middleName[0];
//   } else if (middleName.length === 2) {
//     return `${middleName[0]} ${middleName[1]}`;
//   } else if (middleName.length === 3) {
//     return `${middleName[0]} ${middleName[1].charAt(0)}. ${middleName[2]}`;
//   } else if (middleName.length === 4) {
//     return `${middleName[0]} ${middleName[1].charAt(0)}. ${middleName[2].charAt(
//       0
//     )}. ${middleName[3]}`;
//   }
// }

//console.log(initializeNames(lastName));

// Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

// function initializeNames(name) {
//   let namesArr = name.split(" ");
//   if (namesArr.length > 2) {
//     for (let i = 1; i < namesArr.length - 1; i++) {
//       namesArr[i] = `${namesArr[i][0]}.`;
//     }
//     return namesArr.join(" ");
//   }
//   return namesArr.join(" ");
// }

function initializeNames(name) {
  const middleName = name.split(" ");
  console.log(middleName);
  if (middleName.length > 2) {
    for (let i = 1; i < middleName.length - 1; i++) {
      middleName[i] = `${middleName[i].charAt(0)}.`;
    }
    return middleName.join(" ");
  }
  return middleName.join(" ");
}
const lastName = "Alice Betty catherine bahador Davis";

//console.log(initializeNames(lastName));

const testArr = ["Alice", "Betty", "catherine", "bahador", "Davis"];

console.log(testArr.length);
for (let i = 1; i < testArr.length - 1; i++) {
  console.log(`length:${testArr.length} and Index: ${testArr[i]}`);

  // console.log(testArr.length <= from < 0, fromIndex + testArr.length);
}

const testObject = [
  {
    id: "school",
    key: 22,
  },
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "staphili" },
  {
    id: "unlocked me!",
    name: "Joe",
    id: 22,
    name: "Joe",
  },
];
const changeKey = (testObject[0].key = "not key");
console.log(changeKey);
const getIndex = testObject.findIndex((index) => (index.id = 22));
const staphiliObjectIndex = testObject.findIndex(
  (index) => index.name === "staphili"
);
//console.log(`${getIndex} staph: ${staphiliObjectIndex}`);
// const lockTheDoor = testObject.findIndex(
//   (index) => index.id === "unlocked me!"
// );
const locker = testObject.findIndex((index) => index.name === "Joe");
const changeName = (testObject[4].name = "not name");
console.log(locker, "looker index");
console.log(changeName);
