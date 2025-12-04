import { generateRandomIndex } from "./utilities.mjs";

// export async function loadDesserts() {
//   const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');
//   let data = await response.json();
//   console.log(data)

//   localStorage.setItem("desserts", JSON.stringify(data.meals));
// }

// loadDesserts();

let desserts = JSON.parse(localStorage.getItem("desserts"));

console.log(desserts[0]);

console.log(generateRandomIndex);

localStorage.setItem("favorites", []);