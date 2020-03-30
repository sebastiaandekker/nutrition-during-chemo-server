const { Router } = require("express");
const Allergy = require("./model");

const router = new Router();

router.post("/allergy", (req, res, next) => {
  Allergy.create(req.body)
    .then(allergy => {
      res.status(201).send(allergy);
    })
    .catch(next);
});

module.exports = router;
