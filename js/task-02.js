const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
for (const ingredient of ingredients) {
  const ingredientItem = document.createElement("li");
  ingredientItem.classList.add("ingredientItem");
  ingredientItem.textContent = ingredient;
  list.append(ingredientItem);

  console.log(ingredientItem);
}
