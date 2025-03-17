import React from "react";
import InventoryItem from "../../components/Admin/InventoryItem";
import DashHeader from "../../components/Admin/DashHeader";
import VendorSideBar from "../../components/Vendor/VendorSideBar";

const VendorviewItem = () => {
  return (
    <div className="flex gap-4  min-h-screen bg-gray-100">
      {/* الشريط الجانبي */}
      <div className="bg-white shadow-lg rounded-lg">
        <VendorSideBar />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="flex flex-col flex-1 gap-4">
        <DashHeader />
        <InventoryItem />
      </div>
    </div>
  );
};

export default VendorviewItem;
