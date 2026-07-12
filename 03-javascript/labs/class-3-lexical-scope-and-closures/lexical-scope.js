let city = "Hyderabad";
function outer() {
  let area = "Hi-tech";
  function inner() {
    let road = "MG Road";
    console.log(`${road} is printed, Since it is in local scope. `);
    console.log(
      `${area} is logged as it is in its parents scope {we can call it as lexical scope}`,
    );
    console.log(
      `${city} is printed becaise of lexical scope only, coz lexical scope starts from current block and all the way up to the global scope `,
    );
  }
  inner();
}

outer();
