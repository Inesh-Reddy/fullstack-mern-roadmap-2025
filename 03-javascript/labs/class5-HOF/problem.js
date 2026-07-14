const transactions = [1, 2, 3, -120, 234, 4, -64, 45];

// convert the positive trxs to USD
const filterPositive = (ele) => {
  return ele > 0;
};
const reduceToSumWithConversion = (acc, ele) => {
  return acc + ele * 90;
};
const convertToUSD = (ele) => {
  return ele * 90;
};
const result = transactions
  .filter((ele) => {
    return filterPositive(ele);
  })
  .map((ele) => {
    return convertToUSD(ele);
  });

console.log(result);
