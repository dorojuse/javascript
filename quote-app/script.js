const btn = document.querySelector("button");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const main = document.querySelector("main");

let state = { quote: "Test", author: "Myself" }; // {}

function renderQuotes() {
  quote.textContent = state.quote;
  author.textContent = state.author;

  const newQuote = document.createElement("p");
  const newAuthor = document.createElement("p");

  main.append(newQuote, newAuthor);
}

btn.addEventListener("click", function (event) {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      state.quote = data.quote;
      state.author = data.author;
    });
  renderQuotes();
});

renderQuotes();
