import React from "react";
import DashHeader from "./DashHeader";
import CardAnalysisContainer from "./CardAnalysisContainer";
import AnalysisRecentContainer from "./AnalysisRecentContainer";

const AdminDashMain = () => {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <DashHeader />

      <div className="">
        <CardAnalysisContainer />
      </div>

      <div className="">
        <AnalysisRecentContainer />
      </div>
    </div>
  );
};

export default AdminDashMain;
