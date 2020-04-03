const { DataTypes } = require("sequelize");
const db = require("../db");
const User = require("../User/model");
const UserAllergy = require("../UserAllergy/model");
const Recipe = require("../Recipe/model");
const AllergyRecipe = require("../AllergyRecipe/model");

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

Recipe.belongsToMany(Allergy, { through: AllergyRecipe });
Allergy.belongsToMany(Recipe, { through: AllergyRecipe });
Recipe.hasMany(AllergyRecipe);
AllergyRecipe.belongsTo(Recipe);
Allergy.hasMany(AllergyRecipe);
AllergyRecipe.belongsTo(Allergy);

module.exports = Allergy;
