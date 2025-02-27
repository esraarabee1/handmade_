import { CREATE_NEW_USER, GET_ERROR, LOGIN_USER } from "../type";
import { useInsertDataWithImage } from "../../Hooks/useInsertData";
import { useInsertData } from "../../Hooks/useInsertData";
//get all category
export const createNewUser = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(
      `/api/RegisterUser/Register`,
      formData
    );
    console.log("newuser", response.data);
    dispatch({
      type: CREATE_NEW_USER,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

//get all category
export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/RegisterUser/LogIn`, data);
    console.log("🔹 API Response:", response);

    dispatch({
      type: LOGIN_USER,
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
