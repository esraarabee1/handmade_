import React from "react";
import Chart from "react-apexcharts";
import { FaChevronDown } from "react-icons/fa";

const BarChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 300,
      toolbar: { show: false }, // Hide export menu
    },
    xaxis: {
      categories: [
        "Sept 10",
        "Sept 11",
        "Sept 12",
        "Sept 13",
        "Sept 14",
        "Sept 15",
        "Sept 16",
      ],
      labels: { style: { colors: "#6B7280", fontSize: "12px" } }, // Light gray text
    },
    colors: ["#007BFF"],
    grid: {
      show: false, // Remove background grid lines
    },
    plotOptions: {
      bar: {
        borderRadius: 4, // Round edges
        columnWidth: "40%",
      },
    },
  };

  const series = [
    {
      name: "Sales",
      data: [25, 60, 30, 80, 50, 70, 90], // Sales data
    },
  ];

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl">
      {/* Header with dropdown */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Summary</h3>
        <div className="flex items-center gap-1 text-gray-500 text-sm cursor-pointer">
          <span>Sales</span> <FaChevronDown size={12} />
        </div>
      </div>

      {/* Chart */}
      <div>
        <Chart options={options} series={series} type="bar" height="250" />
      </div>
    </div>
  );
};

export default BarChart;
