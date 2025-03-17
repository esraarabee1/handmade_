import React from "react";

import DashHeader from "../../components/Admin/DashHeader";
import InventoryStatus from "../../components/Admin/InventoryStatus";
import VendorSideBar from "../../components/Vendor/VendorSideBar";

const Vendorviewinventory = () => {
  return (
    <div className="flex gap-4  min-h-screen bg-gray-100">
      {/* الشريط الجانبي */}
      <div className="bg-white shadow-lg rounded-lg">
        <VendorSideBar />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="flex flex-col flex-1 gap-4">
        <DashHeader />
        <InventoryStatus />
      </div>
    </div>
  );
};

export default Vendorviewinventory;
