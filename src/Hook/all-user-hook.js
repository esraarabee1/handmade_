import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../rudex/actions/userAction";

const useWishlistHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Fetching all users...");
    dispatch(getAllUsers());
  }, [dispatch]);

  const state = useSelector((state) => state);
  console.log("Redux State:", state);
  const users = useSelector((state) => state.allUsersReducer?.users);
  const loading = useSelector((state) => state.allUsersReducer?.loading);

  console.log("users Data:", users);

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

  const userData = JSON.parse(localStorage.getItem("user"));
  const decodedToken = parseJwt(userData?.token);

  console.log("User ID:", decodedToken?.sub);

  return [users];
};

export default useWishlistHook;
