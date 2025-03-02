import React from "react";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import AdminDashMain from "../../components/Admin/AdminDashMain";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* الشريط الجانبي */}
      <div className=" bg-white shadow-lg">
        <AdminSideBar />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="flex-1 ">
        <AdminDashMain />
      </div>
    </div>
  );
};

export default AdminDashboard;
