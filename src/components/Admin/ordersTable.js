import React, { useState } from "react";
import GetOrdersDataHook from "../../Hook/Admin/vieworders-hook";

const OrdersTable = () => {
  const [orders] = GetOrdersDataHook();

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };
  return (
    <div className="flex-1 overflow-x-auto  bg-gray-100 min-h-screen ">
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="border-b ">
            <th className="p-3 text-left">
              <input type="checkbox" className="w-4 h-4 hidden" />
            </th>
            <th className="p-3 text-left">Customer Name</th>
            <th className="p-3 text-left">Tracking ID</th>
            <th className="p-3 text-left">Order Total</th>
            <th className="p-3 text-left">Action</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="p-3">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td className="p-3">{order.user ? order.user : "Someone"}</td>
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.amount}</td>
              <td className="p-3 relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="inline-flex items-center rounded-md bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none"
                >
                  {order.orderStatus || "Completed"}
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
                  <div className="absolute mt-2 w-28 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1 text-sm text-gray-700">
                      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Completed
                      </div>
                      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Pending
                      </div>
                    </div>
                  </div>
                )}
              </td>
              <td className="p-3">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                  {order.orderStatus}
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
