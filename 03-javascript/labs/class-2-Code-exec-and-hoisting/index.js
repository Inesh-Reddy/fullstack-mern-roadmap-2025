// 1
sayHi(); // Function hoisting precedence

// Function hoisitng
function sayHi() {
  console.log("hi");
}

// variable hoisting
var sayHi = function () {
  console.log("hello");
};

sayHi();
