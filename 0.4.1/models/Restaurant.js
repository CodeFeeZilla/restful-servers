const Sequelize = require("sequelize");
const sequelize = require("../sequelize");

const restaurantModel = {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
};

const Restaurant = sequelize.define("Restaurant", restaurantModel);

module.exports = Restaurant;
