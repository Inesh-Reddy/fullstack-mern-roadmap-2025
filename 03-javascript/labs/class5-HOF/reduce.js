// count sum of ele from an array

const transactions = [1, 2, 3];

const findSum = (acc, ele) => {
  return acc + ele;
};

const findMax = (acc, ele) => {
  return acc > ele ? acc : ele;
};

const result = transactions.reduce((acc, ele) => {
  return findMax(acc, ele);
}, transactions[0]);

console.log(result);
