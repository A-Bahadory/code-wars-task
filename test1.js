function howManyDalmations(number) {
  var dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIONS!!!",
  ];

  var respond =
    number <= 10
      ? dogs[0]
      : number <= 50
      ? dogs[1]
      : number === 101
      ? dogs[3]
      : dogs[2];
  return respond;
}
console.log(howManyDalmations(26));
console.log(howManyDalmations(8));
console.log(howManyDalmations(14));
console.log(howManyDalmations(80));
console.log(howManyDalmations(100));
console.log(howManyDalmations(101));
