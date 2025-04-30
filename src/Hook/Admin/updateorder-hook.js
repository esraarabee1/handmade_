import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder, getOneOrder } from "../rudex/actions/ordersAction";
import { UpdateOrder } from "../../rudex/actions/ordersAction";
const UpdateOrderHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;

  const totalAmount = JSON.parse(localStorage.getItem("totalAmount"));

  const shortCart = JSON.parse(localStorage.getItem("shortCart"));

  const [isPress, setIsPress] = useState(false);

  const handleChange = async (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, orderStatus: newStatus } : order
    );
    setOrders(updatedOrders);

    const handleStatusChange = async () => {
      setIsPress(true);
      await dispatch(
        UpdateOrder(orderid, {
          companyDeliveryId: 1,
          userId: id || 0,
          currencyName: 0,
          paymentMethod: 0,
          orderAddress: "Aswan,Egypt",
          subTotal: totalAmount,
          orderStatus: newStatus, //change
          productsOrder: shortCart,
          createdAt: "2025-03-16T11:56:27.049Z",
          updatedAt: "2025-03-16T11:56:27.049Z",
        })
      );
      setIsPress(false);
    };

    const res = useSelector((state) => state.orderReducer.updateorder);
    const loading = useSelector((state) => state.orderReducer.loading);

    useEffect(() => {
      if (!loading && res) {
        console.log(" res update success", res);
      }
    }, [res, loading]);

    return [handleStatusChange, res];
  };
};
export default UpdateOrderHook;
