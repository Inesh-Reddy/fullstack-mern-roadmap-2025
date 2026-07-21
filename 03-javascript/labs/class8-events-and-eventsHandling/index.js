const genre = document.querySelector("select");
const movies = document.querySelectorAll(".movies");

const changehandler = (e) => {
  movies.forEach((movie) => {
    movie.hidden =
      e.target.value !== "none" && movie.dataset.category !== e.target.value;
  });
};

genre.addEventListener("change", (e) => {
  changehandler(e);
});
