// import { loadDesserts } from "./main"

// loadDesserts();

export function addToFavorites(dessert) {
    let favoritesList = JSON.parse(localStorage.getItem("favorites") || "[]");
    console.log("Favorites list");
    console.log(favoritesList);
    favoritesList.push(dessert);
    localStorage.setItem("favorites", JSON.stringify(favoritesList));
}