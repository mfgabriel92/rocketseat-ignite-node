const express = require("express")
const { v4: uuid } = require("uuid")

const app = express()
const customers = []

function ensureAccountExists(req, res, next) {
  const { document } = req.headers
  const customer = customers.find(c => c.document === document)

  if (!customer) {
    res.status(404).send({ error: "A customer with this document number does not exists"})
  }

  req.customer = customer

  return next()
}

function getBalance(statements) {
  return statements.reduce((acc, transaction) => {
    if (transaction.type === 'credit') {
      return acc + transaction.amount
    }

    return acc - transaction.amount
  }, 0)
}

app.use(express.json())

app.post("/accounts", (req, res) => {
  const { document, name } = req.body
  const newCustomer = {
    id: uuid(),
    document,
    name,
    statements: []
  }

  const customer = customers.find(c => c.document === document)

  if (customer) {
    res.status(400).send({ error: "A customer with this document already exists"})
  }

  customers.push(newCustomer)
  res.status(201).send(newCustomer)
})

app.get("/statements", ensureAccountExists, (req, res) => {
  return res.status(200).send(req.customer?.statements)
})

app.post("/accounts/deposit", ensureAccountExists, (req, res) => {
  const { amount, description } = req.body
  const { customer } = req
  
  const transaction = {
    description,
    amount,
    created_at: new Date(),
    type: "credit"
  }

  customer.statements.push(transaction)

  res.status(201).send(transaction)
})

app.post("/accounts/withdraw", ensureAccountExists, (req, res) => {
  const { customer } = req
  const { amount } = req.body
  const balance = getBalance(customer.statements)

  if (balance < amount) {
    return res.status(400).send({ error: "Unsufficient funds"})
  }

  const transaction = {
    amount,
    created_at: new Date(),
    type: 'debit'
  }

  customer.statements.push(transaction)

  return res.status(201).send(transaction)
})

app.get("/statement", ensureAccountExists, (req, res) => {
  const { customer } = req
  const { date } = req.query
  const formattedDate = new Date(date + " 00:00")
  const statement = customer.statements?.filter((statement) =>
    statement.created_at.toDateString() === new Date(formattedDate).toDateString()
  )

  return res.status(200).send(statement)
})

app.put("/accounts", ensureAccountExists, (req, res) => {
  const { customer } = req
  const { name } = req.body

  customer.name = name

  return res.status(200).send(customer)
})

app.delete("/accounts", ensureAccountExists, (req, res) => {
  const { customer } = req

  customers.splice(customer, 1)

  return res.status(204).send()
})

app.listen(3333, () => console.log("Server is now listening on port 3333"))