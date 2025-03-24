import { ADD_TO_VENDORS, GET_All_VENDORS, GET_All_ITEMS } from "../type";

const initialState = {
  addvendor: null,
  allvendors: [],
  allitems: [],
  loading: false,
  error: null,
};

const addvendorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_VENDORS:
      return {
        ...state,
        addvendor: action.payload,
        loading: false,
        error: null,
      };

    case GET_All_VENDORS:
      return { ...state, allvendors: action.payload, loading: false };
    case GET_All_ITEMS:
      return { ...state, allitems: action.payload, loading: false };
    default:
      return state;
  }
};

export default addvendorReducer;
