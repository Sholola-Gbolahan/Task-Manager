const { CustomAPIError } = require("../errors/custom-error")

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err)
  // a condition to check if the error instance is the same with our CustomAPIError
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }

  return res.status(500).json({ msg: "something went wrong, please try again" })
}

module.exports = errorHandlerMiddleware
