import { REMOVE_PRODUCT, GET_ERROR } from "../../type";

const initialState = {
  removedprod: null, // اجعلها null بدلاً من []
  loading: false,
  error: null,
};

const deleteprodReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_PRODUCT:
      return {
        ...state,
        removedprod: action.payload,
        loading: false,
        error: null,
      };

    case GET_ERROR:
      return {
        ...state,
        removedprod: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default deleteprodReducer;
