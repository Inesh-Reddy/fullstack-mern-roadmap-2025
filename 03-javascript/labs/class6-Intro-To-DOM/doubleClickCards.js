/****
 * 1. Select all the cards
 * 2.
 */
const handleCards = (e) => {
  console.log(e);
};
const allCards = document.querySelectorAll(".card");

allCards.forEach((ele) => {
  ele.addEventListener("dblclick", (e) => {
    // taking the custom attribute
    const classToBeAttached = e.target.getAttribute("data-color");
    // adding the custom attribute as class attribute
    e.target.classList.toggle(classToBeAttached);
  });
});
