import todoRouter from "./todo.route.js";
import express from "express";

const todoRoute = express();

todoRoute.use("/todo", todoRouter);

export default todoRoute;
