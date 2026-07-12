let x = 100;

function A() {
  let x = 10;

  function B() {
    let y = 20;

    function C() {
      console.log(x);
      console.log(y);
    }

    return C;
  }

  return B();
}

const fn = A();

fn();
