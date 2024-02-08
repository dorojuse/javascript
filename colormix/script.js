const colorResult = document.body.querySelector("p");
const main = document.body.querySelector("main");
const header = document.body.querySelector("header");
let red = document.body.querySelector(".red");
let green = document.body.querySelector(".green");
let blue = document.body.querySelector(".blue");

let state = {
  redValue: 255,
  greenValue: 105,
  blueValue: 180,
};

const savedState = localStorage.getItem("color-mixer-state");
if (savedState) {
  state = JSON.parse(savedState);
}

function render() {
  localStorage.setItem("color-mixer-state", JSON.stringify(state));

  colorResult.textContent =
    "rgb(" +
    state.redValue +
    "," +
    state.greenValue +
    "," +
    state.blueValue +
    ")";
  main.style.backgroundColor =
    "rgb(" +
    state.redValue +
    "," +
    state.greenValue +
    "," +
    state.blueValue +
    ")";
  red.value = state.redValue;
  green.value = state.greenValue;
  blue.value = state.blueValue;
}

header.addEventListener("input", () => {
  state.redValue = red.value;
  state.greenValue = green.value;
  state.blueValue = blue.value;
  render();
});

document.querySelector("button").addEventListener("click", function (event) {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      state.redValue = data.rgb.r;
      state.greenValue = data.rgb.g;
      state.blueValue = data.rgb.b;
    });
  render();
});
render();
