import { GET_ALL_USERS, GET_ERROR } from "../type";

const initialState = {
  users: null, // تأكد أن لديك بيانات افتراضية
  loading: false,
};

const allUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.payload, loading: false };
    case GET_ERROR:
      return { ...state, users: [], loading: false };
    default:
      return state;
  }
};

export default allUsersReducer;
