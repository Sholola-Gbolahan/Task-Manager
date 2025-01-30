const mongoose = require("mongoose")

const connectionString =
  "mongodb+srv://shololagbolahan:GxU0b51Wk3IZBwfg@nodeexpressprojects.epznk.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProjects"

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to the DB"))
  .catch((err) => console.log(err))
