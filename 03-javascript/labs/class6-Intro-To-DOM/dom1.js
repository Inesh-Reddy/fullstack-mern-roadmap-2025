const fixTheMissingNumber = () => {
  const allElements = document.querySelectorAll("li");
  const targetElement = allElements[6];

  const newElementToInsert = document.createElement("li");
  newElementToInsert.innerText = 7;

  targetElement.parentNode.insertBefore(newElementToInsert, targetElement);
  allElements.forEach((ele) => {
    console.log(ele.innerText);
  });
};

const button = document.querySelector("button");
button.addEventListener("click", fixTheMissingNumber);
