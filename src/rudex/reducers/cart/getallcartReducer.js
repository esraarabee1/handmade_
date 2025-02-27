import { GET_ALL_USER_CART, GET_ERROR } from "../../type";

const inital = {
  userCart: null,
  loading: false,
  error: null,
};
const getcartReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_USER_CART:
      return {
        ...state,
        userCart: action.payload,
        loading: false,
        error: null,
      };
    case GET_ERROR:
      console.log("❌ Error in login:", action.payload);
      return {
        ...state,
        userCart: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default getcartReducer;
