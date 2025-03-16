import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllorders } from "../../rudex/actions/ordersAction";

const GetOrdersDataHook = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getAllorders());
      setLoading(false);
    };
    get();
  }, []);
  const allorsersdata = useSelector(
    (state) => state.viewordersdataReducer?.allorders
  );
  useEffect(() => {
    if (loading === false) {
      if (allorsersdata) {
        console.log("get orders data", allorsersdata.data);
        setOrders(allorsersdata.data);
      }
    }
  }, [loading]);

  return [orders];
};

export default GetOrdersDataHook;
