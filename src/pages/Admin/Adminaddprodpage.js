import React from "react";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import ProductDesc from "../../components/Admin/ProductDesc";
import UploadProd from "../../components/Admin/UploadProd";

const AdminAddProdPage = () => {
  return (
    <div className="flex gap-4 p-6 bg-gray-100 min-h-screen">
      {/* الشريط الجانبي */}
      <div className="bg-white shadow-lg rounded-lg">
        <AdminSideBar />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="flex flex-1 gap-4">
        <div className="w-2/3 bg-white pt-7 pb-7 pl-[33px] pr-[33px] rounded-lg shadow-md">
          <ProductDesc />
        </div>
        <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
          <UploadProd />
        </div>
      </div>
    </div>
  );
};

export default AdminAddProdPage;
