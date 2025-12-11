
import { addToFavorites, generateRandomIndex, getParam, getRecipeInfoById } from "./utilities.mjs";

const dessertId = getParam("dessertId");
const dessert = await getRecipeInfoById(dessertId);

function renderDessertInfo(dessert) {

    document.title = `Sweets Saver | ${dessert.strMeal}`

    document.querySelector("#individual-page-img").src = dessert.strMealThumb;
    document.querySelector("#individual-page-img").alt = `Image of ${dessert.strMeal}`;
    document.querySelector("#individual-page-dessert-name").textContent = `${dessert.strMeal}`;
    document.querySelector("#add-to-favorites-button").addEventListener("click", () => {addToFavorites(dessert)})
}

let desserts = JSON.parse(localStorage.getItem("desserts"));
// console.log(desserts);

// let randomDessert = desserts[generateRandomIndex()];
// console.log(randomDessert);

renderDessertInfo(dessert.meals[0]);
// getRecipeInfoById(randomDessert);