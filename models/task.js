const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You must provide name"],
    trim: true,
    maxLength: [20, "name cannot be more than 20 characters"],
  },
  completed: Boolean,
})

module.exports = mongoose.model("Task", TaskSchema)
