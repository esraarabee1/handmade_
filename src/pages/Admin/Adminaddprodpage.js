import React from "react";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import UploadProd from "../../components/Admin/UploadProd";
import DashHeader from "../../components/Admin/DashHeader";
import Headerofcomponents from "../../components/Admin/Headerofcomponents";

const AdminAddProdPage = () => {
  return (
    <div className="flex   min-h-screen bg-gray-100">
      {/* الشريط الجانبي */}
      <div className="bg-white shadow-lg rounded-lg">
        <AdminSideBar />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="flex flex-1 flex-col gap-1">
        <DashHeader />
        <div className="p-4">
          <UploadProd />
        </div>
      </div>
    </div>
  );
};

export default AdminAddProdPage;
