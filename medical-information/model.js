const { DataTypes } = require("sequelize");
const db = require("../db");
const User = require("../user/model");

const MedicalInformation = db.define("medical-information", {
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
