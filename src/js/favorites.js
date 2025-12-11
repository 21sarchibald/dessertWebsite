// import { loadDesserts } from "./main"

// loadDesserts();

async function loadFavorites() {
    // const favorites = localStorage.getItem("favorites");
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    console.log("Favorites list from localStorage:")
    console.log(favorites)

    const favoritesCards = await Promise.all(favorites.map(async favorite => {
        const favoritesId = favorite.idMeal;
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${favoritesId}`);
        const dessertDetails = await response.json();
        return `
        <section class="favorites-card">
            <a href="../dessert-pages/index.html?dessertId=${favorite.idMeal}">
                <img src="${favorite.strMealThumb}" alt="Image of ${favorite.strMeal}">
                <h3 class="favorites-recipe-name">${favorite.strMeal}</h3>
            </a>
        </section>`
    })
);

    const favoritesDisplay = favoritesCards.join('');

    document.querySelector("#favorites-card-div").innerHTML = favoritesDisplay;
}

loadFavorites();