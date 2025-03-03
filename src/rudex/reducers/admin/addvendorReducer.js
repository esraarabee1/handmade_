import { ADD_TO_VENDORS, GET_ERROR } from "../../type";

const initialState = {
  addvendor: null, // اجعلها null بدلاً من []
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

    case GET_ERROR:
      return {
        ...state,
        addvendor: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addvendorReducer;
