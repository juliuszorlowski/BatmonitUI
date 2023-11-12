const auth = require("../middleware/auth");
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

router.post("/", auth, async (req, res) => {
  const { name } = req.body;
  try {
    const species = await Species.create({ name });

    res.json(species);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err.message);
  }
});

router.put("/:uuid", auth, async (req, res) => {
  const id = req.params.uuid;
  const { name } = req.body;
  try {
    const species = await Species.findOne({ where: { id } });

    species.name = name;

    await species.save();

    return res.json(species);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.delete("/:uuid", auth, async (req, res) => {
  const id = req.params.uuid;
  try {
    const species = await Species.findOne({ where: { id } });

    await species.destroy();

    return res.json({ message: "Species deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
