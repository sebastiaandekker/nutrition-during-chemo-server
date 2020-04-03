const User = require("../user/model");
const Allergy = require("../allergy/model");
const MedicalInformation = require("../medical-information/model");
const UserAllergy = require("../user-allergy/model");
const CancerType = require("../cancer-type/model");
const UserCancerType = require("../user-cancer-type/model");
const Recipe = require("../recipe/model");

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

  // Recipe seeds
  const meloenSalade = await Recipe.create({
    picture:
      "http://2.bp.blogspot.com/-p396IHk15h8/VWyQ-YDHxDI/AAAAAAAACUI/F-MAso9ANjw/s1600/watermeloen%2Bsalade.jpg",
    title: "Meloen Feta Salade",
    author: "José en Cristine",
    ingredients: [
      "1 lente-uitje",
      "1 takje peterselie",
      "ca. 25 gram fetakaas",
      "1 eetlepel citroensap",
      "2 eetlepels lijnzaad- of olijfolie",
      "snufje zout",
      "snufje peper",
      "1/2 hele kleine cantaloup meloen"
    ],
    instructions: [
      "Maak het lente-uitje schoon en hak het fijn. Hak de peterselie fijn. Verkruimel de fetakaas.",
      "Meng het lente-tuitje met de peterselie, het citroensap, de olie, een snufje zout en een snufje peper.",
      "Snijd de meloen in 3 parten en schep de zaadjes eruit. Snijd het vruchtveel los van de schil en in stukjes. Doe ze in een schaal.",
      "Meng de feta en lente-uidressing met de meloen. Zet de meloenschipartjes op kleine bortjes en verdeel de meloenselade erover."
    ],
    recipeTip:
      "e kunt deze meloensalade minstens een dag in de koelkast bewaren. Dus geen probleem als er wat overblijft.",
    cookingTime: 15,
    calories: 168,
    proteine: 12,
    fiber: 16,
    sugar: 32,
    carbohydrates: 48,
    healthBenefits:
      "In meloen zit veel Vitamine A, luteïne, zeaxan-thine en cryptoxanthine. Dit zijn antioxidanten die cellen beschermen tegen beschadiging. Hiernaast is meloen rijk aan kalium...",
    sources: ["https://nutritionfacts.org/", "https://nutritionfacts.org/"],
    texture: ["Zacht met beet", "Luchtig", "Vloeibaar"],
    temperature: "Koud",
    taste: ["Zoet", "Uitgesproken", "Mild"]
  });

  const fetaSalade = await Recipe.create({
    picture:
      "http://2.bp.blogspot.com/-p396IHk15h8/VWyQ-YDHxDI/AAAAAAAACUI/F-MAso9ANjw/s1600/watermeloen%2Bsalade.jpg",
    title: "Meloen Feta Salade",
    author: "José en Cristine",
    ingredients: [
      "1 lente-uitje",
      "1 takje peterselie",
      "ca. 25 gram fetakaas",
      "1 eetlepel citroensap",
      "2 eetlepels lijnzaad- of olijfolie",
      "snufje zout",
      "snufje peper",
      "1/2 hele kleine cantaloup meloen"
    ],
    instructions: [
      "Maak het lente-uitje schoon en hak het fijn. Hak de peterselie fijn. Verkruimel de fetakaas.",
      "Meng het lente-tuitje met de peterselie, het citroensap, de olie, een snufje zout en een snufje peper.",
      "Snijd de meloen in 3 parten en schep de zaadjes eruit. Snijd het vruchtveel los van de schil en in stukjes. Doe ze in een schaal.",
      "Meng de feta en lente-uidressing met de meloen. Zet de meloenschipartjes op kleine bortjes en verdeel de meloenselade erover."
    ],
    recipeTip:
      "e kunt deze meloensalade minstens een dag in de koelkast bewaren. Dus geen probleem als er wat overblijft.",
    cookingTime: 15,
    calories: 168,
    proteine: 12,
    fiber: 16,
    sugar: 32,
    carbohydrates: 48,
    healthBenefits:
      "In meloen zit veel Vitamine A, luteïne, zeaxan-thine en cryptoxanthine. Dit zijn antioxidanten die cellen beschermen tegen beschadiging. Hiernaast is meloen rijk aan kalium...",
    sources: ["https://nutritionfacts.org/", "https://nutritionfacts.org/"],
    texture: ["Zacht met beet", "Luchtig", "Vloeibaar"],
    temperature: "Koud",
    taste: ["Zoet", "Uitgesproken", "Mild"]
  });

  // UserRecipe many to many seeds
  await meloenSalade.addUser(sebastiaan, {});
  await fetaSalade.addUser(sebastiaan, {});

  await olga.addRecipe(meloenSalade, {});
  await olga.addRecipe(fetaSalade, {});

  // AllergyRecipe many to many seeds
  await soja.addRecipe(meloenSalade, {});
  await zuivel.addRecipe(meloenSalade, {});
  await gluten.addRecipe(meloenSalade, {});
  await noten.addRecipe(meloenSalade, {});

  await fetaSalade.addAllergy(soja, {});
  await fetaSalade.addAllergy(zuivel, {});

  // AllergyRecipe many to many seeds
  await long.addRecipe(meloenSalade, {});
  await nier.addRecipe(meloenSalade, {});
  await borst.addRecipe(meloenSalade, {});
  await darm.addRecipe(meloenSalade, {});

  await fetaSalade.addCancerType(long, {});
  await fetaSalade.addCancerType(nier, {});
}

seedUsersAndMedicalInformation();
