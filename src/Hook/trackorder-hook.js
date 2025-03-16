import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOneOrder } from "../rudex/actions/ordersAction";
const useTrackorderHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [trackId, setTrackId] = useState("");
  const [isPress, setIsPress] = useState(false);

  const onChangeTrackId = (e) => {
    setTrackId(e.target.value);
  };

  const onSubmit = async () => {
    setIsPress(true);
    await dispatch(getOneOrder(trackId));
    setIsPress(false);
  };

  const res = useSelector((state) => state.oneorderReducer.oneorders);
  const loading = useSelector((state) => state.oneorderReducer.loading);

  useEffect(() => {
    if (!loading && res) {
      console.log("✅ track id res", res);
    }
  }, [res, loading]);

  return [trackId, onChangeTrackId, onSubmit, res];
};

export default useTrackorderHook;
