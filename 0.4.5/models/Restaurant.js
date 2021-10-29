const Sequelize = require("sequelize");

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

module.exports = restaurantModel;
