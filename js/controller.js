import {
  getTodoList,
  addTodo,
  removeTodo,
  toggleTodoCompleted,
  toggleTodoActive,
} from "./model.js";
import {
  renderTodoItemElement,
  todoListElement,
  todoInputElement,
  addTodoBtnElement,
} from "./view.js";

function renderTodoList() {
  todoListElement.innerHTML = "";
  let todoList = getTodoList();
  todoList.forEach((todo) => {
    renderTodoItemElement(todo, deleteTodo, setTodoActive, setTodoCompleted);
  });
}
function renderInputs() {
  todoInputElement.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      addNewTodo();
    }
  });
  addTodoBtnElement.addEventListener("click", addNewTodo);
}
function deleteTodo(id) {
  removeTodo(id);
  renderTodoList();
}

function setTodoActive(id) {
  toggleTodoActive(id);
  renderTodoList();
}
function setTodoCompleted(id) {
  toggleTodoCompleted(id);
  renderTodoList();
}
function addNewTodo() {
  let todoTitle = todoInputElement.value;
  if (todoTitle !== "") {
    addTodo({ title: todoTitle, completed: false });
    todoInputElement.value = "";
    renderTodoList();
  }
}

export { renderTodoList, renderInputs };
