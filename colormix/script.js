const colorResult = document.body.querySelector("p");
const main = document.body.querySelector("main");
const header = document.body.querySelector("header");
let red = document.body.querySelector(".red");
let green = document.body.querySelector(".green");
let blue = document.body.querySelector(".blue");

function render() {
  colorResult.textContent =
    "rgb(" + red.value + ", " + green.value + ", " + blue.value + ")";
}
render();

//Event Listener
header.addEventListener("change", () => {
  let colorName = colorResult.textContent;
  main.style.backgroundColor = colorName;
  render();
});

render();
