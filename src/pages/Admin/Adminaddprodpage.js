import React from "react";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import UploadProd from "../../components/Admin/UploadProd";

const AdminAddProdPage = () => {
  return (
    <div className="flex gap-4 p-6 bg-gray-100 min-h-screen">
      {/* الشريط الجانبي */}
      <div className="bg-white shadow-lg rounded-lg">
        <AdminSideBar />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="flex flex-1 ">
        <UploadProd />
      </div>
    </div>
  );
};

export default AdminAddProdPage;
