const { DataTypes } = require("sequelize");
const db = require("../db");

const AllergyRecipe = db.define(
  "AllergyRecipe",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }
  },
  { timestamps: false }
);

module.exports = AllergyRecipe;
