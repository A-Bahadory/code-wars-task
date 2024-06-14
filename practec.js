// const objMitch = {
//     "1p": 3,
//     "5p": 6,
//     "5p": 1
//     calc: function () {
//         this.sum = this."1p".split(" ");
//         console.log(this.sum)
//         return this.sum
//     },
// };
// objMitch.calc()
const objMitch = {
  "1p": 3,
  "5p": 6,
  "5p_1": 1,
  calc: function () {
    let sum = this["1p"];
    console.log(sum);
    return sum;
  },
};

console.log(objMitch.calc(), "sum");
