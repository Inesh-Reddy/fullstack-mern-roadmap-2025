function multiplier(factor) {
  return (num) => {
    return num * factor;
  };
}

let double = multiplier(2);
let triple = multiplier(3);

console.log(double(10));
console.log(triple(3));
