import _ from "lodash";
import types from "./../types";

const restaurantReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_RESTAURANTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case types.CREATE_RESTAURANT:
    case types.FETCH_RESTAURANT:
    case types.EDIT_RESTAURANT:
      return { ...state, [action.payload.id]: action.payload };
    case types.DELETE_RESTAURANT:
      return { ...state, [action.payload]: null };
    default:
      return state;
  }
};

export default restaurantReducer;
