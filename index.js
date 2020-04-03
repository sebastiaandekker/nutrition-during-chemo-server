const express = require("express");
const db = require("./db");
const User = require("./user/model");
const userRouter = require("./user/router");
const MedicalInformation = require("./medical-information/model");
const medicalInformationRouter = require("./medical-information/router");
const Allergy = require("./allergy/model");
const allergyRouter = require("./allergy/router");
const CancerType = require("./cancer-type/model");
const cancerTypeRouter = require("./cancer-type/router");
const Recipe = require("./recipe/model");
const recipeRouter = require("./recipe/router");
const Tip = require("./Tip/model");
const tipRouter = require("./Tip/router");
const cors = require("cors");

const app = new express();
const corsMiddleware = cors();
const jsonParser = express.json();

app.use(corsMiddleware);
app.use(jsonParser);
app.use(userRouter);
app.use(medicalInformationRouter);
app.use(allergyRouter);
app.use(cancerTypeRouter);
app.use(recipeRouter);
app.use(allergyRouter);
app.use(tipRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log("Server listening on port: ", port));
