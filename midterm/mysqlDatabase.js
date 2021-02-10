// 1
const mysql = require('mysql')

// 2
const dbDetails = {
  connectionLimit : 10,
  host     : process.env.MYSQL_HOST || 'localhost',
  user     : process.env.MYSQL_USERNAME || 'todo_list_user',
  password : process.env.MYSQL_PASSWORD || 'MyNewPass4!',
  database : process.env.MYSQL_DATABASE || 'todo_list'
}
const connection = mysql.createConnection(dbDetails)

// 3
function allTasks(callback) {
    const query = `
      SELECT * 
      FROM tasks
    `
    connection.query(query, null, (error, results, fields) => {
      callback(error, results)
    })
  }
  
  
exports.allTasks = allTasks

function createTask(task, callback) {
    // 1
    const query = `
      INSERT INTO tasks (content, completed)
      VALUES (?, ?)
    `
  
    // 2
    const params = [task.content, task.completed]
  
    // 3
    connection.query(query, params, function (error, result, fields) {
      callback(error, result.insertId)
    })
  }
  
  
  
exports.createTask = createTask

function deleteTask(taskId) {

}
exports.deleteTask = deleteTask

function completeTask(taskId, data) {

}
exports.completeTask = completeTask
