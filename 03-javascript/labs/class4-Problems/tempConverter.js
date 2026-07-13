/***
 * Temperature converter
 *
 *  */

const fahremheitToCelcius = (cel) => {
  return Math.ceil((cel * 9) / 5 + 32);
};
const celciusToFahrenheit = (far) => {
  return Math.ceil(((far - 32) * 5) / 9);
};
const convertTemperature = (temp, conversionUnit) => {
  if (
    typeof temp !== "number" ||
    (conversionUnit !== "C" && conversionUnit !== "F")
  ) {
    return `Please enter valid input..`;
  } else {
    if (conversionUnit === "C") {
      return `${celciusToFahrenheit(temp)}° F`;
    } else {
      return `${fahremheitToCelcius(temp)}° C`;
    }
  }
};

console.log(convertTemperature(100, "C"));
