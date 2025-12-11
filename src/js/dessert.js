import { addToFavorites } from "./favorites.js";
import { generateRandomIndex } from "./utilities.mjs";

function renderDessertInfo(dessert) {

    document.querySelector("#individual-page-img").src = dessert.strMealThumb;
    document.querySelector("#individual-page-img").alt = `Image of ${dessert.strMeal}`;
    document.querySelector("#individual-page-dessert-name").textContent = `${dessert.strMeal}`;
    document.querySelector("#add-to-favorites-button").addEventListener("click", () => {addToFavorites(dessert)})
}

let desserts = JSON.parse(localStorage.getItem("desserts"));
console.log(desserts);

let randomDessert = desserts[generateRandomIndex()];
console.log(randomDessert);

async function getRecipeInfoById(dessert) {
    console.log(dessert.idMeal);
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dessert.idMeal}`);
    const data = await response.json();
    console.log(data);
}

renderDessertInfo(randomDessert);
getRecipeInfoById(randomDessert);