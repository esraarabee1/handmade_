import React from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
  const options = {
    labels: ["Acquisition", "Purchase", "Retention"], // التسميات
    colors: ["#007BFF", "#FFA500", "#FFC107"], // ألوان الدائرة
  };

  const series = [40, 30, 30]; // البيانات (النسب المئوية لكل جزء)

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="mb-4 text-lg font-bold">Customer Behavior</h3>
      <Chart options={options} series={series} type="donut" width="300" />
    </div>
  );
};

export default DonutChart;
