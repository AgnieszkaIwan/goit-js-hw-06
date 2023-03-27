const categoryList = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${categoryList.length}.`);

categoryList.forEach((element) => {
  const categoryName = element.querySelector("h2");
  const categoryEl = element.querySelectorAll("li");
  console.log(`Name of category: ${categoryName.textContent}.`);
  console.log(`Number of elements: ${categoryEl.length}.`);
});
