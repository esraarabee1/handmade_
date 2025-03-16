import React from "react";
import GetOrdersDataHook from "../../Hook/Admin/vieworders-hook";

const OrdersTable = () => {
  const [orders] = GetOrdersDataHook();
  return (
    <div className="flex-1 overflow-x-auto  bg-gray-100 min-h-screen">
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="border-b ">
            <th className="p-3 text-left">
              <input type="checkbox" className="w-4 h-4 hidden" />
            </th>
            <th className="p-3 text-left">Customer Name</th>
            <th className="p-3 text-left">Tracking ID</th>
            <th className="p-3 text-left">Order Total</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="p-3">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td className="p-3">{order.user}</td>
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.amount}</td>

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
