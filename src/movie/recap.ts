import { movies } from "./data";

// let copiedMovies: Movie[] = [...movies];
// console.log(copiedMovies);

// type Movie = [string, string, string, string, string[], string];

// const movie_gallery = document.getElementById(
//   "movie_gallery"
// ) as HTMLDivElement;
// console.log(movie_gallery);

// function showMovies(moviesInput: Movie[]) {
//   moviesInput.forEach((movie) => {
//     const card = document.createElement("div") as HTMLElement;
//     const title = document.createElement("h2") as HTMLElement;
//     title.textContent = movie[0];

//     card.appendChild(title);
//     movie_gallery.appendChild(card);
//   });
// }

let copiedMovies: Movie[] = [...movies];

type Movie = [string, string, string, string, string[], string];

const movie_gallery = document.getElementById("movie_gallery") as HTMLElement;

function showMovies(moviesInput: Movie[]) {
  moviesInput.forEach((movie) => {
    const card = document.createElement("div") as HTMLElement;

    // * title
    const title = document.createElement("h2") as HTMLElement;
    title.textContent = movie[0];
    card.appendChild(title);

    // * year
    const year = document.createElement("p") as HTMLElement;
    year.textContent = movie[1];
    card.appendChild(year);

    // * director
    const director = document.createElement("p") as HTMLElement;
    director.textContent = movie[2];
    card.appendChild(director);

    // * duration
    const duration = document.createElement("p") as HTMLElement;
    duration.textContent = movie[3];
    card.appendChild(duration);

    // * Genre
    if (Array.isArray(movie)) {
      const ulList = document.createElement("ul") as HTMLElement;
      movie[4].forEach((genre) => {
        const liGenre = document.createElement("li") as HTMLElement;
        liGenre.textContent = genre;
        ulList.appendChild(liGenre);
      });
      card.appendChild(ulList);
    }

    // * Rate
    const rate = document.createElement("p") as HTMLElement;
    rate.textContent = movie[5];
    card.appendChild(rate);

    movie_gallery.appendChild(card);
  });
}

showMovies(movies);

function resetDom() {
  movie_gallery.innerHTML = "";
}

const searchInput = document.getElementById("search_input") as HTMLInputElement;
const searchButton = document.getElementById(
  "search_button"
) as HTMLButtonElement;

function searchMovieFunction() {
  const filteredMovie = copiedMovies.filter((movie) => {
    return movie[0].toLowerCase().includes(searchInput.value.toLowerCase());
  });
  resetDom();
  showMovies(filteredMovie);
}

searchButton && searchButton.addEventListener("click", searchMovieFunction);

//? Year Up

function sortYearUp() {
  resetDom();
  copiedMovies.sort((yearA, yearB) => {
    return parseInt(yearA[1]) - parseInt(yearB[1]);
  });
  showMovies(copiedMovies);
}

//? Elvis Operator
document?.getElementById("sortYearUp")?.addEventListener("click", sortYearUp);
