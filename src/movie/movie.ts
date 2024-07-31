import { movies } from "./data";

console.log("Movie", movies);

// const movie = movies[0];

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
document.getElementById("yearup")?.addEventListener("click", function () {
  movies.sort((a, b) => {
    return Number(a[1]) - Number(b[1]);
  });
  createMovieElement(movies);
});

document.getElementById("yeardown")?.addEventListener("click", function () {
  movies.sort((a, b) => {
    return Number(b[1]) - Number(a[1]);
  });
  createMovieElement(movies);
});

document.getElementById("bestrate")?.addEventListener("click", function () {
  movies.sort((a, b) => {
    return Number(b[5]) - Number(a[5]);
  });
  createMovieElement(movies);
});

//Filter movies
document.getElementById("moviesubmit")?.addEventListener("click", function (e) {
  e.preventDefault();
  const elementHtml = document.getElementById("movie") as HTMLInputElement;
  const value = elementHtml?.value || "";
  console.log(value);
  const filteredMovies = movies.filter((movie) => {
    return movie[0].toLowerCase().includes(value.toLowerCase());
  });
  createMovieElement(filteredMovies);
});

function createMovieElement(
  movies: [string, string, string, string, string[], string][]
) {
  if (!movieContainer) {
    return;
  }
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
    ersteDiv.style.backgroundColor = "#d6e284";
    ersteDiv.style.width = "50%";
    ersteDiv.style.height = "50%";
    ersteDiv.style.borderRadius = "10px";
    ersteDiv.style.padding = "10px";

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
