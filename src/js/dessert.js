
import { addToFavorites, removeFromFavorites, generateRandomIndex, getFavoritesList, getParam, getRecipeInfoById } from "./utilities.mjs";

const dessertId = getParam("dessertId");
const dessert = await getRecipeInfoById(dessertId);
const favorites = getFavoritesList();

function renderDessertInfo(dessert) {

    document.title = `Sweets Saver | ${dessert.strMeal}`

    document.querySelector("#individual-page-img").src = dessert.strMealThumb;
    document.querySelector("#individual-page-img").alt = `Image of ${dessert.strMeal}`;
    document.querySelector("#individual-page-dessert-name").textContent = `${dessert.strMeal}`;
    document.querySelector("#ingredients-list").innerHTML = buildIngredientsList(dessert);
    document.querySelector("#individual-page-source").innerHTML = `<a href="${dessert.strSource}">Source<a/>`;
    document.querySelector("#individual-page-youtube").innerHTML = `<a href="${dessert.strYoutube}">YouTube Link</a>`;
    document.querySelector("#instructions").textContent = `${dessert.strInstructions}`;
    
    buildIngredientsList(dessert);

    if (isFavorite(dessert.idMeal)) {
        console.log("isFavorite");
        document.querySelector("#add-remove-favorites-button").textContent = "Remove from Favorites";
        document.querySelector("#add-remove-favorites-button").addEventListener("click", () => {removeFromFavorites(dessert)})

    }
    else {
        console.log("isNotFavorite");
        document.querySelector("#add-remove-favorites-button").textContent = "Add to Favorites";
        document.querySelector("#add-remove-favorites-button").addEventListener("click", () => {addToFavorites(dessert)})
        
    }
}

let desserts = JSON.parse(localStorage.getItem("desserts"));
console.log(desserts);

function isFavorite(idMeal) {
    return favorites.some(item => item.idMeal === idMeal)
}

function buildIngredientsList(dessert) {
    let ingredientList = [];
    for (let i = 1; i < 21; i++) {
        const ingredientReference = `strIngredient${i}`;
        const ingredientName = dessert[ingredientReference];
        const ingredientAmountReference = `strMeasure${i}`
        const ingredientAmount = dessert[ingredientAmountReference];

        if (ingredientName != "") {
            ingredientList.push({
                "name": ingredientName,
                "amount": ingredientAmount});
        }
    }

    const ingredients = (ingredientList.map(ingredient => {
        return `
        <li>${ingredient.name}: ${ingredient.amount}</li>`
        })
    );

    const ingredientsHTML = ingredients.join("");
    return ingredientsHTML;
}


// let randomDessert = desserts[generateRandomIndex()];
// console.log(randomDessert);


renderDessertInfo(dessert.meals[0]);
// getRecipeInfoById(randomDessert);