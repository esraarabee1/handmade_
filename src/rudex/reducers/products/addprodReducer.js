import { ADD_PRODUCT, GET_ERROR } from "../../type";

const initialState = {
  addprod: null, // اجعلها null بدلاً من []
  loading: false,
  error: null,
};

const addprodReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        addprod: action.payload,
        loading: false,
        error: null,
      };

    case GET_ERROR:
      return {
        ...state,
        addprod: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addprodReducer;
