function calculate(day) {
  var rent = 40;
  if (day >= 7) {
    return day * rent - 50;
  } else if (day >= 3) {
    return day * rent - 20;
  } else {
    return day * rent;
  }
}
console.log(calculate(2));
console.log(calculate(4));
console.log(calculate(6));
console.log(calculate(7));
