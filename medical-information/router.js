const { Router } = require("express");
const MedicalInformation = require("/model");
// const User = require("./model");
// const bcrypt = require("bcrypt");
// const auth = require("../auth/middleware");
// const { toJWT } = require("../auth/jwt");

const router = new Router();

// Create medical information
router.post("/medical-information", (req, res, next) => {
  MedicalInformation.create(req.body)
    .then(medicalInfo => {
      res.status(201).send(medicalInfo);
    })
    .catch(next);
});

module.exports = router;
