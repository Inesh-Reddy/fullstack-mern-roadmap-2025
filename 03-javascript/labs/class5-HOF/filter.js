// //filter out the even numbers

// const nums = [1, 2, 6, 8, 2, 4, 9, 3, 4, 5, 6, 7, 8];

// const callback = (ele) => {
//   return ele % 2 === 0;
// };

// const filteredArray = nums.filter((ele) => callback(ele));

// console.log(filteredArray);

// filter out the positive numbers

const transactions = [1, -2, 3, -4, 5, -6, -7];

const filterTransactions = (ele) => {
  return ele > 0;
};

const result = transactions.filter((ele) => {
  return filterTransactions(ele);
});

console.log(result);
