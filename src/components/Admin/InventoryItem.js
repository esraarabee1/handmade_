import React from "react";
import category from "../../images/category.png";

const InventoryItem = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-between items-center mb-4 pr-4">
        <h2 className="text-lg font-semibold">Polo T-Shirt</h2>
        <div className="flex gap-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log("Button Clicked!");
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Edit Product
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log("Button Clicked!");
            }}
            className="bg-[#CC5F5F] text-white px-4 py-2 rounded-[12px] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Unpublish Product
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 pr-4 bg-gray-100 ">
        {/* Product Image */}
        <div className="w-40 h-40 flex-shrink-0 bg-white p-4 shadow-md rounded-lg">
          <img
            src={category}
            alt="Product"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="bg-white p-6   flex-1">
          <div className="flex justify-between items-center mb-10">
            <p className="text-sm text-gray-500">
              Last Order <span className="font-semibold">12 Sept 2022</span>
            </p>
            <span className="px-3 py-1 text-xs text-green-700 bg-green-200 rounded-md">
              Published
            </span>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-lg font-semibold">$25,000.00</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">In-Stock</p>
              <p className="text-lg font-semibold">20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
