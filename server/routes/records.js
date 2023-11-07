const express = require("express");
const router = express.Router();
const { Record } = require("../models");
const { Turbine } = require("../models");
const { Species } = require("../models");

router.get("/", async (req, res) => {
  try {
    const records = await Record.findAll({
      include: [
        { model: Species, as: "species" },
        { model: Turbine, as: "turbine" },
      ],
    });
    res.send(records);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const records = await Record.findOne({
      where: { id },
    });
    res.send(records);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
