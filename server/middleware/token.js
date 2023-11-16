const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (user) {
  return jwt.sign(
    { uuid: user.uuid, name: user.name, isAdmin: user.isAdmin },
    config.get("jwtPrivateKey")
  );
};
