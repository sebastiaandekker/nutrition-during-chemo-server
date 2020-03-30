const { Router } = require("express");
const Allergy = require("./model");
// const User = require("./model");
// const auth = require("../auth/middleware");
// const { toJWT } = require("../auth/jwt");

const router = new Router();

router.post("/allergy", (req, res, next) => {
  Allergy.create(req.body)
    .then(allergy => {
      res.status(201).send(allergy);
    })
    .catch(next);
});

module.exports = router;
