//* LIB
require("dotenv").config();

//* IMPORT
const { NODE_ENV } = require("../constants");

const dev = {
  gmail: {
    port: process.env.SMTP_PORT,
    host: process.env.SMTP_HOST,
    service: process.env.SMTP_SERVICE,
    mail: process.env.SMTP_MAIL,
    password: process.env.SMTP_PASSWORD,
  },
};
const pro = {
  gmail: {
    port: process.env.SMTP_PORT,
    host: process.env.SMTP_HOST,
    service: process.env.SMTP_SERVICE,
    mail: process.env.SMTP_MAIL,
    password: process.env.SMTP_PASSWORD,
  },
};
const config = { dev, pro };

const env = process.env.NODE_ENV || NODE_ENV.DEV;

module.exports = config[env];
