const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
let li = document.createElement("li");

ingredients.forEach(function (el) {
  li = document.createElement("li");
  li.textContent = el;
  li.classList.add("item");
  list.append(li);
});
console.log(li);
