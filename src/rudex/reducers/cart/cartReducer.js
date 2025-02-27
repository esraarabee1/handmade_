import { ADD_TO_CART, GET_ERROR } from "../../type";

const inital = {
  addToCart: null,
  loading: false,
  error: null,
};
const cartReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        addToCart: action.payload,
        loading: false,
        error: null,
      };
    case GET_ERROR:
      console.log("❌ Error in login:", action.payload);
      return {
        ...state,
        addToCart: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default cartReducer;
