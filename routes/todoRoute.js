const express = require("express");
const router = express.Router();
const {
  createTodo,
  getAllTodos,
  deleteTodo,
  updateTodo,
} = require("../controller/todoListController");

router.post("/", createTodo);
router.get("/", getAllTodos);
router.put("/:todoId", updateTodo);
router.delete("/:todoId", deleteTodo);

module.exports = router;
