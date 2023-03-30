const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach(function (el, i) {
  let list = document.querySelector("#ingredients");
  let li = document.createElement("li");
  li.textContent = el;
  list.append(li);
  li.classList.add("item");
});
