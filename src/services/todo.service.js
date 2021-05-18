import TodoModel from "../models/todo.model.js";

const TodoService = {};

TodoService.getAll = async () => {
  return await TodoModel.find({});
};
TodoService.add = async () => {
  const todo = new TodoModel({ name: "Cheng" });
  return todo
    .save()
    .then((data) => {
      return {
        success: true,
        message: "New cause created successfully",
        todo: data,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        success: false,
        message: "Server error. Please try again.",
        error: error.message,
      };
    });
};

export default TodoService;