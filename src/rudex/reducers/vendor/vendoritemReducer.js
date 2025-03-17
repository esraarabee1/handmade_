import { GET_All_INVENTORY, GET_ERROR } from "../../type";

const initialState = {
  allitemsvendor: [],
  loading: true,
};

const vendoritemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_All_INVENTORY:
      return { ...state, allitemsvendor: action.payload, loading: false };
    case GET_ERROR:
      return { ...state, allitemsvendor: [], loading: false };
    default:
      return state;
  }
};

export default vendoritemReducer;
