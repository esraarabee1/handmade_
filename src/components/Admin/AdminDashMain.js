import React from "react";
import DashHeader from "./DashHeader";
import CardAnalysisContainer from "./CardAnalysisContainer";
import AnalysisRecentContainer from "./AnalysisRecentContainer";

const AdminDashMain = () => {
  return (
    <div className="bg-gray-100 min-h-screen ">
      {/* Header Section */}
      <DashHeader />

      {/* Cards Section */}
      <div className="">
        <CardAnalysisContainer />
      </div>

      {/* Charts and Recent Orders Section */}
      <div className="">
        <AnalysisRecentContainer />
      </div>
    </div>
  );
};

export default AdminDashMain;
