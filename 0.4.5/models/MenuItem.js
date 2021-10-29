const Sequelize = require("sequelize");

const menuItemModel = {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
};

module.exports = menuItemModel;
