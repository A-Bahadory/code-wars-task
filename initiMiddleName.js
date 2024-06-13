// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).
function initializeNames(name) {
  const middleName = name.split(" ");
  console.log(middleName[0]);
}
console.log(initializeNames());
