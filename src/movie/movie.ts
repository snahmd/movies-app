import { movies } from "./data";

console.log("Movie", movies);
console.log("hvbcjeh");

const movie = movies[0];

const container = document.getElementById("container");

// container.innerHTML = `
// <h1>${movie[0]}</h1>
// <h1>${movie[1]}</h1>
// <h1>${movie[2]}</h1>
// <h1>${movie[3]}</h1>
// <h1>${movie[4]}</h1>
// <h1>${movie[5]}</h1>
// `;

for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];
  container.innerHTML += `
  <h1>${movie[0]}</h1>
  <h1>${movie[1]}</h1>
  <h1>${movie[2]}</h1>
  <h1>${movie[3]}</h1>
  <h1>${movie[4]}</h1>
  <h1>${movie[5]}</h1>
  <hr>
  `;
}
