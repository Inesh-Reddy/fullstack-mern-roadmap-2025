//data
const nums = [1, 2, 3, 4, 5];

// iteration -1
// const doubledNums = nums.map((ele) => {
//   return ele * 2;
// });

// console.log(doubledNums);

// Iteration - 2
const doubleMe = (ele) => {
  return ele * 2;
};

const result = nums.map((ele) => {
  return doubleMe(ele);
});
console.log(result);
