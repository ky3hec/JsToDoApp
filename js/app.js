//Load initial data
import { renderTodoList, renderInputs } from "./controller.js";
import { loadTodosFromServer, fillTodoList } from "./model.js";
import { renderCurrentdate } from "./view.js";

let userId = 1;
let pageNumber = 1;
const requestURL = `https://jsonplaceholder.typicode.com/users/${userId}/todos?_page=${pageNumber}`;

renderCurrentdate();
loadTodosFromServer(requestURL)
  .then((data) => {
    fillTodoList(data);
    renderInputs();
    renderTodoList();
  })
  .catch(console.log);
