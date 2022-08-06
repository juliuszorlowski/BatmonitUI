const express = require("express");
const router = express.Router();
const { Turbine } = require("./models");

router.get("/", async (req, res) => {
  const turbines = await Turbine.findAll().sort("name");
  res.send(turbines);
});

module.exports = router;
