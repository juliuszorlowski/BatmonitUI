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

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const turbines = await Turbine.findOne({
      where: { id },
    });
    res.send(turbines);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
