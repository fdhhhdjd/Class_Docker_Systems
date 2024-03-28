//* LIB
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { default: helmet } = require("helmet");
const compression = require("compression");
const dotenv = require("dotenv");

//* IMPORT
const { NODE_ENV, LIMIT_BODY } = require("./commons/constants");
const { errorHandler } = require("./commons/helpers/errorHandle");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(helmet());
app.use(compression());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  express.json({
    limit: LIMIT_BODY._5_MB,
  })
);

// * V1
app.use("/api/v1", require("./app/v1/routes"));

app.use((error, __, next) => {
  next(error);
});

app.use((error, req, res, ____) => {
  const checkNodeApp = "dev" === NODE_ENV.DEV;
  try {
    const resultError = errorHandler(error, checkNodeApp);

    return res.status(resultError?.response.status).json(resultError?.response);
  } catch (error) {
    const resultError = errorHandler(error, checkNodeApp);
    return res.status(resultError?.response.status).json(resultError?.response);
  }
});

module.exports = app;
