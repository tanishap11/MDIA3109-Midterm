const express = require('express') 
const database = require('./database.js')

const app = express() 
app.use(express.json())
app.get('/api/tasks/', (req, res) => {
    const tasks = database.allTasks()
    res.send({
      tasks: tasks
    })
  })
  
  app.post('/api/tasks', (req, res) => {
    const task = database.createTask(req.body)
    res.send(task) 
  })
  
  app.delete('/api/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id)
    const result = database.deleteTask(taskId)
    res.send(result) 
  })
  
  app.patch('/api/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id) 
    const data = req.body 
    const result = database.updateTask(taskId, data)
    res.send(result) 
  })
  
  
    
  
app.listen(8080, () => {
  console.log("The server is listening on port 8080")
})
