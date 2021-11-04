import { combineReducers } from "redux";
import restaurantReducer from "./restaurantReducer";
import menuReducer from "./menuReducer";
import itemReducer from "./itemReducer";
import selectReducer from "./selectReducer";

const reducers = combineReducers({
  restaurants: restaurantReducer,
  menus: menuReducer,
  items: itemReducer,
  selected: selectReducer,
});

export default reducers;
