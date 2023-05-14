const express = require("express");
const router = express.Router();
const { Turbine } = require("../models");

router.get("/", async (req, res) => {
  try {
    const turbines = await Turbine.findAll();
    res.send(turbines);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const turbines = await Turbine.findOne({
      where: { uuid },
    });
    res.send(turbines);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
