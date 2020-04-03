const Sequelize = require("sequelize");

const databaseURL =
  process.env.DATABASE_URL ||
  "postgres://postgres:9etCjzBKL3gJRbqfXQqk@localhost:5432/postgres";

const db = new Sequelize(databaseURL);

db.sync({ force: true })
  .then(() => console.log("Database synced"))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

module.exports = db;
