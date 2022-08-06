const express = require("express");
const router = express.Router();
const { Species } = require("./models/species");

router.get("/", async (req, res) => {
  const species = await Species.findAll();
  res.send(species);
});

module.exports = router;
