const { DataTypes } = require("sequelize");
const db = require("../db");
const User = require("../user/model");
const UserAllergy = require("../user-allergy/model");

const Allergy = db.define("Allergy", {
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  }
});

User.belongsToMany(Allergy, { through: UserAllergy });
Allergy.belongsToMany(User, { through: UserAllergy });
User.hasMany(UserAllergy);
UserAllergy.belongsTo(User);
Allergy.hasMany(UserAllergy);
UserAllergy.belongsTo(Allergy);

module.exports = Allergy;
