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
  console.log("Redux State:", state); // ✅ تحقق من تحديث Redux

  const users = useSelector((state) => state.allUsersReducer?.users);
  const loading = useSelector((state) => state.allUsersReducer?.loading);

  console.log("users Data:", users); // ✅ تحقق من ظهور البيانات هنا

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1])); // ✅ فك تشفير الـ JWT
    } catch (e) {
      return null;
    }
  };

  const userData = JSON.parse(localStorage.getItem("user"));
  const decodedToken = parseJwt(userData?.token);

  console.log("User ID:", decodedToken?.sub); // ✅ عرض الـ id (عادةً يكون `sub` في الـ JWT)

  return [users];
};

export default useWishlistHook;
