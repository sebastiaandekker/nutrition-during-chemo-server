const { DataTypes } = require("sequelize");
const db = require("../db");
const User = require("../user/model");
const UserAllergy = require("../user-allergy/model");
const Recipe = require("../recipe/model");
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
