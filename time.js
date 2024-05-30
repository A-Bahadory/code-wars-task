//Clock shows h hours, m minutes and s seconds after midnight.

//Your task is to write a function which returns the time since midnight in milliseconds.
function past(h, m, s) {
  const hs = h * 60 * 60; // output 60 minutes
  const min = m * 60; //output 60 secund
  const second = s + min + hs;
  return second * 1000;
}
console.log(past(1, 0, 0));
