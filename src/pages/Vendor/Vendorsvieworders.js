import React from "react";

import AdminSideBar from "../../components/Vendor/VendorSideBar";
import DashHeader from "../../components/Admin/DashHeader";
import OrderStatus from "../../components/Admin/orderStatus";
import GetOrdersVendorHook from "../../Hook/Vendor/viewordersvendor-hook";
import OrdersVendorTable from "../../components/Vendor/ordersVendorTable";

const Vendorvieworders = () => {
  return (
    <div className="flex gap-4  min-h-screen bg-gray-100">
      {/* الشريط الجانبي */}
      <div className="bg-white shadow-lg rounded-lg">
        <AdminSideBar />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="flex flex-col flex-1 gap-4">
        <DashHeader />
        <OrderStatus />
        <OrdersVendorTable />
      </div>
    </div>
  );
};

export default Vendorvieworders;
