const { DataTypes } = require("sequelize");
const db = require("../db");

const Recipe = db.define("Recipe", {
  picture: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING
  },
  ingredients: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  instructions: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  recipeTip: {
    type: DataTypes.TEXT
  },
  cookingTime: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  calories: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  proteine: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fiber: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sugar: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  carbohydrates: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  healthBenefits: {
    type: DataTypes.TEXT
  },
  sources: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  texture: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  temperature: {
    type: DataTypes.STRING,
    allowNull: false
  },
  taste: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  }
});

module.exports = Recipe;
