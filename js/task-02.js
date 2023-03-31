const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const element = document.createDocumentFragment();

ingredients.forEach(function (el, i) {
  let list = document.querySelector("#ingredients");
  let li = document.createElement("li");
  li.textContent = el;
  li.classList.add("item");
  element.appendChild(li);
});

list.appendChild(element);
