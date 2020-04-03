const { Router } = require("express");
const Recipe = require("./model");
// const bcrypt = require("bcrypt");
// const auth = require("../auth/middleware");
// const { toJWT } = require("../auth/jwt");

const router = new Router();

// Get all recipes
router.get("/recipe", (req, res, next) => {
  Recipe.findAll().then(result => {
    return res.send(result);
  });
});

// Create a recipe
router.post("/recipe", (req, res, next) => {
  Recipe.create(req.body)
    .then(recipe => {
      res.status(201).send(recipe);
    })
    .catch(next);
});

// Get specific recipe
router.get("/recipe/:recipeId", (req, res, next) => {
  Recipe.findByPk(req.params.recipeId)
    .then(recipe => {
      if (!recipe) {
        res.status(404).end();
      } else {
        res.json(recipe);
      }
    })
    .catch(next);
});

module.exports = router;
