import {
  GET_All_INVENTORY,
  GET_All_ORDERS_VENDOR,
  GET_All_VENDORS,
  GET_ERROR,
} from "../type";
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

export const getAllitemsvendor = () => async (dispatch) => {
  try {
    const response = await useGetDataToken("/api/Products");
    console.log("itemsvendordata", response.data);
    dispatch({
      type: GET_All_INVENTORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const getAllordersvendor = (id) => async (dispatch) => {
  try {
    const response = await getData(`/api/Vendors/GetVendor?id=${id}`);
    console.log("ordersdatavendor", response.data);
    dispatch({
      type: GET_All_ORDERS_VENDOR,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
