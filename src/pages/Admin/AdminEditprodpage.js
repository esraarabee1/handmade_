import React from "react";
import DashHeader from "../../components/Admin/DashHeader";

import EditProd from "../../components/Admin/EditProd";
import AdminSideBar from "../../components/Admin/AdminSideBar";

const AdminEditProdPage = () => {
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
          <EditProd />
        </div>
      </div>
    </div>
  );
};

export default AdminEditProdPage;
