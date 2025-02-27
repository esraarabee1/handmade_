import { GET_ALL_BRAND, GET_ERROR } from "../type";

const initialState = {
  brands: [], // تأكد أن لديك بيانات افتراضية
  loading: true,
};

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BRAND:
      return { ...state, brands: action.payload, loading: false };
    case GET_ERROR:
      return { ...state, brands: [], loading: false };
    default:
      return state;
  }
};

export default brandReducer;
