import { ADD_TO_WISH, GET_ERROR } from "../../type";

const initialState = {
  addtowish: null,
  loading: false,
  error: null,
};

const addtowishReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISH:
      return {
        ...state,
        addtowish: action.payload,
        loading: false,
        error: null,
      };

    case GET_ERROR:
      return {
        ...state,
        addtowish: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addtowishReducer;
