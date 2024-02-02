const addForm = document.getElementById("add-form");

let state = {
  todos: [{ description: "Learn CSS", done: true }, {}, {}],
};

function renderTodos() {
  const list = document.querySelector("#list");
  list.innerHTML = "";

  state.todos.forEach((todo) => {
    const todoLi = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    checkbox.addEventListener("change", (e) => {
      const newTodoDoneState = e.target.checked;
      todo.done = newTodoDoneState;
    });

    todoLi.appendChild(checkbox);

    const todoText = document.createTextNode(todo.description);
    todoLi.append(todoText);

    list.appendChild(todoLi);
  });
}

renderTodos();

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Submit");
  const newDescription = document.querySelector("#description").value;
  let newObject = { description: newDescription, done: false };
  state.todos.push(newObject);
  renderTodos();
});
