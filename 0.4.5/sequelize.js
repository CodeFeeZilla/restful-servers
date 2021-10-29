const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./databases/db.sqlite",
});

module.exports = sequelize;
