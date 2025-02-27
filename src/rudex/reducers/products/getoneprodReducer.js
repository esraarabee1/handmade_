import { GET_ON_PRODUCT, GET_ERROR } from "../../type";

const initialState = {
  product: [], // تأكد أن لديك بيانات افتراضية
  loading: true,
};

const productdetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ON_PRODUCT:
      return { ...state, product: action.payload, loading: false };
    case GET_ERROR:
      return { ...state, product: [], loading: false };
    default:
      return state;
  }
};

export default productdetailsReducer;
