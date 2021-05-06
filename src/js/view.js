//Get DOM-elements
const todoListElement = document.querySelector("[data-todo-list]");
const currentDateElement = document.querySelector("[data-current-date]");
const todoInputElement = document.querySelector("[data-todo-input]");
const addTodoBtnElement = document.querySelector("[data-add-todo-btn]");

function setCurrentDate() {
  let options = { weekday: "long", month: "short", day: "numeric" };
  let today = new Date();
  currentDateElement.innerText = today.toLocaleDateString("en-US", options);
  currentDateElement.classList += "uppercase";
}

function renderTodoItemElement(
  { id, title, completed, active },
  removeTodo,
  setTodoActive,
  setTodoCompleted,
  todoList
) {
  let newTodoItemElement = document.createElement("li");
  newTodoItemElement.dataset.id = id;
  newTodoItemElement.classList +=
    "flex items-center justify-between relative todo-item bg-gray-500";
  newTodoItemElement.classList += active ? " active" : "";
  newTodoItemElement.appendChild(
    createDoneCheckbox(id, completed, setTodoCompleted, todoList)
  );
  newTodoItemElement.appendChild(
    createTodoTitle(id, title, completed, setTodoActive, todoList)
  );
  newTodoItemElement.appendChild(createTodoRemoveBtn(id, removeTodo, todoList));
  todoListElement.appendChild(newTodoItemElement);
}

function createDoneCheckbox(id, completed, action, todoList) {
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed ? true : false;
  checkbox.classList += "m-3";
  checkbox.addEventListener("click", (e) => action(id, todoList));
  return checkbox;
}
function createTodoTitle(id, title, completed, action, todoList) {
  let todoTitle = document.createElement("div");
  todoTitle.innerText = title;
  todoTitle.classList += "flex-auto";
  todoTitle.classList += completed ? " line-through text-gray-600" : "";
  todoTitle.addEventListener("click", (e) => action(id, todoList));
  return todoTitle;
}
function createTodoRemoveBtn(id, action, todoList) {
  let btnRemove = document.createElement("button");
  btnRemove.innerText = "Remove";
  btnRemove.classList += `py-2 px-4 
  font-semibold text-red-400 hover:text-red-300 
  focus:outline-none flex-none`;
  btnRemove.addEventListener("click", (e) => action(id, todoList));
  return btnRemove;
}
export {
  todoInputElement,
  currentDateElement,
  addTodoBtnElement,
  todoListElement,
  setCurrentDate,
  renderTodoItemElement,
};
