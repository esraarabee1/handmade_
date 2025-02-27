import { GET_ERROR, LOGIN_USER } from "../type";

const initialState = {
  loginUser: null,
  loading: false,
  error: null,
};

const authloginReducer = (state = initialState, action) => {
  console.log("🔄 Reducer Action Received:", action); // 👈 تحقق من وصول البيانات

  switch (action.type) {
    case LOGIN_USER:
      console.log("✅ User logged in successfully:", action.payload);
      return {
        ...state,
        loginUser: action.payload,
        loading: false,
        error: null,
      };
    case GET_ERROR:
      console.log("❌ Error in login:", action.payload);
      return {
        ...state,
        loginUser: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authloginReducer;
