import React from "react";

const OrderSearch = () => {
  return (
    <div className="flex">
      <div className=" w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Track Order</h2>
        <div className="flex flex-col gap-4">
          <label
            className="text-gray-600 text-sm font-medium"
            htmlFor="order-id"
          >
            Order ID
          </label>
          <input
            type="search"
            id="order-id"
            placeholder="Ex. 0000000"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderSearch;
