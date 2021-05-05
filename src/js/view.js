//Get DOM-elements
const todoListElement = document.querySelector("[data-todo-list]");
const currentDateElement = document.querySelector("[data-current-date]");
const todoInputElement = document.querySelector("[data-todo-input]");
const addTodoBtnElement = document.querySelector("[data-add-todo-btn]");

function renderCurrentdate() {
  let options = { weekday: "long", month: "short", day: "numeric" };
  let today = new Date();
  currentDateElement.innerText = today.toLocaleDateString("en-US", options);
  currentDateElement.classList += "uppercase";
}

function renderTodoItemElement(
  { id, title, completed, active },
  removeTodo,
  setTodoActive,
  setTodoCompleted
) {
  let newTodoItemElement = document.createElement("li");
  newTodoItemElement.dataset.id = id;
  newTodoItemElement.classList +=
    "flex items-center justify-between relative todo-item bg-gray-500";
  newTodoItemElement.classList += active ? " active" : "";
  newTodoItemElement.appendChild(
    renderDoneCheckbox(id, completed, setTodoCompleted)
  );
  newTodoItemElement.appendChild(
    renderTodoTitle(id, title, completed, setTodoActive)
  );
  newTodoItemElement.appendChild(renderTodoRemoveBtn(id, removeTodo));
  todoListElement.appendChild(newTodoItemElement);
}

function renderDoneCheckbox(id, completed, action) {
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed ? true : false;
  checkbox.classList += "m-3";
  checkbox.addEventListener("click", (e) => action(id));
  return checkbox;
}
function renderTodoTitle(id, title, completed, action) {
  let todoTitle = document.createElement("div");
  todoTitle.innerText = title;
  todoTitle.classList += "flex-auto";
  todoTitle.classList += completed ? " line-through text-gray-600" : "";
  todoTitle.addEventListener("click", (e) => action(id));
  return todoTitle;
}
function renderTodoRemoveBtn(
  id,
  action = (e) => {
    console.log(e.target.innerText, id);
  }
) {
  let btnRemove = document.createElement("button");
  btnRemove.innerText = "Remove";
  btnRemove.classList += `py-2 px-4 
  font-semibold text-red-400 hover:text-red-300 
  focus:outline-none flex-none`;
  btnRemove.addEventListener("click", (e) => action(id));
  return btnRemove;
}
function renderInput(action) {}

export {
  todoInputElement,
  currentDateElement,
  addTodoBtnElement,
  todoListElement,
  renderCurrentdate,
  renderTodoItemElement,
};