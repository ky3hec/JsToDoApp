import { todoList } from "./model.js";
import {
  renderTodoItemElement,
  todoListElement,
  todoInputElement,
  addTodoBtnElement,
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
function wireUpInputs(todoList) {
  todoInputElement.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      addNewTodo(todoList);
    }
  });
  addTodoBtnElement.addEventListener("click", (e) => {
    addNewTodo(todoList);
  });
}
function deleteTodo(id, todoList) {
  todoList.removeTodo(id);
  renderTodoList(todoList);
}

function setTodoActive(id, todoList) {
  todoList.todotoggleTodoActive(id);
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

export { renderTodoList, wireUpInputs };
