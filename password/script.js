const btn = document.body.querySelector("button");
const input = document.body.querySelector("input");

let state = "hidden"; //"open"

function render() {
  if (state === "hidden") {
    btn.textContent = "Show Password";
    input.setAttribute("type", "password");
  } else if (state === "open") {
    btn.textContent = "Hide Password";
    input.setAttribute("type", "text");
  }
}

btn.addEventListener("click", (event) => {
  if (state === "hidden") {
    state = "open";
  } else {
    state = "hidden";
  }
  render();
});

render();
