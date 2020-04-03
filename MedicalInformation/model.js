const { DataTypes } = require("sequelize");
const db = require("../db");
const User = require("../User/model");

const MedicalInformation = db.define("MedicalInformation", {
  medication: {
    type: DataTypes.TEXT
  },
  medicationHistory: {
    type: DataTypes.TEXT
  },
  treatment: {
    type: DataTypes.TEXT
  }
});

MedicalInformation.belongsTo(User);
User.hasOne(MedicalInformation);

module.exports = MedicalInformation;
