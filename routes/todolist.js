const express = require("express")
const router = express.Router()
const models = require("../models")
models.Todolist.findOne().then(function() {})

router.get("/", function(req, res) {
  models.Todolist.findAll().then(function(todos) {
    res.render("index", {
      todos: todos
    })
  })
})

router.post("/input", function(req, res) {
  const todo = models.Todolist.build({
    task: req.body.todo
  })
  todo.save().then(function(newTodo) {})
  res.redirect("/")
})

router.post("/completed", function(req, res) {
  models.Todolist
    .destroy({
      where: {
        id: req.body.button
      }
    })
    .then(function() {
      res.redirect("/")
    })
})

module.exports = router
