import restaurantsApi from "../../api/restaurantsApi";
import history from "../../history";
import types from "../types";

// double check this file please - future me

export const fetchItems = (id, menuId) => async (disptach) => {
  const response = await restaurantsApi.get(`/menus/${menuId}/menu-items`);

  disptach({
    type: types.SELECT_MENU,
    payload: { id: id, menuId: menuId, type: "items" },
  });
  disptach({ type: types.FETCH_ITEMS, payload: response.data });
};

export const fetchItem = (id) => async (dispatch) => {
  const response = await restaurantsApi.get(`/menus/${id}`);

  dispatch({ type: types.FETCH_ITEM, payload: response.data });
};

export const createItem = (id, menuId, formValues) => async (dispatch) => {
  const response = await restaurantsApi.post(
    `/menus/${menuId}/menu-items`,
    formValues
  );

  dispatch({ type: types.CREATE_ITEM, payload: response.data });
  //todo
  //redirect back to menu-items after item creation
  history.push(`/restaurants/${id}/menus/${menuId}`);
};

export const editItem =
  (id, menuId, itemId, formValues) => async (dispatch) => {
    const response = await restaurantsApi.put(
      `/menus/${menuId}/menu-items/${itemId}`,
      formValues
    );

    dispatch({ type: types.EDIT_ITEM, payload: response.data });
    history.push(`/restaurants/${id}/menus/${menuId}`);
  };

export const deleteItem = (id, menuId, itemId) => async (dispatch) => {
  await restaurantsApi.delete(`/menus/${menuId}/menu-items/${itemId}`);

  dispatch({ type: types.DELETE_ITEM, payload: itemId });
  history.push(`/restaurants/${id}/menus/${menuId}`);
};
