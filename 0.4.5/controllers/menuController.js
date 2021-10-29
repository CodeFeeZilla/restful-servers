const { Menu } = require("./../models");

exports.fetchById = async (req, res) => {
  try {
    const menu = await Menu.findOne({
      where: { id: req.params.id },
    });

    res.status(200).json(menu);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.fetch = async (req, res) => {
  try {
    const menu = await Menu.findAll({});

    res.status(200).json(menu);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

exports.create = async (req, res) => {
  console.log(req.body);
  try {
    const menu = await Menu.create(req.body);

    res.status(201).json(menu);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const menuId = await Menu.destroy({
      where: { id: req.params.id },
      restartIdentity: true,
    });

    res.status(200).json(menuId);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.edit = async (req, res) => {
  try {
    const [menuId] = await Menu.update(req.body, {
      where: { id: req.params.id },
    });

    res.status(200).json(menuId);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
