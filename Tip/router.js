const { Router } = require("express");
const Tip = require("./model");
// const bcrypt = require("bcrypt");
// const auth = require("../auth/middleware");
// const { toJWT } = require("../auth/jwt");

const router = new Router();

// Get all tips
router.get("/tip", (req, res, next) => {
  Tip.findAll().then(result => {
    return res.send(result);
  });
});

// Create a tip
router.post("/tip", (req, res, next) => {
  Tip.create(req.body)
    .then(tip => {
      res.status(201).send(tip);
    })
    .catch(next);
});

// Get specific tip
router.get("/tip/:tipId", (req, res, next) => {
  Tip.findByPk(req.params.recipeId)
    .then(tip => {
      if (!tip) {
        res.status(404).end();
      } else {
        res.json(tip);
      }
    })
    .catch(next);
});

module.exports = router;
