import { GET_All_ORDERS, GET_ERROR } from "../type";
import { getData, useGetDataToken } from "../../Hooks/useGetData";
import {
  useInsertData,
  useInsertDataWithImage,
} from "../../Hooks/useInsertData";

export const getAllorders = () => async (dispatch) => {
  try {
    const response = await getData("/api/Orders");
    console.log("ordersdata", response.data);
    dispatch({
      type: GET_All_ORDERS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
