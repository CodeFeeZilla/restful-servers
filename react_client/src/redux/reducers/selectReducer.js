import types from "./../types";

const selectReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SELECT_RESTAURANT:
      return action.payload;
    case types.SELECT_MENU:
      return action.payload;
    default:
      return state;
  }
};

export default selectReducer;
