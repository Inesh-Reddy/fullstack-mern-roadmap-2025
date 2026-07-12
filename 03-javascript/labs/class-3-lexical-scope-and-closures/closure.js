function grandParent() {
  let granda = 20;
  function parent() {
    let a = 10;
    function child() {
      return `From innner function returning values : ${a}, ${granda}`;
    }
    return child;
  }
  return parent;
}

let result1 = grandParent();
console.log(result1);
let result2 = result1();
console.log(result2);
console.log(result2());
