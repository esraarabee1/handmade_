import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UpdateOrder } from "../../rudex/actions/ordersAction";
import GetOrdersDataHook from "../../Hook/Admin/vieworders-hook";

const OrdersTable = () => {
  const [orders, setOrders] = GetOrdersDataHook();
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;

  const totalAmount = JSON.parse(localStorage.getItem("totalAmount"));
  const shortCart = JSON.parse(localStorage.getItem("shortCart"));

  const [isPress, setIsPress] = useState(false);

  const handleStatusChange = async (orderId, newStatus) => {
    setIsPress(true);
    await dispatch(
      UpdateOrder(orderId, {
        companyDeliveryId: 1,
        userId: id || 0,
        currencyName: 0,
        paymentMethod: 0,
        orderAddress: "Aswan,Egypt",
        subTotal: totalAmount,
        orderStatus: newStatus,
        productsOrder: shortCart,
        createdAt: "2025-03-16T11:56:27.049Z",
        updatedAt: "2025-03-16T11:56:27.049Z",
      })
    );
    setIsPress(false);

    // update state
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, orderStatus: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  const res = useSelector((state) => state.orderReducer.updateorder);
  const loading = useSelector((state) => state.orderReducer.loading);

  useEffect(() => {
    if (!loading && res) {
      console.log(" res update success", res);
    }
  }, [res, loading]);

  return (
    <div className="flex-1 overflow-x-auto bg-gray-100 min-h-screen">
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-left">Customer Name</th>
            <th className="p-3 text-left">Tracking ID</th>
            <th className="p-3 text-left">Order Total</th>
            <th className="p-3 text-left">Action</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id} className="border-b hover:bg-gray-100">
              <td className="p-3">
                {order.userName ? order.userName : "UnLogedUser"}
              </td>
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.amount}</td>
              <td className="p-3 relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="inline-flex items-center rounded-md bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none"
                >
                  {order.orderStatus || "Select Status"}
                  <svg
                    className="ml-2 h-4 w-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.23 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {openDropdownIndex === index && (
                  <div className="absolute mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1 text-sm text-gray-700">
                      <div
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                          handleStatusChange(order.id, "Processing")
                        }
                      >
                        Processing
                      </div>
                      <div
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleStatusChange(order.id, "Pending")}
                      >
                        Pending
                      </div>
                      <div
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleStatusChange(order.id, "Shipped")}
                      >
                        Shipped
                      </div>
                      <div
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleStatusChange(order.id, "Canceled")}
                      >
                        Canceled
                      </div>
                    </div>
                  </div>
                )}
              </td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full ${
                    order.orderStatus === "Completed"
                      ? "bg-green-100 text-green-700"
                      : order.orderStatus === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : order.orderStatus === "Shipped"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.orderStatus || "Select Status"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
