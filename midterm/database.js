let tasks = [
    {
      id: 1,
      content: "Walk Oliver",
      completed: false
    },
    {
      id: 2,
      content: "Dog sit Spotty",
      completed: false
    },
    {
      id: 3,
      content: "Check on Fluffy",
      completed: false
    },
    {
      id: 4,
      content: "Feed Poodle",
      completed: false
    },
    {
      id: 5,
      content: "Check on Roof",
      completed: false
    },
    {
      id: 6,
      content: "Dog sit Randoo",
      completed: false
    },
    {
      id: 7,
      content: "Walk Puffy",
      completed: false
    },
    {
      id: 8,
      content: "Dog sit Luffy",
      completed: false
    },
    {
      id: 9,
      content: "Feed Aloof",
      completed: false
    },
    {
      id: 10,
      content: "Check on Muffie",
      completed: false
    }
  ]
  
  function allTasks() {
    return tasks
  }
  exports.allTasks = allTasks
  
  function createTask(task) {
    task.id = tasks.length + 1 
    tasks.push(task) 
    return task
  }
  exports.createTask = createTask
  
  function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId)
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1)
    }
    return {id: taskId}
  }
  exports.deleteTask = deleteTask
  
  function updateTask(taskId, data) {
    if (data.completed !== undefined) { 
      const task = tasks.find(task => task.id === taskId) 
      task.completed = data.completed 
    }
    return {id: taskId, ...data}
  }
  exports.updateTask = updateTask
  