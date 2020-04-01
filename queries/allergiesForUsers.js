const User = require("../user/model");
const Allergy = require("../allergy/model");
const UserAllergy = require("../user-allergy/model");

async function getAllergiesForUsers() {
  // Get allergies from a specific user
  const user = await User.findOne({
    where: {
      firstName: "Sebastiaan"
    },
    include: Allergy
  });
  const allergies = await user.getAllergies();
  console.log("allergies:", allergies);

  // Get users from a specific allergy
  const allergy = await Allergy.findOne({
    where: {
      name: "Soja"
    },
    include: User
  });
  const users = await allergy.getUsers();
  console.log("users:", users);

  // Find all users and include user-allergies
  // const allUsers = await User.findAll({ include: UserAllergy });
  // console.log("allUsers:", allUsers);

  // Find all user-allergies and include user information
  const allUserAllergies = await UserAllergy.findAll({ include: User });
  console.log("allUserAllergies:", allUserAllergies);
}

getAllergiesForUsers();
