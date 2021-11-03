import { combineReducers } from "redux";
import restaurantReducer from "./restaurantReducer";

const reducers = combineReducers({
  restaurants: restaurantReducer,
});

export default reducers;
