const admin = require("../middleware/admin");
const auth = require("../middleware/auth");
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
    const turbine = await Turbine.findOne({
      where: { id },
    });
    if (!turbine)
      return res
        .status(404)
        .json("The turbine with the given ID was not found.");

    res.send(turbine);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.post("/", [auth, admin], async (req, res) => {
  const { name } = req.body;
  try {
    const turbine = await Turbine.create({ name });

    res.json(turbine);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err.message);
  }
});

router.put("/:uuid", [auth, admin], async (req, res) => {
  const id = req.params.uuid;
  const { name } = req.body;
  try {
    const turbine = await Turbine.findOne({ where: { id } });

    turbine.name = name;

    await turbine.save();

    return res.json(turbine);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.delete("/:uuid", [auth, admin], async (req, res) => {
  const id = req.params.uuid;
  try {
    const turbine = await Turbine.findOne({ where: { id } });

    await turbine.destroy();

    return res.json({ message: "Turbine deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
