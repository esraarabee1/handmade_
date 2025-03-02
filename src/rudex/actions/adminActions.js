import { GET_All_ITEMS, GET_ERROR } from "../type";
import { getData, useGetDataToken } from "../../Hooks/useGetData";
import {
  useInsertData,
  useInsertDataWithImage,
} from "../../Hooks/useInsertData";

export const getAllitems = () => async (dispatch) => {
  try {
    const response = await useGetDataToken("/api/Products");
    console.log("itemsdata", response.data);
    dispatch({
      type: GET_All_ITEMS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
