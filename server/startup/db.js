const logger = require("../startup/logger");
const { sequelize } = require("../models");

module.exports = async function (app) {
  await sequelize.authenticate();
  logger.info("Database connected!");
};
