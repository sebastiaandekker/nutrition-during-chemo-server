const { DataTypes } = require("sequelize");
const db = require("../db");

const FavoriteRecipe = db.define(
  "FavoriteRecipe",
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

module.exports = FavoriteRecipe;
