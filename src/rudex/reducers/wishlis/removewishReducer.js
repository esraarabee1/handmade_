import { REMOVE_FROM_WISHLIST, GET_ERROR } from "../../type";

const initialState = {
  removewish: null, // اجعلها null بدلاً من []
  loading: false,
  error: null,
};

const removewishReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        removewish: action.payload,
        loading: false,
        error: null,
      };

    case GET_ERROR:
      return {
        ...state,
        removewish: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default removewishReducer;
