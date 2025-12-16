
import { addToFavorites, generateRandomIndex, getParam, getRecipeInfoById } from "./utilities.mjs";

const dessertId = getParam("dessertId");
const dessert = await getRecipeInfoById(dessertId);

function renderDessertInfo(dessert) {

    document.title = `Sweets Saver | ${dessert.strMeal}`

    document.querySelector("#individual-page-img").src = dessert.strMealThumb;
    document.querySelector("#individual-page-img").alt = `Image of ${dessert.strMeal}`;
    document.querySelector("#individual-page-dessert-name").textContent = `${dessert.strMeal}`;
    document.querySelector("#ingredients-list").innerHTML = buildIngredientsList(dessert);
    document.querySelector("#individual-page-source").innerHTML = `<a href="${dessert.strSource}">Source<a/>`;
    document.querySelector("#individual-page-youtube").innerHTML = `<a href="${dessert.strYoutube}">YouTube Link</a>`;
    document.querySelector("#add-to-favorites-button").addEventListener("click", () => {addToFavorites(dessert)})
    document.querySelector("#instructions").textContent = `${dessert.strInstructions}`;

    buildIngredientsList(dessert);
}

let desserts = JSON.parse(localStorage.getItem("desserts"));
console.log(desserts);

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