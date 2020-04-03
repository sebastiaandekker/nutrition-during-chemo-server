const { Router } = require("express");
const CancerType = require("./model");

const router = new Router();

router.post("/cancer-type", (req, res, next) => {
  CancerType.create(req.body)
    .then(cancerType => {
      res.status(201).send(cancerType);
    })
    .catch(next);
});

module.exports = router;
