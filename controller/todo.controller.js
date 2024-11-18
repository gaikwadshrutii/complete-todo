const Todo = require("../models/Todo")

exports.getAllTodos = async (req, res) => {
    const result = await Todo.find({ userId: req.user })
    res.json({ message: "Todo Fetch Success", result })
}
exports.addTodos = async (req, res) => {
    await Todo.create({ ...req.body, userId: req.user })
    res.json({ message: "Todo add Success" })
}
exports.updateTodos = async (req, res) => {
    const { id } = req.params
    await Todo.findByIdAndUpdate(id, req.body)
    res.json({ message: "Todo Update Success" })
}
exports.deleteTodos = async (req, res) => {
    const { id } = req.params
    await Todo.findByIdAndDelete(id)
    res.json({ message: "Todo Delete Success" })
}