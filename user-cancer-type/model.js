const { DataTypes } = require("sequelize");
const db = require("../db");

const UserCancerType = db.define(
  "UserCancerType",
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

module.exports = UserCancerType;
