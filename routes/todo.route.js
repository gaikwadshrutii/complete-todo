const { addTodos, updateTodos, deleteTodos, getAllTodos } = require("../controller/todo.controller")
const { userProtected } = require("../middlewares/auth.middleware")

const router = require("express").Router()

router
    .get("/get-todo", userProtected, getAllTodos)
    .post("/add-todo", userProtected, addTodos)
    .put("/update/:id", userProtected, updateTodos)
    .delete("/delete/:id", userProtected, deleteTodos)
module.exports = router