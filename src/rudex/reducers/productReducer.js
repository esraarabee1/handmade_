import { GET_ALL_PRODUCT, GET_ERROR } from "../type";

const initialState = {
  products: [], // تأكد أن لديك بيانات افتراضية
  loading: true,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return { ...state, products: action.payload, loading: false };
    case GET_ERROR:
      return { ...state, products: [], loading: false };
    default:
      return state;
  }
};

export default productReducer;
