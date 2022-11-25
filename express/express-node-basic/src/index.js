const express = require('express')
const { v4: uuidv4 } = require('uuid')

const app = express()
app.use(express.json())

const projects = []

app.get('/projects', function (request, response) {
  return response.json(projects)
})

app.post('/projects', function (request, response) {
  const { name, owner } = request.body
  const project = {
    id: uuidv4(),
    name,
    owner
  }
  projects.push(project)

  return response.status(201).json(project)
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