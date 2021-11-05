import restaurantsApi from "../../api/restaurantsApi";
import history from "../../history";
import types from "../types";

export const fetchMenus = (id) => async (disptach) => {
  const response = await restaurantsApi.get(`/restaurants/${id}/menus`);

  disptach({
    type: types.SELECT_RESTAURANT,
    payload: { id: id, type: "menus" },
  });
  disptach({ type: types.FETCH_MENUS, payload: response.data });
};

export const fetchMenu = (id) => async (dispatch) => {
  const response = await restaurantsApi.get(`/menus/${id}`);

  dispatch({ type: types.FETCH_MENU, payload: response.data });
};

export const createMenu = (id, formValues) => async (dispatch) => {
  const response = await restaurantsApi.post(
    `/restaurants/${id}/menus`,
    formValues
  );

  dispatch({ type: types.CREATE_MENU, payload: response.data });
  history.push(`/restaurants/${id}/menus`);
};

export const editMenu = (id, menuId, formValues) => async (dispatch) => {
  const response = await restaurantsApi.put(`/menus/${menuId}`, formValues);

  dispatch({ type: types.EDIT_MENU, payload: response.data });
  history.push(`/restaurants/${id}/menus`);
};

export const deleteMenu = (id) => async (dispatch) => {
  await restaurantsApi.delete(`/menus/${id}`);

  dispatch({ type: types.DELETE_MENU, payload: id });
};
