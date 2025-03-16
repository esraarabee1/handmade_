import { GET_All_VENDORS, GET_ERROR } from "../../type";

const initialState = {
  allvendors: [],
  loading: true,
};

const viewvendorsdataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_All_VENDORS:
      return { ...state, allvendors: action.payload, loading: false };
    case GET_ERROR:
      return { ...state, allvendors: [], loading: false };
    default:
      return state;
  }
};

export default viewvendorsdataReducer;
