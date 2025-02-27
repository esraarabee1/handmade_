import React from "react";
import { MdShoppingCart } from "react-icons/md"; // استيراد الأيقونة

const CardAnalysis = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <MdShoppingCart className="text-blue-500 text-2xl" /> {/* الأيقونة */}
        </div>
        <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-md text-sm">
          This Week
        </button>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Sales</h3>
          <span className="text-sm text-green-500">$00.0</span>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-sm font-medium text-gray-600">Volume</h3>
          <span className="text-lg font-semibold text-gray-800">0</span>
        </div>
      </div>
    </div>
  );
};

export default CardAnalysis;
