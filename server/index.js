const records = require("./routes/records");
const turbines = require("./routes/turbines");
const species = require("./routes/species");
const users = require("./routes/users");
const auth = require("./routes/auth");
const debug = require("debug")("app:startup");
const config = require("config");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const { sequelize } = require("./models");

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined.");
  process.exit(1);
}

app.use(cors());
app.use(express.json());
app.use(helmet());

debug("Application Name: " + config.get("name"));

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  debug("Morgan enabled...");
}

app.use("/api/records", records);
app.use("/api/species", species);
app.use("/api/turbines", turbines);
app.use("/api/users", users);
app.use("/api/auth", auth);

const port = process.env.PORT || 3900;
app.listen({ port: port }, async () => {
  debug(`Server up on http://localhost:${port}`);
  await sequelize.authenticate();
  debug("Database connected!");
});
