const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
require("dotenv").config()
const connectDB = require("./db/connect")

// middleware
app.use(express.json())

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manger App")
})

app.use("/api/v1/tasks", tasks)

// app.get('/api/v1/tasks')     - get all the task
// app.post('/api/v1/tasks')     - create a new task
// app.get('/api/v1/tasks/:id')     - get single task
// app.patch('/api/v1/tasks/:id')     - update task
// app.delete('/api/v1/tasks/:id')   - Delete task
const port = 3000

const startApp = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

startApp()
