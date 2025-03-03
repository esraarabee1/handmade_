import React from "react";
import RecentOrdersContainer from "./RecentOrdersContainer";
import AdminContainerAnalysis from "./AdminContainerAnalysis";

const AnalysisRecentContainer = () => {
  return (
    <div className="flex flex-col md:flex-row pl-4">
      <div className="w-1/2">
        <AdminContainerAnalysis />
      </div>
      <div className="w-1/2">
        <RecentOrdersContainer />
      </div>
    </div>
  );
};

export default AnalysisRecentContainer;
