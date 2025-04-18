import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOneUser } from "../rudex/actions/userAction";

const UserdataHook = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;

  useEffect(() => {
    console.log("Fetching products...");
    dispatch(getOneUser(id));
  }, [dispatch]);

  const state = useSelector((state) => state);
  console.log("Redux State:", state);
  const userdata = useSelector((state) => state.userdataReducer?.userdata);
  const loading = useSelector((state) => state.userdataReducer?.loading);

  console.log("user Data:", userdata);

  return [userdata, loading];
};

export default UserdataHook;
