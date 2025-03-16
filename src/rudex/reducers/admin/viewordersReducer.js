import { GET_All_ORDERS, GET_ERROR } from "../../type";

const initialState = {
  allorders: [], // تأكد أن لديك بيانات افتراضية
  loading: true,
};

const viewordersdataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_All_ORDERS:
      return { ...state, allorders: action.payload, loading: false };
    case GET_ERROR:
      return { ...state, allorders: [], loading: false };
    default:
      return state;
  }
};

export default viewordersdataReducer;
