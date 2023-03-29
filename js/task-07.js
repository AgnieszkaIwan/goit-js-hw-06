const fontSize = document.querySelector("#font-size-control");

const output = document.querySelector("#text");

fontSize.addEventListener("input", (e) => {
  output.style.fontSize = e.currentTarget.value + "px";
});
