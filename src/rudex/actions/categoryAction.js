import { GET_ALL_CATEGORY, GET_ERROR } from "../type";
import { getData } from "../../Hooks/useGetData";

//get all category
export const getAllCategory = () => async (dispatch) => {
  try {
    const response = await getData("/api/Categories");
    console.log("xx", response.data);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
