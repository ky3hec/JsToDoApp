const todoList = (function () {
  let _todoList = [];
  const _getNewId = function () {
    return Math.floor(Math.random() * 1000 - 11);
  };
  const addTodo = function ({ title, completed = false }) {
    let newTodo = {
      id: _getNewId(),
      title: title,
      completed: completed,
      active: false,
    };
    if (completed) {
      _todoList.push(newTodo);
    } else {
      _todoList.unshift(newTodo);
    }
  };
  const removeTodo = function (id) {
    let index = _todoList.findIndex((todo) => todo.id === id);
    _todoList.splice(index, 1);
  };
  const toggleTodoCompleted = function (id) {
    let completedTodo = _todoList.find((todo) => todo.id === id);
    let index = _todoList.findIndex((todo) => todo.id === id);
    completedTodo.completed = completedTodo.completed ? false : true;
    completedTodo.active = false;
    _todoList.splice(index, 1);
    _todoList.push(completedTodo);
  };
  const toggleTodoActive = function (id) {
    let activeTodo = _todoList.find((todo) => todo.id === id);
    let index = _todoList.findIndex((todo) => todo.id === id);
    if (activeTodo.completed) {
      activeTodo.completed = false;
    }
    if (activeTodo.active) {
      activeTodo.active = false;
    } else {
      activeTodo.active = true;
      _todoList.splice(index, 1);
      _todoList.unshift(activeTodo);
    }
  };
  const loadTodosFromServer = async function (userId, pageNumber) {
    const requestURL = `https://jsonplaceholder.typicode.com/users/${userId}/todos?_page=${pageNumber}`;
    try {
      const response = await fetch(requestURL);
      if (response.ok) {
        const todos = await response.json();
        return todos;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };
  const fillTodoList = function (data) {
    for (let i = 0; i < data.length; i++) {
      addTodo(data[i]);
    }
  };
  const getTodoList = function () {
    return [..._todoList];
  };

  return {
    addTodo,
    removeTodo,
    toggleTodoActive,
    toggleTodoCompleted,
    getTodoList,
    loadTodosFromServer,
    fillTodoList,
  };
})();

export default todoList;
