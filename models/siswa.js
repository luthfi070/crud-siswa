"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Siswa extends Model {
    static associate(models) {
      // Define associations, if any
    }
  }

  Siswa.init(
    {
      nama: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Siswa",
      tableName: "students", // Optional: specify a custom table name
      timestamps: false,
    }
  );

  return Siswa;
};
