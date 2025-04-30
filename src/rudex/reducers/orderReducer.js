import { UPDATE_ONE_ORDER } from "../type";

const initialState = {
  updateorder: [],
  loading: true,
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ONE_ORDER:
      return {
        ...state,
        updateorder: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default orderReducer;
