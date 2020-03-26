const { DataTypes } = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  accountType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  privacy: {
    type: DataTypes.INTEGER
  },
  expert: {
    type: DataTypes.BOOLEAN
  }
});

module.exports = User;
