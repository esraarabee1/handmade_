import React from "react";
import DonutChart from "./DonutChart"; // تأكد من أن الملف اسمه DonutChart.js
import BarChart from "./BarChart";

const AdminContainerAnalysis = () => {
  return (
    <div className="flex flex-col justify-between gap-4 pr-6 w-full">
      <DonutChart />
      <BarChart />
    </div>
  );
};

export default AdminContainerAnalysis;
