import _ from "lodash";
import types from "./../types";

const itemReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_ITEMS:
      return { ..._.mapKeys(action.payload, "id") };
    case types.CREATE_ITEM:
    case types.FETCH_ITEM:
    case types.EDIT_ITEM:
      return { ...state, [action.payload.id]: action.payload };
    case types.DELETE_ITEM:
      return { ...state, [action.payload]: null };
    default:
      return state;
  }
};

export default itemReducer;
