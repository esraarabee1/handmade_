import React from "react";
import VendorsTable from "../../components/Admin/VendorsTable";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import VendorStatus from "../../components/Admin/vendorStatus";
import DashHeader from "../../components/Admin/DashHeader";

const Adminviewvendors = () => {
  return (
    <div className="flex   min-h-screen bg-gray-100">
      {/* الشريط الجانبي */}
      <div className="bg-white shadow-lg rounded-lg">
        <AdminSideBar />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="flex flex-col flex-1 gap-4">
        <DashHeader />
        <div className="pr-4 pl-4">
          <VendorStatus />
        </div>
        <div className="pr-4 pl-4">
          <VendorsTable />
        </div>
      </div>
    </div>
  );
};

export default Adminviewvendors;
