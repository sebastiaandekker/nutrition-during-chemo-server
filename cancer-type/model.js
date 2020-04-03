const { DataTypes } = require("sequelize");
const db = require("../db");
const User = require("../user/model");
const UserCancerType = require("../user-cancer-type/model");
const Recipe = require("../recipe/model");
const CancerTypeRecipe = require("../CancerTypeRecipe/model");

const CancerType = db.define("CancerType", {
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  }
});

User.belongsToMany(CancerType, { through: UserCancerType });
CancerType.belongsToMany(User, { through: UserCancerType });
User.hasMany(UserCancerType);
CancerType.hasMany(UserCancerType);
UserCancerType.belongsTo(User);
UserCancerType.belongsTo(CancerType);

Recipe.belongsToMany(CancerType, { through: CancerTypeRecipe });
CancerType.belongsToMany(Recipe, { through: CancerTypeRecipe });
Recipe.hasMany(CancerTypeRecipe);
CancerTypeRecipe.belongsTo(Recipe);
CancerType.hasMany(CancerTypeRecipe);
CancerTypeRecipe.belongsTo(CancerType);

module.exports = CancerType;
