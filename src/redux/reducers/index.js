import { combineReducers } from "redux";
import { productReducer, seletedProductReducer } from "./productReducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  product: seletedProductReducer,
});
