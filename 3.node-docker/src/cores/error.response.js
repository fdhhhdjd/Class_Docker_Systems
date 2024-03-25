"use strict";

//* IMPORT
const {
  StatusCodes,
  ReasonPhrases,
} = require("../commons/utils/httpStatusCode");
class ErrorResponse extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    this.now = Date.now();
  }
}
class BadRequestRequestError extends ErrorResponse {
  constructor(
    message = ReasonPhrases.BAD_REQUEST,
    statusCode = StatusCodes.BAD_REQUEST
  ) {
    super(message, statusCode);
  }
}

class NotFoundError extends ErrorResponse {
  constructor(
    message = ReasonPhrases.NOT_FOUND,
    statusCode = StatusCodes.NOT_FOUND
  ) {
    super(message, statusCode);
  }
}

class UnauthorizedError extends ErrorResponse {
  constructor(
    message = ReasonPhrases.UNAUTHORIZED,
    statusCode = StatusCodes.UNAUTHORIZED
  ) {
    super(message, statusCode);
  }
}

class GoneError extends ErrorResponse {
  constructor(message = ReasonPhrases.GONE, statusCode = StatusCodes.GONE) {
    super(message, statusCode);
  }
}

class InternalServerError extends ErrorResponse {
  constructor(
    message = ReasonPhrases.INTERNAL_SERVER_ERROR,
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    super(message, statusCode);
  }
}
module.exports = {
  BadRequestRequestError,
  InternalServerError,
  NotFoundError,
  UnauthorizedError,
  GoneError,
};
