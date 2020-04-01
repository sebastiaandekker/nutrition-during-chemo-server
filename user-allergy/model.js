const { DataTypes } = require("sequelize");
const db = require("../db");

const UserAllergy = db.define(
  "user_allergy",
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

module.exports = UserAllergy;
