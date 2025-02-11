const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
require("dotenv").config()
const connectDB = require("./db/connect")
const notFound = require("./middleware/not-found")

// middleware
app.use(express.json())
app.use(express.static("./public"))

app.use("/api/v1/tasks", tasks)

app.use(notFound)
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
