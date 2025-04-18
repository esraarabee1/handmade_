import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder, getOneOrder } from "../rudex/actions/ordersAction";
const CreateOrderHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;

  const totalAmount = JSON.parse(localStorage.getItem("totalAmount"));

  const shortCart = JSON.parse(localStorage.getItem("shortCart"));

  const [isPress, setIsPress] = useState(false);

  const onSubmit = async () => {
    setIsPress(true);
    await dispatch(
      createOrder({
        companyDeliveryId: 1,
        userId: id || 0,
        currencyName: 0,
        paymentMethod: 0,
        orderAddress: "Aswan,Egypt",
        subTotal: totalAmount,
        orderStatus: 0,
        productsOrder: shortCart,
        createdAt: "2025-03-16T11:56:27.049Z",
        updatedAt: "2025-03-16T11:56:27.049Z",
      })
    );
    setIsPress(false);
  };

  const res = useSelector((state) => state.createorderReducer.createorder);
  const loading = useSelector((state) => state.createorderReducer.loading);

  useEffect(() => {
    if (!loading && res) {
      console.log("✅  res create success", res);
    }
  }, [res, loading]);

  return [onSubmit, res];
};

export default CreateOrderHook;
