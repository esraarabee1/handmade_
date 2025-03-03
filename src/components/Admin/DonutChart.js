import React from "react";
import Chart from "react-apexcharts";
import { FaChevronDown } from "react-icons/fa";

const DonutChart = () => {
  const options = {
    labels: ["Acquisition", "Purchase", "Retention"],
    colors: ["#007BFF", "#FFA500", "#8B5CF6"], // Blue, Orange, Purple
    legend: {
      position: "bottom",
      fontSize: "14px",
      labels: { colors: "#6B7280" },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
  };

  const series = [45, 30, 25]; // Example data

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl">
      {/* Header with dropdown */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Marketing</h3>
        <div className="flex items-center gap-1 text-gray-500 text-sm cursor-pointer">
          <span>This Week</span> <FaChevronDown size={12} />
        </div>
      </div>

      {/* Chart */}
      <div className="flex justify-center">
        <Chart options={options} series={series} type="donut" width="250" />
      </div>
    </div>
  );
};

export default DonutChart;
