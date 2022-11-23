const express = require('express')
const app = express()

app.get('/projects', function (request, response) {
  const query = request.query
  console.log(query)

  return response.json([
    'Projeto 1',
    'Projeto 2'
  ])
})

app.post('/projects', function (request, response) {
  return response.json([
    'Projeto 1',
    'Projeto 2'
  ])
})

app.put('/projects/:id/:name', function (request, response) {
  const { id, name } = request.params
  console.log(id, name)

  return response.json([
    'Projeto 1',
    'Projeto 2'
  ])
})

app.delete('/projects/:id', function (request, response) {
  return response.json([
    'Projeto 1',
    'Projeto 2'
  ])
})

app.listen(3000, () => {
  console.log('Server starterd on port 3000.')
})