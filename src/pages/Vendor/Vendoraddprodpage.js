import React from "react";
import UploadProd from "../../components/Admin/UploadProd";
import DashHeader from "../../components/Admin/DashHeader";
import VendorSideBar from "../../components/Vendor/VendorSideBar";

const VendorAddProdPage = () => {
  return (
    <div className="flex gap-4  min-h-screen bg-gray-100">
      {/* الشريط الجانبي */}
      <div className="bg-white shadow-lg rounded-lg">
        <VendorSideBar />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="flex flex-1 flex-col gap-4">
        <DashHeader />
        <UploadProd />
      </div>
    </div>
  );
};

export default VendorAddProdPage;
