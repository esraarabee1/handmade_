import React from "react";
import VendorsTable from "../../components/Admin/VendorsTable";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import VendorStatus from "../../components/Admin/vendorStatus";
import DashHeader from "../../components/Admin/DashHeader";

const Adminviewvendors = () => {
  return (
    <div className="flex gap-4 p-6 bg-gray-100 min-h-screen">
      {/* الشريط الجانبي */}
      <div className="bg-white shadow-lg rounded-lg">
        <AdminSideBar />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="flex flex-col flex-1 gap-4">
        <DashHeader /> {/* ✅ تغيير flex إلى flex-col */}
        <VendorStatus /> {/* ✅ سيظهر فوق */}
        <VendorsTable /> {/* ✅ سيظهر أسفل */}
      </div>
    </div>
  );
};

export default Adminviewvendors;
