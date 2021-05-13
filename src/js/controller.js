import todoList from "./model.js";
import {
  renderTodoItemElement,
  todoListElement,
  todoInputElement,
  addTodoBtnElement,
  todoInputForm,
  dataLoadSpinner,
} from "./view.js";

function renderTodoList(todoList) {
  todoListElement.innerHTML = "";
  todoList.getTodoList().forEach((todo) => {
    renderTodoItemElement(
      todo,
      deleteTodo,
      setTodoActive,
      setTodoCompleted,
      todoList
    );
  });
}
function enableInputs() {
  todoInputElement.removeAttribute("disabled");
  addTodoBtnElement.removeAttribute("disabled");
}
function showTodoList(params) {
  todoListElement.classList.remove("hidden");
  dataLoadSpinner.classList.add("hidden");
}
function wireUpInputs(todoList) {
  todoInputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addNewTodo(todoList);
  });
}
function deleteTodo(id, todoList) {
  todoList.removeTodo(id);
  renderTodoList(todoList);
}

function setTodoActive(id, todoList) {
  todoList.toggleTodoActive(id);
  renderTodoList(todoList);
}
function setTodoCompleted(id, todoList) {
  todoList.toggleTodoCompleted(id);
  renderTodoList(todoList);
}
function addNewTodo(todoList) {
  let todoTitle = todoInputElement.value;
  if (todoTitle !== "") {
    todoList.addTodo({ title: todoTitle, completed: false });
    todoInputElement.value = "";
    renderTodoList(todoList);
  }
}

export { renderTodoList, wireUpInputs, enableInputs, showTodoList };
