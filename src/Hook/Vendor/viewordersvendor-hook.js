import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllordersvendor } from "../../rudex/actions/vendorsActions";

const GetOrdersVendorHook = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;

  console.log(userId);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getAllordersvendor(9));
      setLoading(false);
    };
    get();
  }, []);
  const allorsersdatavendor = useSelector(
    (state) => state.vendorordersReducer?.allordersvendor
  );
  useEffect(() => {
    if (loading === false) {
      if (allorsersdatavendor) {
        console.log("get orders data vendor", allorsersdatavendor.data.orders);
        setOrders(allorsersdatavendor.data.orders);
        setProducts(allorsersdatavendor.data.products);
      }
    }
  }, [loading]);

  return [orders, products];
};

export default GetOrdersVendorHook;
