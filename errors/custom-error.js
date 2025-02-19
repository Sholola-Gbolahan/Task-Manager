// Note:
// 1. A constructor method is a special method we invoke when we create a new instance of a class

class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

// Function that can be called for creating new instance
const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode)
}

module.exports = { createCustomError, CustomAPIError }
