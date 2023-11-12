const auth = require("../middleware/auth");
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/me", auth, async (req, res) => {
  const uuid = req.user.uuid;
  try {
    const user = await User.findOne({ where: { uuid } });

    if (user === null) {
      res.json("User not found.");
    } else {
      user.password = undefined;
      res.send(user);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.post("/", async (req, res) => {
  let user = await User.findOne({ where: { email: req.body.email } });
  if (user != null) {
    return res.status(400).json("User already registered.");
  }

  const { name, email } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    user = await User.create({ name, email, password });

    const token = jwt.sign({ uuid: user.uuid }, config.get("jwtPrivateKey"));
    res.header("x-auth-token", token).json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err.message);
  }
});

router.put("/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ where: { uuid } });

    user.name = name;
    user.email = email;
    user.password = password;

    await user.save();

    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.delete("/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const user = await User.findOne({ where: { uuid } });

    await user.destroy();

    return res.json({ message: "User deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
