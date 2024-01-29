const resetbtn = document.body.querySelector("button");
const main = document.body.querySelector("main");
const counter = document.body.querySelector(".counter");

let state = 0; // 1, 2, 3, ...

function render() {
  counter.textContent = state;
}

main.addEventListener("click", () => {
  state += 1;
  render();
});

document.body.addEventListener("keypress", function (event) {
  if (event.key === "Enter" || "Spacebar") {
    state += 1;
    render();
  }
});

resetbtn.addEventListener("click", () => {
  state = 0;
  render();
});

render();
