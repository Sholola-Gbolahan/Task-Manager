const asyncWrapper = require("../middleware/async")
const Task = require("../models/task")
const { createCustomError } = require("../errors/custom-error")
//  GETTING ALL TASK
const getAllTasks = asyncWrapper(async (req, res) => {
  const task = await Task.find({})
  res.status(200).json({ task })
})

// CREATING A TASK
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(200).json({ task })
})

// GETTING A TASK
const getTask = asyncWrapper(async (req, res, next) => {
  // Destructing The id from req.params and setup a useful alias of "taskID" to make the ID unique to task
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })

  // Sending a message if task not exist.
  if (!task) {
    // next used to pass the error message down to error handler middleware
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }
  // Sending back task of the ID
  res.status(200).json({ task })
})

// DELETING A TASK
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })

  if (!task) {
    return res.status(404).json({ msg: `no task id with : ${taskID}` })
  }
  res.status(200).json({ task })
})

// UPDATING A TASK
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  // getting the updated date in in the update response and running validators for required values
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })
  if (!task) {
    return res.status(404).json({ msg: `no task id with : ${taskID}` })
  }
  res.status(200).json({ task })
})

module.exports = {
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
  createTask,
}
