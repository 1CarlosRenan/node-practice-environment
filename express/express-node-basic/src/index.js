const express = require('express')
const app = express()

app.get('/', function (request, response) {
  return response.json({
    message: 'Olá Dev! Bem vindo!'
  })
})

app.listen(3000, () => {
  console.log('Server starterd on port 3000.')
})