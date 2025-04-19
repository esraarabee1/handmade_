import React from "react";
import GetVendorDataHook from "../../Hook/Admin/viewvendor-hook";

const VendorsTable = () => {
  const [vendors] = GetVendorDataHook();
  return (
    <div className="flex-1 overflow-x-auto  bg-gray-100 min-h-screen ">
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="border-b ">
            <th className="p-3 text-left">
              <input type="checkbox" className="w-4 h-4 hidden" />
            </th>
            <th className="p-3 text-left">Trader Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Trader Since</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((trader, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="p-3">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td className="p-3">{trader.userName}</td>
              <td className="p-3">{trader.email}</td>
              <td className="p-3">{trader.phone}</td>
              <td className="p-3">
                {trader.traderSince
                  ? "12 Aug 2022 - 12:25 am"
                  : "12 Aug 2022 - 12:25 am"}
              </td>
              <td className="p-3">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                  {trader.status ? "Active" : "Not Active"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorsTable;
