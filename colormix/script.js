const colorResult = document.body.querySelector("p");
let red = document.body.querySelector(".red");
let green = document.body.querySelector(".green");
let blue = document.body.querySelector(".blue");

function render() {
  red.value;
  green.value;
  blue.value;
  colorResult.textContent =
    "rgb (" + red.value + "," + green.value + "," + blue.value + ")";
}

//Event Listener

render();
