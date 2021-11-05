const { Restaurant, Menu, MenuItem } = require("./../models");

// selects model based on url

const selectModel = (baseUrl) => {
  if (baseUrl.includes("menu-items")) return MenuItem;
  if (baseUrl.includes("menus")) return Menu;
  return Restaurant;
};

// const querySelector = (baseUrl) => {
//   if (baseUrl.test(/\/restaurants\//))
// }

// need to add foreign keys to items and menus
exports.create = async (payload, baseUrl, params) => {
  const Model = selectModel(baseUrl);
  let data;

  if (params.id && baseUrl.includes("menus")) {
    data = { ...payload, ["restaurant_id"]: params.id };
  }
  if (params.menuId && baseUrl.includes("menu-items")) {
    data = {
      ...payload,
      ["menu_id"]: params.menuId,
    };
  }

  try {
    const result = await Model.create(data || payload);
    return result;
  } catch (error) {
    throw error;
  }
};

exports.fetch = async (params, baseUrl) => {
  const Model = selectModel(baseUrl);
  const { id, menuId, itemId } = params;
  console.log(params);
  try {
    const result = await Model.findOne({
      where: { id: itemId || menuId || id },
    });

    if (!result) throw new Error("Not found");

    return result;
  } catch (error) {
    throw error;
  }
};

exports.fetchAll = async (baseUrl) => {
  const Model = selectModel(baseUrl);

  try {
    const result = await Model.findAll({});
    return result;
  } catch (error) {
    throw error;
  }
};

exports.edit = async (params, baseUrl, payload) => {
  const Model = selectModel(baseUrl);
  const { id, menuId, itemId } = params;
  try {
    await Model.update(payload, { where: { id: itemId || menuId || id } });
  } catch (error) {
    throw error;
  }
};

exports.delete = async (params, baseUrl) => {
  const Model = selectModel(baseUrl);
  const { id, menuId, itemId } = params;
  try {
    await Model.destroy({ where: { id: itemId || menuId || id } });
  } catch (error) {
    throw error;
  }
};

exports.fetchMenusByRestaurantId = async (params, baseUrl) => {
  const Model = selectModel(baseUrl);

  try {
    const result = await Model.findAll({
      where: { restaurant_id: params.id },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

exports.fetchMenuitemsByMenuId = async (params, baseUrl) => {
  const Model = selectModel(baseUrl);

  try {
    const result = await Model.findAll({ where: { menu_id: params.menuId } });

    return result;
  } catch (error) {
    throw error;
  }
};

exports.fetchNested = async (baseUrl) => {
  // router.get("/menu-items", controller.fetchNested); //sends list of all menus with nested menu items

  if (baseUrl.includes("menu-items")) {
    try {
      const result = await Menu.findAll({ include: [{ model: MenuItem }] });

      return result;
    } catch (error) {
      throw error;
    }
  }

  try {
    const result = await Restaurant.findAll({ include: [{ model: Menu }] });

    return result;
  } catch (error) {
    throw error;
  }
};
