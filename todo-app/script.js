const addForm = document.getElementById("add-form");
const list = document.querySelector("#list");
const descriptionInput = document.querySelector("#description");
const removebtn = document.querySelector(".removebtn");
const openbtn = document.getElementById("open");
const donebtn = document.getElementById("done");
const allbtn = document.getElementById("all");
const filterForm = document.getElementById("filter-form");

let state = {
  todos: [
    {
      id: 1,
      description: "Learn CSS",
      done: true,
    },
    {
      id: 2,
      description: "Learn HTML",
      done: false,
    },
  ],
  filter: "all", // open, done,
};

const savedState = localStorage.getItem("todo-state");
if (savedState) {
  state = JSON.parse(savedState);
}

function renderTodos() {
  localStorage.setItem("todo-state", JSON.stringify(state));

  list.innerHTML = "";

  const filter = state.todos.filter((todo) => {
    if (state.filter === "open") {
      return !todo.done;
    } else if (state.filter === "done") {
      return todo.done;
    } else {
      return todo;
    }
  });

  filter.forEach((todo) => {
    const todoLi = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    checkbox.addEventListener("change", () => {
      todo.done = !todo.done;

      renderTodos();
    });

    const todoText = document.createTextNode(todo.description);
    todoLi.append(checkbox, todoText);

    list.appendChild(todoLi);
  });
}

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Submit");

  const inputText = descriptionInput.value;
  const newDescription = inputText.trim();
  const generatedId = Date.now().toString();

  if (
    state.todos.some(
      (todo) => todo.description.toLowerCase() === newDescription.toLowerCase()
    )
  ) {
    return;
  } else {
    state.todos.push({
      id: generatedId,
      description: newDescription,
      done: false,
    });
  }

  renderTodos();
  descriptionInput.value = "";
});

allbtn.addEventListener("click", () => {
  state.filter = "all";
  renderTodos();
});

openbtn.addEventListener("click", () => {
  state.filter = "open";
  renderTodos();
});

donebtn.addEventListener("click", () => {
  state.filter = "done";
  renderTodos();
});

removebtn.addEventListener("click", () => {
  state.todos = state.todos.filter((todo) => !todo.done);
  renderTodos();
});

renderTodos();
