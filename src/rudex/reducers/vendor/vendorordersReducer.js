import { GET_All_ORDERS_VENDOR, GET_ERROR } from "../../type";

const initialState = {
  allordersvendor: [],
  loading: true,
};

const vendorordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_All_ORDERS_VENDOR:
      return { ...state, allordersvendor: action.payload, loading: false };
    case GET_ERROR:
      return { ...state, allordersvendor: [], loading: false };
    default:
      return state;
  }
};

export default vendorordersReducer;
