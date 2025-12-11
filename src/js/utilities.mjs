export function generateRandomIndex() {
    const upperLimit = 117;
    const lowerLimit = 0;
    return Math.floor(Math.random() * (upperLimit -  + lowerLimit)) + lowerLimit;
}

// get URL parameter
export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
  }

// Get reicpe info by id
export async function getRecipeInfoById(dessertId) {
//   console.log("Dessert id", dessert.idMeal);
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dessertId}`);
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

// Add to favorites list
export function addToFavorites(dessert) {
    let favoritesList = JSON.parse(localStorage.getItem("favorites") || "[]");
    console.log("Favorites list");
    console.log(favoritesList);
    favoritesList.push(dessert);
    localStorage.setItem("favorites", JSON.stringify(favoritesList));
}