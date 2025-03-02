import React from "react";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import VendorStatus from "../../components/Admin/vendorStatus";
import DashHeader from "../../components/Admin/DashHeader";
import InventoryTable from "../../components/Admin/InventoryTable";

const Adminviewinventory = () => {
  return (
    <div className="flex gap-4 p-6 bg-gray-100 min-h-screen">
      {/* الشريط الجانبي */}
      <div className="bg-white shadow-lg rounded-lg">
        <AdminSideBar />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="flex flex-col flex-1 gap-4">
        <DashHeader /> {/* ✅ تغيير flex إلى flex-col */}
        <VendorStatus /> {/* ✅ سيظهر فوق */}
        <InventoryTable /> {/* ✅ سيظهر أسفل */}
      </div>
    </div>
  );
};

export default Adminviewinventory;
