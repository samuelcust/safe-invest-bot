const express = require('express')

const createServer = client => {
  const app = express()

  app.get("/", (_, res) => {
    res.send(`${client.user.username} says hello`)
  })

  return app
}

module.exports = { createServer }
