import { GET_ALL_PRODUCT, GET_ON_PRODUCT, GET_ERROR } from "../type";
import { getData } from "../../Hooks/useGetData";

//get all category
export const getAllProducts = () => async (dispatch) => {
  try {
    const response = await getData("/api/Products");
    console.log("PRODUCTS", response.data);
    dispatch({
      type: GET_ALL_PRODUCT,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const getAllProductsSearch = (queryString) => async (dispatch) => {
  try {
    const response = await getData(`/api/Products?${queryString}`);
    console.log("PRODUCTS feom search", response.data);
    dispatch({
      type: GET_ALL_PRODUCT,
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
export const getOneProduct = (id) => async (dispatch) => {
  try {
    const response = await getData(`/api/Products/GetById?id=${id}`);
    console.log("PRODUCT", response.data);
    dispatch({
      type: GET_ON_PRODUCT,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: `error: ${e.message || e}`,
    });
  }
};
