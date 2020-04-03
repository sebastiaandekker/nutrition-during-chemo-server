const { DataTypes } = require("sequelize");
const db = require("../db");

const CancerTypeRecipe = db.define(
  "CancerTypeRecipe",
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

module.exports = CancerTypeRecipe;
