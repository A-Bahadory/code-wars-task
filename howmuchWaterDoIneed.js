// My washing machine uses water amount of water to wash load (in JavaScript and Python) amount of clothes.
//You are given a clothes amount of clothes to wash.
// For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.

// For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.

// Write a function howMuchWater to work out how much water is needed if you have a clothes amount of clothes.
// The function will accept 3 arguments: - water, load and clothes.

// My washing machine is an old model that can only handle double the amount of load.
// If the amount of clothes is more than 2 times the standard amount of load , return 'Too much clothes'.
// The washing machine also cannot handle any amount of clothes less than load. If that is the case, return 'Not enough clothes'.

// The answer should be rounded to the nearest 2 decimal places.

function howMuchWater(water, load, clothes) {
  //const
  const calculateWater = water + load / 10;
  const maxModelCanHandle = load * 2;
  if (maxModelCanHandle < clothes) {
    return "Too much clothes";
  } else if (clothes < load) {
    return "Not enough clothes ";
  }
  return;
} // console.log(howMuchWater(10, 10, 21));
//console.log(howMuchWater(10, 11, 20));

//  step one -> Find out how many clothes are above the load (clothes - load)
//  step two -> For the clothes above the load add 10% to the water (load / 10)
//  step three ->

function howMuchWater2(water, load, clothes) {
  let calculateWater = (water * 11.1) ^ (clothes - load);
  clothes = 10;
  console.log(calculateWater);
  return calculateWater;
}
console.log("function 2", howMuchWater2(10, 11, 20));
