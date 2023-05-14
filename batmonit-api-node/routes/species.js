const express = require("express");
const router = express.Router();
const { Species } = require("../models");

router.get("/", async (req, res) => {
  try {
    const species = await Species.findAll();
    res.send(species);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const species = await Species.findOne({
      where: { uuid },
    });
    res.send(species);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
