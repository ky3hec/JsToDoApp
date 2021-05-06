//Load initial data
import { renderTodoList, wireUpInputs } from "./controller.js";
import { todoList } from "./model.js";
import { setCurrentDate } from "./view.js";
import css from "@/css/style.css";

let userId = 1,
  pageNumber = 1;
setCurrentDate();
todoList
  .loadTodosFromServer(userId, pageNumber)
  .then((data) => {
    todoList.fillTodoList(data);
    wireUpInputs(todoList);
    renderTodoList(todoList);
  })
  .catch(console.log);
