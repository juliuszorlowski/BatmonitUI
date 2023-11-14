const logger = require("./startup/logger");
const express = require("express");
const config = require("config");
const app = express();

require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () => {
  logger.info(`Server up on http://localhost:${port}`);
});

module.exports = server;
