const User = require("../user/model");
const Allergy = require("../allergy/model");

async function getAllergiesForUsers() {
  // Get allergies from a specific user
  const user = await User.findOne({
    where: {
      firstName: "Sebastiaan"
    },
    include: Allergy
  });
  console.log("user:", user.dataValues);

  const allergies = await user.getAllergies();
  console.log("allergies:", allergies);

  // Get users from a specific allergy
  const allergy = await Allergy.findOne({
    where: {
      name: "Soja"
    },
    include: User
  });
  console.log("allergy:", allergy.dataValues);

  const users = await allergy.getUsers();
  console.log("users:", users);
}

getAllergiesForUsers();
