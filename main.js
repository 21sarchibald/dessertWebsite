import { generateRandomIndex } from "./src/js/utilities.mjs";

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

const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
let favoritesCards = document.querySelector("#favorites-cards-container");

if (favorites.length == 0) {
    favoritesCards.insertAdjacentHTML("beforeend", `<p>No favorites added yet!</p>`);
}

else {
    const favoritesDiv = document.querySelector("#favorite-desserts");
    let recipeCards = ``;
    if (favorites.length == 1) {
        let recipe = favorites[0];
        recipeCards = `
        <a href="dessert-pages/index.html?dessertId=${recipe.idMeal}">
        <article class="card-group">
        <h3>${recipe.strMeal}</h3>
        <img src="${recipe.strMealThumb}" alt="Image of ${recipe.strMeal}">
        </article>
        </a>`;
    }

    else if (favorites.length == 2) {
        for (let i = 1; i > -1; i--) {
            let recipe = favorites[i];
            const formattedRecipe = `
                <a href="dessert-pages/index.html?dessertId=${recipe.idMeal}">
                <article class="card-group">
                <h3>${recipe.strMeal}</h3>
                <img src="${recipe.strMealThumb}" alt="Image of ${recipe.strMeal}">
                </article>
                </a>`;
            recipeCards += formattedRecipe;
        }
    }
    else if (favorites.length > 2) 
        for (let i = (favorites.length - 1); i > (favorites.length - 4); i--) {
            if (i < 0) {
                console.log("Error");
            }
            let recipe = favorites[i];

            const formattedRecipe = `
            <a href="dessert-pages/index.html?dessertId=${recipe.idMeal}">
            <article class="card-group">
            <h3>${recipe.strMeal}</h3>
            <img src="${recipe.strMealThumb}" alt="Image of ${recipe.strMeal}">
            </article>
            </a>`;
            recipeCards += formattedRecipe;
    }
    favoritesDiv.innerHTML = recipeCards;
}

function populateDessertsCard(div) {
    let dessertCards = ``;

    for (let i = 0; i < 3; i++) {
        let randomDessert = desserts[generateRandomIndex()];

        const formattedDessert = `
        <a href="dessert-pages/index.html?dessertId=${randomDessert.idMeal}">
        <article class="card-group">
        <h3>${randomDessert.strMeal}</h3>
        <img src="${randomDessert.strMealThumb}" alt="Image of ${randomDessert.strMeal}">
        </article>
        </a>`;
        dessertCards += formattedDessert;
    }

    div.innerHTML = dessertCards;
    
}
const popularCard = document.querySelector("#popular-desserts");
const suggestedCard = document.querySelector("#suggested-desserts");

const popularHeading = document.querySelector("#popular-desserts-heading");
popularHeading.addEventListener("click", () => populateDessertsCard(popularCard));

const suggestedHeading = document.querySelector("#suggested-desserts-heading");
popularHeading.addEventListener("click", () => populateDessertsCard(suggestedCard));

populateDessertsCard(popularCard);
populateDessertsCard(suggestedCard);
// localStorage.setItem("favorites", []);