import express from"express";
import TodoControler from"../controllers/todo.controller.js";
const todoRouter = express.Router();

todoRouter.get("/",TodoControler.getTodos);
todoRouter.get("/add",TodoControler.addTodo);
export default todoRouter;
