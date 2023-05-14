const express = require("express");
const router = express.Router();
const { Record } = require("../models");

router.get("/", async (req, res) => {
  try {
    const records = await Record.findAll();
    res.send(records);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const records = await Record.findOne({
      where: { uuid },
    });
    res.send(records);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
