import { CREATE_ORDER } from "../type";

const initialState = {
  createorder: null,
  loading: false,
  error: null,
};

const createorderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        createorder: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default createorderReducer;
