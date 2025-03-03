import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import authloginReducer from "./authloginReducer";
import allUsersReducer from "./userReducer";
import addtowishReducer from "./wishlis/addwishReducer";
import removewishReducer from "./../reducers/wishlis/removewishReducer";
import getfavReducer from "./../reducers/wishlis/getfavReducer";
import cartReducer from "./../reducers/cart/cartReducer";
import getcartReducer from "./../reducers/cart/getallcartReducer";
import productdetailsReducer from "./../reducers/products/getoneprodReducer";
import addprodReducer from "./../reducers/products/addprodReducer";
import viewitemsReducer from "./../reducers/admin/viewitemsReducer";
import viewvendorsdataReducer from "./../reducers/admin/viewvendorsReducer";
import addvendorReducer from "./../reducers/admin/addvendorReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  allCategory: categoryReducer,
  allBrands: brandReducer,
  allProducts: productReducer,
  authReducer: authReducer,
  authloginReducer: authloginReducer,
  allUsersReducer: allUsersReducer,
  addtowishReducer: addtowishReducer,
  removewishReducer: removewishReducer,
  getfavReducer: getfavReducer,
  cartReducer: cartReducer,
  getcartReducer: getcartReducer,
  productdetailsReducer: productdetailsReducer,
  addprodReducer: addprodReducer,
  viewitemsReducer: viewitemsReducer,
  viewvendorsdataReducer: viewvendorsdataReducer,
  addvendorReducer: addvendorReducer,
});

export default rootReducer;
