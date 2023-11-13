const logger = require("./startup/logger");
const express = require("express");
const app = express();

require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();

const port = process.env.PORT || 3900;
app.listen({ port: port }, async () => {
  logger.info(`Server up on http://localhost:${port}`);
});
