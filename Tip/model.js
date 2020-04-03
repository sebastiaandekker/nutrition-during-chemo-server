const { DataTypes } = require("sequelize");
const db = require("../db");
const User = require("../User/model");
const FavoriteTip = require("../FavoriteTip/model");

const Tip = db.define("Tip", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  sources: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  categories: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  }
});

User.belongsToMany(Tip, { through: FavoriteTip });
Tip.belongsToMany(User, { through: FavoriteTip });
User.hasMany(FavoriteTip);
Tip.hasMany(FavoriteTip);
FavoriteTip.belongsTo(User);
FavoriteTip.belongsTo(Tip);

module.exports = Tip;
