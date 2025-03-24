import { combineReducers } from "redux";

import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";

import authReducer from "./authReducer";
import authloginReducer from "./authloginReducer";
import allUsersReducer from "./userReducer";
import addtowishReducer from "./addwishReducer";
import cartReducer from "./../reducers/cart/cartReducer";
import getcartReducer from "./../reducers/cart/getallcartReducer";
import addprodReducer from "./../reducers/addprodReducer";
import addvendorReducer from "./../reducers/addvendorReducer";
import vendorordersReducer from "./../reducers/vendorordersReducer";

const rootReducer = combineReducers({
  allCategory: categoryReducer,
  allBrands: brandReducer,

  authReducer: authReducer,
  authloginReducer: authloginReducer,
  allUsersReducer: allUsersReducer,
  addtowishReducer: addtowishReducer,

  cartReducer: cartReducer,
  getcartReducer: getcartReducer,

  addprodReducer: addprodReducer,

  addvendorReducer: addvendorReducer,

  vendorordersReducer: vendorordersReducer,
});

export default rootReducer;
