const resetbtn = document.body.querySelector("button");
const main = document.body.querySelector("main");
const counter = document.body.querySelector(".counter");
const background = document.body.querySelector(".background");

let state = {
  countUp: 0, // 1, 2, 3, ...
  colorUp: { width: 0 },
};

function render() {
  counter.textContent = state.countUp;
  background.style.width = state.colorUp.width + "%";
  background.style.backgroundColor = "#ffd700";
}

render();

main.addEventListener("click", () => {
  state.countUp += 1;
  state.colorUp.width += 1;
  if (state.colorUp.width > 100) {
    state.colorUp.width = 1;
  }
  render();
});

document.body.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    state.countUp += 1;
    state.colorUp.width += 1;
  } else if (event.key === " ") {
    state.countUp += 1;
    state.colorUp.width += 1;
  } else {
    state.countUp;
    state.colorUp.width;
  }
  if (state.colorUp.width > 100) {
    state.colorUp.width = 1;
  }
  render();
});

resetbtn.addEventListener("click", () => {
  state.countUp = 0;
  state.colorUp.width = 0;
  render();
});
