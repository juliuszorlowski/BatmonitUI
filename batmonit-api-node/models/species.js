"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Species extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Record }) {
      // define association here
      this.hasMany(Record, { foreignKey: "speciesId" });
    }
  }
  Species.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Species must have a name" },
          notEmpty: { msg: "Name must not be empty" },
        },
      },
    },
    {
      sequelize,
      tableName: "species",
      modelName: "Species",
    }
  );
  return Species;
};
