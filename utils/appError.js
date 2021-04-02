class HandleAppError extends Error {
  constructor(message, status) {
    //子類別內呼叫父類別的建構函式，且子類別的this是指向我們new出來的東西
    super(message);
    this.message = message;
    this.status = `${status}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = HandleAppError;
