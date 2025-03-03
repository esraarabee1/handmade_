import React from "react";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import VendorStatus from "../../components/Admin/vendorStatus";
import DashHeader from "../../components/Admin/DashHeader";
import InventoryTable from "../../components/Admin/InventoryTable";
import InventoryStatus from "../../components/Admin/InventoryStatus";

const Adminviewinventory = () => {
  return (
    <div className="flex gap-4  min-h-screen bg-gray-100">
      {/* الشريط الجانبي */}
      <div className="bg-white shadow-lg rounded-lg">
        <AdminSideBar />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="flex flex-col flex-1 gap-4">
        <DashHeader /> {/* ✅ تغيير flex إلى flex-col */}
        <InventoryStatus /> {/* ✅ سيظهر فوق */}
        <InventoryTable /> {/* ✅ سيظهر أسفل */}
      </div>
    </div>
  );
};

export default Adminviewinventory;
