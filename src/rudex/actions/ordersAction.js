import {
  CREATE_ORDER,
  GET_All_ORDERS,
  GET_ERROR,
  GET_ONE_ORDER,
  UPDATE_ONE_ORDER,
} from "../type";
import { getData, useGetDataToken } from "../../Hooks/useGetData";
import {
  useInsertData,
  useInsertDataWithImage,
} from "../../Hooks/useInsertData";
import { inUpdateData } from "../../Hooks/useUpdateData";

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

export const getOneOrder = (id) => async (dispatch) => {
  try {
    const response = await getData(`/api/Orders/GetOrder?id=${id}`);
    console.log("order ", response.data);
    dispatch({
      type: GET_ONE_ORDER,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: `error: ${e.message || e}`,
    });
  }
};

export const createOrder = (data) => async (dispatch) => {
  try {
    const response = await useInsertData("/api/Orders", data);
    console.log("order from order action", response);

    dispatch({
      type: CREATE_ORDER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error  " + e,
    });
  }
};

export const UpdateOrder = (id, data) => async (dispatch) => {
  try {
    const response = await inUpdateData(`/api/Orders?id=${id}`, data);
    console.log("order from update order action", response);

    dispatch({
      type: UPDATE_ONE_ORDER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
