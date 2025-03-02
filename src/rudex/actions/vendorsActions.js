import { GET_All_VENDORS, GET_ERROR } from "../type";
import { getData, useGetDataToken } from "../../Hooks/useGetData";
import {
  useInsertData,
  useInsertDataWithImage,
} from "../../Hooks/useInsertData";

export const getAllvendors = () => async (dispatch) => {
  try {
    const response = await useGetDataToken("/api/Vendors");
    console.log("vendorsdata", response.data);
    dispatch({
      type: GET_All_VENDORS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
