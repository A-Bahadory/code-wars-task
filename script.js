function oppositeHouse(n, house) {
  if (house % 2 === 0) {
    // Even house number
    return n * 2 - house + 1;
  } else {
    // Odd house number
    return n * 2 - house + 2;
  }
}

// const n = 3;
// const yourHouse = 1;
// const oppositeHouseNumber = oppositeHouse(n, yourHouse);
// console.log("Opposite house number:", oppositeHouseNumber);
console.log(oppositeHouse(2, 3));
