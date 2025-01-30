const express = require("express")
const router = express.Router()

const {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
} = require("../controllers/tasks")

// Chaining routes of same paths together
router.route("/").get(getAllTasks).post(createTask)
router.router("/:id").get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router
