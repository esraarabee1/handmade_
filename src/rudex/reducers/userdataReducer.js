import { GET_ONE_USERS, GET_ERROR } from "../type";

const initialState = {
  userdata: null,
  loading: false,
};

const userdataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_USERS:
      return { ...state, userdata: action.payload, loading: false };
    case GET_ERROR:
      return { ...state, userdata: [], loading: false };
    default:
      return state;
  }
};

export default userdataReducer;
