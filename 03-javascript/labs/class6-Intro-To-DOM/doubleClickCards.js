/****
 * 1. Select all the cards
 * 2. Take the custom attribute
 * 3. Add custom att as class att to get the styles to get reflected
 */
const handleCards = (e) => {
  console.log(e);
};
const allCards = document.querySelectorAll(".card");

allCards.forEach((ele) => {
  ele.addEventListener("dblclick", (e) => {
    const classToBeAttached = e.target.getAttribute("data-color");
    e.target.classList.toggle(classToBeAttached);
  });
});
