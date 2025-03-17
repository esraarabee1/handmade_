import React from "react";
import { FaPlus, FaBox, FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const InventoryStatus = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-md font-semibold">Inventory Summary</h2>
        <button
          onClick={(e) => {
            console.log(user.roles); // طباعة للتحقق من القيم
            if (user?.roles?.includes("Vendor")) {
              navigate("/vendor/addProduct");
            } else {
              navigate("/addproduct");
            }
          }}
          className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 text-sm rounded-lg hover:bg-blue-700"
        >
          <FaPlus size={12} /> Add Product
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* All Products & Active */}
        <div className="bg-blue-600 text-white p-3 rounded-md shadow text-xs">
          <div className="flex items-center gap-1">
            <FaBox size={14} />
            <div>
              <p className="text-[10px]">All Products</p>
              <h2 className="text-lg font-bold">350</h2>
            </div>
          </div>
          <div className="mt-1 flex items-center gap-1 text-[10px]">
            <span>Active</span>
            <span className="text-lg font-bold">316</span>
            <span className="opacity-70"> 89%</span>
          </div>
        </div>

        {/* Low Stock, Expired, Ratings */}
        <div className="bg-white p-3 rounded-md shadow border text-xs">
          <p className="text-gray-500 text-[10px]">This Week</p>
          <div className="mt-1">
            <div className="flex items-center gap-1 text-red-600 font-semibold">
              <FaExclamationTriangle size={12} />
              <span className="text-[10px]">Low Stock</span>
            </div>
            <h2 className="text-lg font-bold text-gray-900">23</h2>
          </div>

          <div className="mt-1 flex justify-between">
            <div>
              <p className="text-gray-500 text-[10px]">Expired</p>
              <h2 className="text-md font-bold">3</h2>
            </div>
            <div>
              <p className="text-gray-500 text-[10px]">1 Star Rating</p>
              <h2 className="text-md font-bold">2</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryStatus;
