const btn = document.body.querySelector("button");

const body = document.body;

let state = "morning"; // "night"

function render() {
  if (state === "morning") {
    document.title = "Good Morning";
    body.classList.add("body--morning");
    btn.classList.add("button--morning");
    body.classList.remove("body--night");
    btn.classList.remove("button--night");
  } else if (state === "night") {
    document.title = "Good Morning";
    body.classList.add("body--night");
    btn.classList.add("button--night");
    body.classList.remove("body--morning");
    btn.classList.remove("button--morning");
  }
}

btn.addEventListener("click", (event) => {
  // State ändern
  if (state == "morning") {
    state = "night";
  } else {
    state = "morning";
  }
  // render triggern
  render();
});

render();
