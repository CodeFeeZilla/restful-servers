import restaurantsApi from "../../api/restaurantsApi";
import history from "../../history";
import types from "../types";

export const fetchRestaurants = () => async (disptach) => {
  const response = await restaurantsApi.get("/restaurants");

  disptach({ type: types.FETCH_RESTAURANTS, payload: response.data });
  disptach({ type: types.SELECT_RESTAURANT, payload: null });
};

export const fetchRestaurant = (id) => async (dispatch) => {
  const response = await restaurantsApi.get(`/restaurants/${id}`);

  dispatch({ type: types.FETCH_RESTAURANT, payload: response.data });
};

export const createRestaurant = (formValues) => async (dispatch) => {
  const response = await restaurantsApi.post("/restaurants", formValues);

  dispatch({ type: types.CREATE_RESTAURANT, payload: response.data });
  history.push("/");
};

export const editRestaurant = (id, formValues) => async (dispatch) => {
  const response = await restaurantsApi.put(`/restaurants/${id}`, formValues);

  dispatch({ type: types.EDIT_RESTAURANT, payload: response.data });
  history.push("/");
};

export const deleteRestaurant = (id) => async (dispatch) => {
  await restaurantsApi.delete(`/restaurants/${id}`);

  dispatch({ type: types.DELETE_RESTAURANT, payload: id });
  history.push("/");
};
