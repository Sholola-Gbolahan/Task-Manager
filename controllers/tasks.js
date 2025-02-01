const Task = require("../models/task")

const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({})
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const getTask = async (req, res) => {
  try {
    // Destructing The id from req.params and setup a useful alias of "taskID" to make the ID unique to task
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    // Sending a message if task not exist.
    if (!task) {
      return res.status(404).json({ msg: `no task with id : ${taskID}` })
    }
    // Sending back task of the ID
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })

    if (!task) {
      return res.status(404).json({ msg: `no task id with : ${taskID}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
const updateTask = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
module.exports = {
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
  createTask,
}
