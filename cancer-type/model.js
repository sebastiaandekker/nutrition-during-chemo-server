const { DataTypes } = require("sequelize");
const db = require("../db");
const User = require("../user/model");
const UserCancerType = require("../user-cancer-type/model");

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

module.exports = CancerType;
