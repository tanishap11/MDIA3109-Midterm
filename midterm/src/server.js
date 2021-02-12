const express = require('express')
const database = require('./mysqlDatabase.js')
const path = require('path')

const app = express()

app.use(express.json())

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

app.get('/api/tasks', (req, res) => {
  console.log("entered function");
  database.allTasks((error, tasks) => {
  
    if (error) {
      console.log(error);
      res.send({error})
      return 
    }
    
    res.send({tasks})
  })
})

app.post('/api/tasks', (req, res) => {
  const task = req.body
  
  // 1
  database.createTask(task, (error, taskId) => {
    
    // 2
    if (error) {
      res.send({error})
      return
    }

    // 3
    task.id = taskId

    // 4
    res.send({task})
  })
})