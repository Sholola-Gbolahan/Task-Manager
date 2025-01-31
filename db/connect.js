const mongoose = require("mongoose")

const connectionString =
  "mongodb+srv://shololagbolahan:GxU0b51Wk3IZBwfg@nodeexpressprojects.epznk.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProjects"

const connectDB = (url) => {
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
