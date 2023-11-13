const express = require("express");
const records = require("../routes/records");
const turbines = require("../routes/turbines");
const species = require("../routes/species");
const users = require("../routes/users");
const auth = require("../routes/auth");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/records", records);
  app.use("/api/species", species);
  app.use("/api/turbines", turbines);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
};
