const { DataTypes } = require("sequelize");
const db = require("../db");

const FavoriteTip = db.define(
  "FavoriteTip",
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

module.exports = FavoriteTip;
