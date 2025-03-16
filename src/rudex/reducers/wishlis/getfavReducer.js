import { GET_ALL_FAV, GET_ERROR } from "../../type";

const initialState = {
  favprods: [],
  loading: true,
  error: null,
};

export const getfavReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_FAV:
      console.log("Reducer Updated:", action.payload);
      return {
        ...state,
        favprods: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default getfavReducer;
