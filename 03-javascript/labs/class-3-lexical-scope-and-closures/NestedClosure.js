let value = "Global";

function outer() {
  let value = "Outer";

  function middle() {
    let value = "Middle";

    return function inner() {
      console.log(value);

      value++;

      console.log(value);
    };
  }

  return middle;
}

const middleFn = outer();

const innerFn1 = middleFn();

const innerFn2 = middleFn();

innerFn1();
innerFn1();
innerFn2();
