import { ADD_TO_CART, GET_ERROR, GET_ALL_USER_CART } from "../type";

import { useInsertData } from "../../Hooks/useInsertData";
import { useGetDataToken } from "../../Hooks/useGetData";

//get all category
export const addToCart = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/Home/AddToCart`, data);
    console.log("🔹 API Response from cart:", response);

    dispatch({
      type: ADD_TO_CART,
      payload: response,
    });
  } catch (e) {
    console.error("❌ Login Error:", e.message || e);

    dispatch({
      type: GET_ERROR,
      payload: e.message || "Unexpected error occurred",
    });
  }
};

export const getUserCart = () => async (dispatch) => {
  try {
    const response = await useGetDataToken("/api/Cart/GetCart");

    console.log("✅ API Response from user cart:", response);

    if (!response) {
      console.warn("⚠️ No Response from user cart.");
      return;
    }

    dispatch({
      type: GET_ALL_USER_CART,
      payload: response,
    });
  } catch (e) {
    console.error("❌ Error in getcart", e);
    dispatch({
      type: GET_ERROR,
      payload: "Error: " + e.message,
    });
  }
};
