//Load initial data
import { renderTodoList, renderInputs } from "./controller.js";
import { loadTodosFromServer, fillTodoList } from "./model.js";
import { setCurrentDate } from "./view.js";
import css from "@/css/style.css";

let userId = 1,
  pageNumber = 1;
setCurrentDate();
loadTodosFromServer(userId, pageNumber)
  .then((data) => {
    fillTodoList(data);
    renderInputs();
    renderTodoList();
  })
  .catch(console.log);
