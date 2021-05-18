import TodoService from "../services/todo.service.js";
const TodoControler = {};

TodoControler.getTodos = async (req, res) => {
  try {
    const todos = await TodoService.getAll();
    return res.status(200).json(todos);
  } catch (err) {
    return res.status(400);
  }
};
TodoControler.addTodo = async (req, res) => {
  try {
    const todos = await TodoService.add();
    return res.status(200).json(todos);
  } catch (err) {
    return res.status(400);
  }
};

export default TodoControler;