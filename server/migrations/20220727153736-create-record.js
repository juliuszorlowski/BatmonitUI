"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("records", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
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
      },
      sonogram: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("records");
  },
};
