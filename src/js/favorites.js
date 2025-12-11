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
            <a href="#">
                <img src="${favorite.strMealThumb}" alt="placeholder-image">
                <h3 class="favorites-recipee-name">${favorite.strMeal}</h3>
            </a>
        </section>`
    })
);

    const favoritesDisplay = favoritesCards.join('');
    console.log(favoritesDisplay);
    document.querySelector("#favorites-card-div").innerHTML = favoritesDisplay;
}

export function addToFavorites(dessert) {
    let favoritesList = JSON.parse(localStorage.getItem("favorites") || "[]");
    console.log("Favorites list");
    console.log(favoritesList);
    favoritesList.push(dessert);
    localStorage.setItem("favorites", JSON.stringify(favoritesList));
}

loadFavorites();