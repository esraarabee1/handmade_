import { CREATE_NEW_USER, GET_ERROR } from "../type";

const initialState = {
  createUser: null, // اجعلها null بدلاً من []
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      return {
        ...state,
        createUser: action.payload,
        loading: false,
        error: null,
      };

    case GET_ERROR:
      return {
        ...state,
        createUser: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
