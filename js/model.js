import { mockTodoList } from "./mockupData.js";
import { todoListElement } from "./view.js";
let todoList = [];
function getNewId() {
  return Math.floor(Math.random() * 1000 - 11);
}
const addTodo = function ({ title, completed = false }) {
  let newTodo = {
    id: getNewId(),
    title: title,
    completed: completed,
    active: false,
  };
  if (completed) {
    todoList.push(newTodo);
  } else {
    todoList.unshift(newTodo);
  }
};

const removeTodo = function (id) {
  let index = todoList.findIndex((todo) => todo.id === id);
  todoList.splice(index, 1);
};

const cleanTodoList = function (todoList) {
  return todoList.slice(0, todoList.length - 1);
};
const toggleTodoCompleted = function (id) {
  let completedTodo = todoList.find((todo) => todo.id === id);
  let index = todoList.findIndex((todo) => todo.id === id);
  completedTodo.completed = completedTodo.completed ? false : true;
  completedTodo.active = false;
  todoList.splice(index, 1);
  todoList.push(completedTodo);
};

const toggleTodoActive = function (id) {
  let activeTodo = todoList.find((todo) => todo.id === id);
  let index = todoList.findIndex((todo) => todo.id === id);
  if (activeTodo.completed) {
    activeTodo.completed = false;
  }
  if (activeTodo.active) {
    activeTodo.active = false;
  } else {
    activeTodo.active = true;
    todoList.splice(index, 1);
    todoList.unshift(activeTodo);
  }
};

const loadTodosFromServer = async function (requestURL) {
  try {
    const response = await fetch(requestURL);
    if (response.ok) {
      const todos = await response.json();
      return Promise.resolve(todos);
    } else {
      return Promise.reject(response.status);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
function fillTodoList(data) {
  for (let i = 0; i < data.length; i++) {
    addTodo(data[i]);
  }
}
function getTodoList() {
  return [...todoList];
}
export {
  getTodoList,
  fillTodoList,
  loadTodosFromServer,
  removeTodo,
  addTodo,
  toggleTodoCompleted,
  toggleTodoActive,
};
