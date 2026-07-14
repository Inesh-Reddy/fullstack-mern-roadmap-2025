//data
const nums = [1, 2, 3, 4, 5];

// iteration -1
// const doubledNums = nums.map((ele) => {
//   return ele * 2;
// });

// console.log(doubledNums);

// Iteration - 2
// const doubleMe = (ele) => {
//   return ele * 2;
// };

// const result = nums.map((ele) => {
//   return doubleMe(ele);
// });
// console.log(result);

// given the radius, print out the areas
const radius = [1, 2, 3, 4, 5];

const area = radius.map((ele) => {
  return Math.ceil(Math.PI * ele * ele);
});

console.log(area);
