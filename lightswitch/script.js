const btn = document.body.querySelector("button");

btn.classList.add("button--morning");

const body = document.body;

body.classList.add("body--morning");

function buttonClick() {
  btn.classList.toggle("button--night");
  body.classList.toggle("body--night");
}

btn.addEventListener("click", buttonClick);

const title = document.head.querySelector("title");
