const records = require("./routes/records");
const turbines = require("./routes/turbines");
const species = require("./routes/species");
const users = require("./routes/users");
const debug = require("debug")("app:startup");
const config = require("config");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const { sequelize, Record, Turbine, Species } = require("./models");

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

const port = process.env.PORT || 3900;
app.listen({ port: port }, async () => {
  debug(`Server up on http://localhost:${port}`);
  await sequelize.authenticate();
  debug("Database connected!");
});

// TODO: refactor and move to routes

// app.post("/records", async (req, res) => {
//   const {
//     date,
//     turbineUuid,
//     bat,
//     speciesUuid,
//     turbineStopSignal,
//     verification,
//     audio,
//     sonogram,
//   } = req.body;

//   try {
//     const turbine = await Turbine.findOne({ where: { uuid: turbineUuid } });

//     const species = await Species.findOne({ where: { uuid: speciesUuid } });

//     const record = await Record.create({
//       date,
//       turbineId: turbine.id,
//       bat,
//       speciesId: species.id,
//       turbineStopSignal,
//       verification,
//       audio,
//       sonogram,
//     });

//     return res.json(record);
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json(err);
//   }
// });

// app.put("/records/:uuid", async (req, res) => {
//   const uuid = req.params.uuid;
//   const { date, bat, turbineStopSignal, verification, audio, sonogram } =
//     req.body;
//   try {
//     const record = await Record.findOne({ where: { uuid } });

//     record.date = date;
//     record.bat = bat;
//     record.turbineStopSignal = turbineStopSignal;
//     record.verification = verification;
//     record.audio = audio;
//     record.sonogram = sonogram;

//     await record.save();

//     return res.json(record);
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: "Something went wrong" });
//   }
// });

// app.delete("/records/:uuid", async (req, res) => {
//   const uuid = req.params.uuid;
//   try {
//     const record = await Record.findOne({ where: { uuid } });

//     await record.destroy();

//     return res.json({ message: "Record deleted!" });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: "Something went wrong" });
//   }
// });

// app.post("/turbines", async (req, res) => {
//   const { name } = req.body;

//   try {
//     const turbine = await Turbine.create({ name });

//     return res.json(turbine);
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json(err);
//   }
// });
