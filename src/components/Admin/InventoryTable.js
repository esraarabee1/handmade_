import React from "react";
import AllProductHook from "../../Hook/all-product-hook";
import GetInventoryDataHook from "../../Hook/Admin/viewinventory-hook";

const InventoryTable = () => {
  const [inventory] = GetInventoryDataHook();
  return (
    <div className="flex-1 overflow-x-auto bg-gray-100 min-h-screen">
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="border-b ">
            <th className="p-3 text-left"></th>
            <th className="p-3 text-left">Product Image</th>
            <th className="p-3 text-left">Product Name</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Unit Price</th>
            <th className="p-3 text-left">In-Stock</th>
            <th className="p-3 text-left">Discount</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="p-3">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td className="p-3 ">
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

export default InventoryTable;
