//* LIB
const express = require("express");

//* IMPORT
const loginController = require("../../controllers/auth.controller");
const { asyncHandler } = require("../../../../commons/helpers/asyncHandler");

const router = express.Router();

router.post("/login", asyncHandler(loginController.login));

module.exports = router;
