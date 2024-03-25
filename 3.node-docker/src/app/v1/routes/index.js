"use strict";

//* LIB
const express = require("express");
const {
  ReasonPhrases,
  StatusCodes,
} = require("../../../commons/utils/httpStatusCode");

const router = express.Router();

router.use("/login", require("./auth"));

router.get("/", async (_, res, __) => {
  const healthCheck = {
    uptime: process.uptime(),
    message: ReasonPhrases.OK,
    timestamp: Date.now(),
  };
  return res.status(StatusCodes.OK).json(healthCheck);
});

module.exports = router;
