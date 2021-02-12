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