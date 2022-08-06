const express = require("express");
const router = express.Router();
const { Record } = require("./models");

router.get("/", async (req, res) => {
  const records = await Record.find();
  res.send(records);
});

module.exports = router;
