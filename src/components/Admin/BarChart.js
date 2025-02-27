import React from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // الأشهر أو الأيام
    },
    colors: ["#007BFF"], // لون الأعمدة
    plotOptions: {
      bar: {
        columnWidth: "50%", // عرض الأعمدة
      },
    },
  };

  const series = [
    {
      name: "Sales", // اسم السلسلة
      data: [40, 55, 60, 70, 80, 90, 100], // البيانات (المبيعات لكل شهر)
    },
  ];

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="mb-4 text-lg font-bold">Sales Over Time</h3>
      <Chart options={options} series={series} type="bar" height="350" />
    </div>
  );
};

export default BarChart;
