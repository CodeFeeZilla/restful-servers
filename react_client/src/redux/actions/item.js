import restaurantsApi from "../../api/restaurantsApi";
import history from "../../history";
import types from "../types";

// update to item

export const fetchItems = (id) => async (disptach) => {
  const response = await restaurantsApi.get(`/menus/${id}/menu-items`);

  disptach({
    type: types.SELECT_MENU,
    payload: { id: id, type: "items" },
  });
  disptach({ type: types.FETCH_ITEMS, payload: response.data });
};

export const fetchItem = (id) => async (dispatch) => {
  const response = await restaurantsApi.get(`/menus/${id}`);

  dispatch({ type: types.FETCH_MENU, payload: response.data });
};

export const createItem = (id, formValues) => async (dispatch) => {
  const response = await restaurantsApi.post(
    `/menus/${id}/menu-items`,
    formValues
  );

  dispatch({ type: types.CREATE_ITEM, payload: response.data });
  //   history.push(`/restaurants/${id}/menus`);
};

export const editItem = (id, itemId, formValues) => async (dispatch) => {
  const response = await restaurantsApi.put(
    `/menus/${id}/menu-items/${itemId}`,
    formValues
  );

  dispatch({ type: types.EDIT_MENU, payload: response.data });
  //   history.push(`/restaurants/${id}/menus`);
};

export const deleteItem = (id, itemId) => async (dispatch) => {
  await restaurantsApi.delete(`/menus/${id}/menu-items/${itemId}`);

  dispatch({ type: types.DELETE_MENU, payload: id });
  //   history.push(`/restaurants/${id}/menus`);
};
