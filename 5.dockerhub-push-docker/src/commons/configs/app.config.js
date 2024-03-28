//* LIB
require("dotenv").config();

//* IMPORT
const { NODE_ENV } = require("../constants");

const dev = {
  app: {
    port: process.env.PORT || 5001,
    morgan: process.env.MORGAN || "dev",
    node: process.env.NODE_ENV || NODE_ENV.DEV,
    web_server: process.env.WEB_SERVER,
    log: process.env.LOG_LEVEL,
    accessKey: process.env.ACCESS_TOKEN_SECRET,
    refetchKey: process.env.REFRESH_TOKEN_SECRET,
  },
};
const pro = {
  app: {
    port: process.env.PORT || 5000,
    morgan: process.env.MORGAN || "combined",
    node: process.env.NODE_ENV || NODE_ENV.DEV,
    web_server: process.env.WEB_SERVER,
    log: process.env.LOG_LEVEL,
    accessKey: process.env.ACCESS_TOKEN_SECRET,
    refetchKey: process.env.REFRESH_TOKEN_SECRET,
  },
};
const config = { dev, pro };

const env = process.env.NODE_ENV || NODE_ENV.DEV;

module.exports = config[env];
