const User = require("../user/model");
const Allergy = require("../allergy/model");
const MedicalInformation = require("../medical-information/model");
const UserAllergy = require("../user-allergy/model");
const CancerType = require("../cancer-type/model");
const UserCancerType = require("../user-cancer-type/model");

async function seedUsersAndMedicalInformation() {
  // User seeds
  const sebastiaan = await User.create({
    firstName: "Sebastiaan",
    lastName: "Dekker",
    email: "sebastiaandekker@gmail.com",
    password: "secret",
    gender: "male",
    birthDate: "1988-01-21",
    accountType: "Patiënt",
    privacy: 1,
    expert: false
  });

  const olga = await User.create({
    firstName: "Olga",
    lastName: "Klepatska",
    email: "olgaklepatska@gmail.com",
    password: "secret",
    gender: "female",
    birthDate: "1993-04-13",
    accountType: "Mantelzorger",
    privacy: 2,
    expert: false
  });

  const karin = await User.create({
    firstName: "Karin",
    lastName: "Dekker",
    email: "karindekker@gmail.com",
    password: "secret",
    gender: "female",
    birthDate: "1960-01-12",
    accountType: "Mantelzorger",
    privacy: 3,
    expert: false
  });

  // MedicalInformation seeds
  const sebastiaanMedicInfo = await MedicalInformation.create({
    UserId: 1,
    medication:
      "Ik slik kruidensupplementen tegen migraine, extra B-vitamines en ijzer.",
    medicationHistory:
      "Heb nooit andere medicatie in continuiteit of naar noodzaak.",
    treatment: "Lichte chemo voor uitroeien van kankercellen."
  });

  const olgaMedicInfo = await MedicalInformation.create({
    UserId: 2,
    medication:
      "Mijn partner slikt kruidensupplementen om immuunsysteem te boosten.",
    medicationHistory:
      "Hij heeft nooit andere medicatie in continuiteit geslikt.",
    treatment: "Lichte chemo voor uitroeien van kankercellen."
  });

  const karinMedicInfo = await MedicalInformation.create({
    UserId: 3,
    medication:
      "Mijn moeder slikt kruidensupplementen om immuunsysteem te boosten.",
    medicationHistory:
      "Zij heeft nooit andere medicatie in continuiteit geslikt.",
    treatment: "Lichte chemo voor uitroeien van kankercellen."
  });

  // Allergy seeds
  const soja = await Allergy.create({
    name: "Soja",
    description:
      "Soja behoort tot de peulvruchten en is een van de belangrijkste voedselallergenen."
  });

  const zuivel = await Allergy.create({
    name: "Zuivel",
    description:
      "Als je lijf allergisch reageert op het eiwit in koemelk, dan heb je een koemelkeiwitallergie."
  });

  const gluten = await Allergy.create({
    name: "Gluten",
    description:
      "Overgevoeligheid voor gluten (coeliakie) is eigenlijk geen allergie. Coeliakie is een auto-immuunziekte."
  });

  const noten = await Allergy.create({
    name: "Noten",
    description:
      "Wie een notenallergie heeft reageert vaak op meerdere soorten noten."
  });

  // UserAllergy many to many seeds
  await soja.addUser(sebastiaan, {});
  await zuivel.addUser(sebastiaan, {});
  await gluten.addUser(sebastiaan, {});
  await noten.addUser(sebastiaan, {});

  await olga.addAllergy(soja, {});
  await olga.addAllergy(zuivel, {});
  await olga.addAllergy(gluten, {});
  await olga.addAllergy(noten, {});

  // CancerType seeds
  const long = await CancerType.create({
    name: "Longkanker",
    description: "Omschrijving over longkanker gebaseerd op kennis van experts."
  });

  const nier = await CancerType.create({
    name: "Nierkanker",
    description: "Omschrijving over nierkanker gebaseerd op kennis van experts."
  });

  const borst = await CancerType.create({
    name: "Borstkanker",
    description:
      "Omschrijving over borstkanker gebaseerd op kennis van experts."
  });

  const darm = await CancerType.create({
    name: "Darmkanker",
    description: "Omschrijving over darmkanker gebaseerd op kennis van experts."
  });

  // UserCanerType many to many seeds
  await long.addUser(sebastiaan, {});
  await nier.addUser(sebastiaan, {});
  await borst.addUser(sebastiaan, {});
  await darm.addUser(sebastiaan, {});

  await olga.addCancerType(long, {});
  await olga.addCancerType(nier, {});
  await olga.addCancerType(borst, {});
  await olga.addCancerType(darm, {});
}

seedUsersAndMedicalInformation();
