import React from "react";
import DonutChart from "./DonutChart";
import BarChart from "./BarChart";

const AdminContainerAnalysis = () => {
  return (
    <div className="flex flex-col lg:flex-row  gap-4 pr-4  ">
      <div className="lg:w-1/2 w-full">
        <DonutChart />
      </div>
      <div className="lg:w-1/2 w-full">
        <BarChart />
      </div>
    </div>
  );
};

export default AdminContainerAnalysis;
