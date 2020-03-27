const { DataTypes } = require("sequelize");
const db = require("../db");
const User = require("../user/model");

const Allergy = db.define("allergy", {
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  }
});

module.exports = Allergy;
