import React from "react";
import { FaSearch } from "react-icons/fa";
import useTrackorderHook from "../../Hook/trackorder-hook";
const OrderSearch = () => {
  const [trackId, onChangeTrackId, onSubmit, res] = useTrackorderHook();
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
          <div className="relative">
            <input
              value={trackId}
              onChange={onChangeTrackId}
              type="search"
              id="order-id"
              placeholder="Ex. 0000000"
              className="border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
            />
            <button
              type="submit"
              onClick={onSubmit}
              className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
            >
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSearch;
