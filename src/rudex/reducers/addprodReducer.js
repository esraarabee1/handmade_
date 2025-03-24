import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  EDIT_PRODUCT,
  GET_ON_PRODUCT,
  GET_ALL_PRODUCT,
} from "../type";

const initialState = {
  addprod: null,
  removedprod: null,
  editprod: null,
  product: [],
  products: [],
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

    case REMOVE_PRODUCT:
      return {
        ...state,
        removedprod: action.payload,
        loading: false,
        error: null,
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        editprod: action.payload,
        loading: false,
        error: null,
      };
    case GET_ON_PRODUCT:
      return { ...state, product: action.payload, loading: false };
    case GET_ALL_PRODUCT:
      return { ...state, products: action.payload, loading: false };
    default:
      return state;
  }
};

export default addprodReducer;
