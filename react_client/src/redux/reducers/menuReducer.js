import _ from "lodash";
import types from "./../types";

const menuReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_MENUS:
      return { ..._.mapKeys(action.payload, "id") };
    case types.CREATE_MENU:
    case types.FETCH_MENU:
    case types.EDIT_MENU:
      return { ...state, [action.payload.id]: action.payload };
    case types.DELETE_MENU:
      return { ...state, [action.payload.id]: null };
    default:
      return state;
  }
};

export default menuReducer;
