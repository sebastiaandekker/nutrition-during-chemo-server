const { DataTypes } = require("sequelize");
const db = require("../db");

const User = db.define("User", {
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
    type: DataTypes.STRING
  },
  privacy: {
    type: DataTypes.INTEGER
  },
  expert: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = User;
