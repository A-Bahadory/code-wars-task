let p = new Promise((resolve, reject) => {
  let a = 1 + 3;
  if (a == 2) {
    resolve("!");
  } else {
    reject(" rejected code!");
  }
});
// then catch code from (resolve) state if it is tur
// catch run when cod was not successful (reject)
p.then((message) => {
  console.log("this is the in then " + message);
}).catch((message) => {
  console.log("this is in the catch " + message);
});
