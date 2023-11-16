const generateToken = require("../middleware/token");
const bcrypt = require("bcrypt");
const express = require("express");
const Joi = require("joi");
const router = express.Router();
const { User } = require("../models");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  let user = await User.findOne({ where: { email: req.body.email } });
  if (user == null) return res.status(400).json("Invalid email or password.");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).json("Invalid email or password.");

  const token = generateToken(user);
  res.send(token);
});

function validate(req) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(req);
}

module.exports = router;
