import { GET_All_ORDERS_VENDOR, GET_All_ORDERS, GET_ONE_ORDER } from "../type";

const initialState = {
  allordersvendor: [],
  oneorders: [],
  allorders: [],
  loading: true,
};

const vendorordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_All_ORDERS_VENDOR:
      return { ...state, allordersvendor: action.payload, loading: false };
    case GET_ONE_ORDER:
      return { ...state, oneorders: action.payload, loading: false };
    case GET_All_ORDERS:
      return { ...state, allorders: action.payload, loading: false };
    default:
      return state;
  }
};

export default vendorordersReducer;
