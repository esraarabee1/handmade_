import { GET_ALL_USERS, GET_ONE_USERS, GET_ERROR } from "../type";
import { getData } from "../../Hooks/useGetData";

//get all category
export const getAllUsers = () => async (dispatch) => {
  try {
    const response = await getData("/api/Users");
    console.log("usersall", response.data);
    dispatch({
      type: GET_ALL_USERS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

//get one user
export const getOneUser = (id) => async (dispatch) => {
  try {
    const response = await getData(`/api/Users/GetUserById?id=${id}`);
    console.log("userdata", response.data);
    dispatch({
      type: GET_ONE_USERS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
