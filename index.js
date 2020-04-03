const express = require("express");
const db = require("./db");
const user = require("./User/model");
const userRouter = require("./User/router");
const medicalInformation = require("./MedicalInformation/model");
const medicalInformationRouter = require("./MedicalInformation/router");
const allergy = require("./Allergy/model");
const allergyRouter = require("./Allergy/router");
const cancerType = require("./CancerType/model");
const cancerTypeRouter = require("./CancerType/router");
const recipe = require("./Recipe/model");
const recipeRouter = require("./Recipe/router");
const tip = require("./Tip/model");
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
