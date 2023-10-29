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

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const species = await Species.findOne({
      where: { id },
    });
    res.send(species);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
