import { combineReducers } from "redux";
import shoppingCartReducer from "./shoppingCart/shoppingCartReducer";

const rootReducer = combineReducers({
  cart: shoppingCartReducer,
});

export default rootReducer;
