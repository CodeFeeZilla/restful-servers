const Sequelize = require("sequelize");

const restaurantModel = {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      // isAlpha: true,
      notEmpty: true,
      max: 50,
    },
    notEmpty: true,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      // isUrl: true,
      notEmpty: true,
    },
  },
};

module.exports = restaurantModel;
