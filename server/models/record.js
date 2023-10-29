"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Turbine, Species }) {
      // define association here
      this.belongsTo(Turbine, { foreignKey: "turbineId" });
      this.belongsTo(Species, { foreignKey: "speciesId" });
    }
  }
  Record.init(
    {
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: "Record must have a date" },
          notEmpty: { msg: "Date must not be empty" },
        },
      },
      turbineId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bat: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      speciesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      turbineStopSignal: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      verification: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      audio: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Record must have a date" },
          notEmpty: { msg: "Date must not be empty" },
        },
      },
      sonogram: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Record must have a date" },
          notEmpty: { msg: "Date must not be empty" },
        },
      },
    },
    {
      sequelize,
      tableName: "records",
      modelName: "Record",
    }
  );
  return Record;
};
