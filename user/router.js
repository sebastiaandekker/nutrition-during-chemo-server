const { Router } = require("express");
const User = require("./model");
// const bcrypt = require("bcrypt");
// const auth = require("../auth/middleware");
// const { toJWT } = require("../auth/jwt");

const router = new Router();

// Create a user
router.post("/user", (req, res, next) => {
  // const user = {
  //   name: req.body.name,
  //   email: req.body.email,
  //   password: bcrypt.hashSync(req.body.password, 10)
  // };
  User.create(req.body)
    .then(user => {
      res.status(201).send(user);
    })
    .catch(next);
});

// Get specific user information
router.get("/user/:userId", (req, res, next) => {
  User.findByPk(req.params.userId)
    .then(user => {
      if (!user) {
        res.status(404).end();
      } else {
        res.json(user);
      }
    })
    .catch(next);
});

module.exports = router;
