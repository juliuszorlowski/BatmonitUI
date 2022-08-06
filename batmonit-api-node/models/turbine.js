"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Turbine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Record }) {
      // define association here
      this.hasMany(Record, { foreignKey: "turbineId" });
    }
  }
  Turbine.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Turbine must have a name" },
          notEmpty: { msg: "Name must not be empty" },
        },
      },
    },
    {
      sequelize,
      tableName: "turbines",
      modelName: "Turbine",
    }
  );
  return Turbine;
};
