//* LIB
const nodeMailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");

const sendEmail = async (options) => {
  try {
    const transporter = nodeMailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      service: process.env.SMTP_SERVICE,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    const handlebarOptions = {
      viewEngine: {
        extName: ".html",
        partialsDir: path.resolve("./src/views"),
        defaultLayout: false,
      },
      viewPath: path.resolve("./src/views"),
      extName: ".html",
    };

    transporter.use("compile", hbs(handlebarOptions));

    const mailOptions = {
      from: process.env.SMTP_MAIL,
      to: options.to,
      subject: options.subject,
      attachments: options.attachments,
      template: options.template,
      context: options.context,
      html: options.html,
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = sendEmail;
