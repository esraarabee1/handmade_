import React from "react";

import AdminSideBar from "../../components/Admin/AdminSideBar";
import DashHeader from "../../components/Admin/DashHeader";
import OrdersTable from "../../components/Admin/ordersTable";
import OrderStatus from "../../components/Admin/orderStatus";

const Adminvieworders = () => {
  return (
    <div className="flex gap-4  min-h-screen bg-gray-100">
      {/* الشريط الجانبي */}
      <div className="bg-white shadow-lg rounded-lg">
        <AdminSideBar />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="flex flex-col flex-1 gap-4">
        <DashHeader /> {/* ✅ تغيير flex إلى flex-col */}
        <OrderStatus /> {/* ✅ سيظهر فوق */}
        <OrdersTable />
      </div>
    </div>
  );
};

export default Adminvieworders;
