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
import userdataReducer from "./../reducers/userdataReducer";
import createorderReducer from "./../reducers/createorserReducer";
import orderReducer from "./../reducers/orderReducer";

const rootReducer = combineReducers({
  allCategory: categoryReducer,
  allBrands: brandReducer,
  userdataReducer: userdataReducer,
  authReducer: authReducer,
  authloginReducer: authloginReducer,
  allUsersReducer: allUsersReducer,
  addtowishReducer: addtowishReducer,
  createorderReducer: createorderReducer,
  cartReducer: cartReducer,
  getcartReducer: getcartReducer,
  orderReducer: orderReducer,
  addprodReducer: addprodReducer,

  addvendorReducer: addvendorReducer,

  vendorordersReducer: vendorordersReducer,
});

export default rootReducer;
