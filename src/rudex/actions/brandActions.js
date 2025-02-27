import { GET_ALL_BRAND, GET_ERROR } from "../type";
import { getData } from "../../Hooks/useGetData";

//get all category
export const getAllBrands = () => async (dispatch) => {
  try {
    const response = await getData("/api/Brands");
    console.log("brands", response.data);
    dispatch({
      type: GET_ALL_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
