function renderDessertInfo(dessert) {

    document.querySelector("#individual-page-img").src = dessert.strMealThumb;
    document.querySelector("#individual-page-img").alt = `Image of ${dessert.strMeal}`;
    document.querySelector("#individual-page-dessert-name").textContent = `${dessert.strMeal}`;

}