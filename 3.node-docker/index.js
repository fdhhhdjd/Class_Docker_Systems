//* IMPORT
const app = require("./src/app.js");

const PORT = 5000;

const server = app.listen(PORT, () => {
  console.info(`💸 Api backend start with http://localhost:${PORT} 🔥`);
});

process.on("SIGINT", () => {
  server.close(() => console.log(`Exit Server Express`));
});
