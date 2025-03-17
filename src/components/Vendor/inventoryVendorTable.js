import React from "react";
import { useNavigate } from "react-router-dom";

import GetOrdersVendorHook from "../../Hook/Vendor/viewordersvendor-hook";

const InventoryVendorTable = () => {
  const [orders, products] = GetOrdersVendorHook();
  const navigate = useNavigate();

  return (
    <div className="flex-1 overflow-x-auto bg-gray-100 min-h-screen">
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-left"></th>
            <th className="p-3 text-left"></th>
            <th className="p-3 text-left">Product Name</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Unit Price</th>
            <th className="p-3 text-left">In-Stock</th>
            <th className="p-3 text-left">Discount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-100 cursor-pointer"
              onClick={() => navigate(`/vendor/items/${item.id}`)}
            >
              <td className="p-3">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td className="p-3">
                <img
                  src={item.thumbImage}
                  alt="Product"
                  className="w-10 h-10 rounded"
                />
              </td>
              <td className="p-3 flex items-center gap-2">{item.name}</td>
              <td className="p-3">{item.category ? "HandMade" : "HandMade"}</td>
              <td className="p-3">{item.price}</td>
              <td className="p-3">{item.qty}</td>
              <td className="p-3">{item.offerPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryVendorTable;
