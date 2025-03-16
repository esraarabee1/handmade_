import { GET_All_ITEMS, GET_ERROR } from "../../type";

const initialState = {
  allitems: [],
  loading: true,
};

const viewitemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_All_ITEMS:
      return { ...state, allitems: action.payload, loading: false };
    case GET_ERROR:
      return { ...state, allitems: [], loading: false };
    default:
      return state;
  }
};

export default viewitemsReducer;
