import {
  ADD_TO_WISH,
  GET_ERROR,
  REMOVE_FROM_WISHLIST,
  GET_ALL_FAV,
} from "../../type";
import { useInsertData } from "../../../Hooks/useInsertData";
import useDeleteData from "../../../Hooks/useDeleteData";
import { useGetDataToken } from "../../../Hooks/useGetData";
export const addtoWishlist = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/WishLists`, data);
    console.log("addtowishlist", response.data);
    dispatch({
      type: ADD_TO_WISH,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const removeFromWishlist = (userID, prodID) => async (dispatch) => {
  try {
    if (!userID || !prodID) {
      console.warn("❌ userID أو prodID غير موجود!");
      return;
    }

    // ✅ تعديل الرابط ليكون باستخدام `query params`
    const response = await useDeleteData(
      `/api/WishLists?UserId=${userID}&ProductId=${prodID}`
    );

    if (response?.error) {
      throw new Error(response.error);
    }

    console.log("✅ Removed from wishlist:", response);

    dispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: response,
    });
  } catch (e) {
    console.error("❌ Failed to remove from wishlist:", e);

    dispatch({
      type: GET_ERROR,
      payload: e.message || "Error occurred while removing from wishlist",
    });
  }
};

export const getAllFav = (userID) => async (dispatch) => {
  try {
    console.log("👤 Fetching wishlist for user ID:", userID);

    if (!userID) {
      console.error("⚠️ User ID is undefined or null!");
      return;
    }

    const response = await useGetDataToken(`/api/WishLists`, { id: userID }); // ✅ تم تصحيح إرسال الـ userID

    console.log("✅ API Response:", response);

    if (!response) {
      console.warn("⚠️ No favorite products found.");
      return;
    }

    dispatch({
      type: GET_ALL_FAV,
      payload: response,
    });
  } catch (e) {
    console.error("❌ Error in getAllFav:", e);
    dispatch({
      type: GET_ERROR,
      payload: "Error: " + e.message,
    });
  }
};
