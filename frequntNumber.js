function mode(arr) {
  return arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    )
    .pop();
}

//console.log(mode([15, 17, 19, 21, 21, 21, 20, 16]));

var forecast_01 = {
  temperature: [
    [15, 17, 19, 21, 21, 21, 20, 16],
    [16, 17, 22, 22, 22, 22, 20, 16],
    [12, 17, 19, 20, 20, 20, 20, 18],
    [14, 15, 19, 19, 20, 22, 18, 17],
    [15, 17, 24, 24, 24, 20, 20, 20],
  ],
};

let temperatures = [].concat(...forecast_01.temperature);
console.log(temperatures);
