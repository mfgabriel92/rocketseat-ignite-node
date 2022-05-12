const express = require("express")
const cors = require("cors")
const { v4: uuid } = require("uuid")

const app = express()

app.use(cors())
app.use(express.json())

const users = []

function ensureUserAccountExists(request, response, next) {
  const { username } = request.headers
  const user = users.find((user) => user.username === username)

  if (!user) {
    return response.status(404).send({ error: "The user does not exist " })
  }

  request.user = user

  return next()
}

function ensureTodoExists(request, response, next) {
  const { user } = request
  const { id } = request.params
  const todo = user.todos.find((todo) => todo.id === id)

  if (!todo) {
    return response.status(404).send({ error: "Todo does not exist" })
  }

  request.todo = todo

  return next()
}

app.post("/users", (request, response) => {
  const { name, username } = request.body
  const newUser = {
    id: uuid(),
    name,
    username,
    todos: []
  }

  const isDuplicatedUsername = users.some((user) => user.username === username)
  if (isDuplicatedUsername) {
    return response.status(400).send({ error: "This username is already taken." })
  }

  users.push(newUser)
  return response.status(201).send(newUser)
})

app.get("/todos", ensureUserAccountExists, (request, response) => {
  const { user } = request
  const todos = user.todos

  return response.status(200).send(todos)
})

app.post("/todos", ensureUserAccountExists, (request, response) => {
  const { user } = request
  const { title, deadline } = request.body
  const newTodo = {
    id: uuid(),
    title,
    deadline,
    done: false,
    created_at: new Date()
  }

  user.todos.push(newTodo)

  return response.status(201).send(newTodo)
})

app.put("/todos/:id", ensureUserAccountExists, ensureTodoExists, (request, response) => {
  const { todo } = request
  const { title, deadline } = request.body

  todo.title = title
  todo.deadline = deadline

  return response.status(200).send(todo)
})

app.patch("/todos/:id/done", ensureUserAccountExists, ensureTodoExists, (request, response) => {
  const { todo } = request

  todo.done = true

  return response.status(200).send(todo)
})

app.delete("/todos/:id", ensureUserAccountExists, ensureTodoExists, (request, response) => {
  const { user, todo } = request

  user.todos.splice(todo, 1)

  return response.status(204).send({})
})

module.exports = app
