const { MenuItem } = require("./../models");

exports.fetchById = async (req, res) => {
  try {
    const menuItem = await MenuItem.findOne({
      where: { id: req.params.id },
    });

    res.status(200).json(menuItem);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.fetch = async (req, res) => {
  try {
    const menuItem = await MenuItem.findAll({});

    res.status(200).json(menuItem);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

exports.create = async (req, res) => {
  console.log(req.body);
  try {
    const menuItem = await MenuItem.create(req.body);

    res.status(201).json(menuItem);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const menuItemId = await MenuItem.destroy({
      where: { id: req.params.id },
      restartIdentity: true,
    });

    res.status(200).json(menuItemId);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.edit = async (req, res) => {
  try {
    const [menuItemId] = await MenuItem.update(req.body, {
      where: { id: req.params.id },
    });

    res.status(200).json(menuItemId);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
