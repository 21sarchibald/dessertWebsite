fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
  .then(res => res.json())
  .then(data => console.log(data)) // data.meals array with name & image
  .catch(err => console.error(err));