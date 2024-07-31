import { movies } from "./data";

console.log("Movie", movies);
console.log("hvbcjeh");

// const movie = movies[0];

const container = document.getElementById("container");
const movieContainer = document.getElementById("movieContainer");

// container.innerHTML = `
// <h1>${movie[0]}</h1>
// <h1>${movie[1]}</h1>
// <h1>${movie[2]}</h1>
// <h1>${movie[3]}</h1>
// <h1>${movie[4]}</h1>
// <h1>${movie[5]}</h1>
// `;

// sort movies
const sortYearUp = document
  .getElementById("yearup")
  .addEventListener("click", function () {
    movies.sort((a, b) => {
      return Number(a[1]) - Number(b[1]);
    });
    createMovieElement(movies);
  });

function createMovieElement(movies) {
  movieContainer.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const ersteDiv = document.createElement("div");
    const ersteH = document.createElement("h1");
    const zweiteH = document.createElement("h1");
    const dritteH = document.createElement("h1");
    const vierteH = document.createElement("h1");
    const funfteH = document.createElement("h1");
    const sechsteH = document.createElement("h1");

    ersteH.textContent += "Title: " + movie[0];

    zweiteH.textContent += "Year: " + movie[1];
    dritteH.textContent += "Regisseur:in: " + movie[2];
    vierteH.textContent += "Spieldauer: " + movie[3];
    funfteH.textContent += "Genre: " + movie[4];
    sechsteH.textContent += "Bewertung: " + movie[5];
    ersteDiv.style.border = "1px solid black";
    console.log(ersteH);
    ersteDiv.appendChild(ersteH);
    ersteDiv.appendChild(zweiteH);
    ersteDiv.appendChild(dritteH);
    ersteDiv.appendChild(vierteH);
    ersteDiv.appendChild(funfteH);
    ersteDiv.appendChild(sechsteH);
    movieContainer.appendChild(ersteDiv);
  }
}
createMovieElement(movies);
