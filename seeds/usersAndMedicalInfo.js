const User = require("../User/model");
const MedicalInformation = require("../medical-information/model");
const Allergy = require("../allergy/model");

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
    userId: 1,
    medication:
      "Ik slik kruidensupplementen tegen migraine, extra B-vitamines en ijzer.",
    medicationHistory:
      "Heb nooit andere medicatie in continuiteit of naar noodzaak.",
    treatment: "Lichte chemo voor uitroeien van kankercellen."
  });

  const olgaMedicInfo = await MedicalInformation.create({
    userId: 2,
    medication:
      "Mijn partner slikt kruidensupplementen om immuunsysteem te boosten.",
    medicationHistory:
      "Hij heeft nooit andere medicatie in continuiteit geslikt.",
    treatment: "Lichte chemo voor uitroeien van kankercellen."
  });

  const karinMedicInfo = await MedicalInformation.create({
    userId: 3,
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
}

seedUsersAndMedicalInformation();
