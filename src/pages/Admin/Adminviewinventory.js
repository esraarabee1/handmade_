import React from "react";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import VendorStatus from "../../components/Admin/vendorStatus";
import DashHeader from "../../components/Admin/DashHeader";
import InventoryTable from "../../components/Admin/InventoryTable";
import InventoryStatus from "../../components/Admin/InventoryStatus";

const Adminviewinventory = () => {
  return (
    <div className="flex  min-h-screen bg-gray-100">
      {/* الشريط الجانبي */}
      <div className="bg-white shadow-lg rounded-lg">
        <AdminSideBar />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="flex flex-col flex-1 gap-4">
        <DashHeader />
        <div className="pl-4 pr-4">
          <InventoryStatus />
        </div>
        <div className="pl-4 pr-4">
          <InventoryTable />
        </div>
      </div>
    </div>
  );
};

export default Adminviewinventory;
