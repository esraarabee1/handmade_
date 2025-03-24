import { ADD_TO_WISH, GET_ALL_FAV, REMOVE_FROM_WISHLIST } from "../type";

const initialState = {
  addtowish: null,
  favprods: [],
  removewish: null,
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

    case GET_ALL_FAV:
      console.log("Reducer Updated:", action.payload);
      return {
        ...state,
        favprods: action.payload,
        loading: false,
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        removewish: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default addtowishReducer;
