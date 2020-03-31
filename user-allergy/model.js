const Sequelize = require("sequelize");
const db = require("../db");

const UserAllergy = db.define("user_allergy", {}, { timestamps: false });

module.exports = UserAllergy;
