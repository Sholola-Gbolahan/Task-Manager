const getAllTasks = (req, res) => {
  res.send("get All items from file")
}

const createTask = (req, res) => {
  res.send("create Task")
}

const getTask = (req, res) => {
  res.send("getTask")
}

const updateTask = (req, res) => {
  res.send("Delete Task")
}

const deleteTask = (req, res) => {
  res.send("getTask")
}

module.exports = {
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
  createTask,
}
