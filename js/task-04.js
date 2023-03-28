const buttonDecrement = document.getElementById("decrement");
const buttonIncrement = document.getElementById("increment");
let display = document.getElementById("value");
let counterVarlue = 0;

buttonDecrement.addEventListener("click", function () {
  counterVarlue--;

  display.innerHTML = counterVarlue;
});

buttonIncrement.addEventListener("click", function () {
  counterVarlue++;
  display.innerHTML = counterVarlue;
});
