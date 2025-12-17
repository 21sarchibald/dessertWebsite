// import { loadDesserts } from "./main"

import { getFavoritesList } from "./utilities.mjs";

// loadDesserts();

let favorites = getFavoritesList();

async function loadFavorites() {
    console.log("Favorites list from localStorage:")
    console.log(favorites)

    const favoritesCards = await Promise.all(favorites.map(async favorite => {
        const favoritesId = favorite.idMeal;
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${favoritesId}`);
        const dessertDetails = await response.json();
        return `
        <section class="favorites-card">
            <a href="../dessert-pages/index.html?dessertId=${favorite.idMeal}">
                <img src="${favorite.strMealThumb}" alt="placeholder-image">
                <h3 class="favorites-recipe-name">${favorite.strMeal}</h3>
            </a>
        </section>`
    })
);

    const favoritesDisplay = favoritesCards.join('');
    console.log(favoritesDisplay);
    document.querySelector("#favorites-card-div").innerHTML = favoritesDisplay;
}

loadFavorites();