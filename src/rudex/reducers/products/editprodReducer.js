import { EDIT_PRODUCT, GET_ERROR } from "../../type";

const initialState = {
  editprod: null,
  loading: false,
  error: null,
};

const editprodReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PRODUCT:
      return {
        ...state,
        editprod: action.payload,
        loading: false,
        error: null,
      };

    case GET_ERROR:
      return {
        ...state,
        editprod: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default editprodReducer;
