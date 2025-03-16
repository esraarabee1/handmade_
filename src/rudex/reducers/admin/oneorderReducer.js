import { GET_ONE_ORDER, GET_ERROR } from "../../type";

const initialState = {
  oneorders: [],
  loading: true,
};

const oneorderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_ORDER:
      return { ...state, oneorders: action.payload, loading: false };
    case GET_ERROR:
      return { ...state, oneorders: [], loading: false };
    default:
      return state;
  }
};

export default oneorderReducer;
