import React from "react";
import DashHeader from "../../components/Admin/DashHeader";
import VendorSideBar from "../../components/Vendor/VendorSideBar";
import EditProd from "../../components/Admin/EditProd";

const VendorEditProdPage = () => {
  return (
    <div className="flex gap-4  min-h-screen bg-gray-100">
      {/* الشريط الجانبي */}
      <div className="bg-white shadow-lg rounded-lg">
        <VendorSideBar />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="flex flex-1 flex-col gap-4">
        <DashHeader />
        <EditProd />
      </div>
    </div>
  );
};

export default VendorEditProdPage;
