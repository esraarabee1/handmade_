import React from "react";
import RecentOrderCard from "./RecentOrderCard";

const RecentOrdersContainer = () => {
  return (
    <div>
      <div className="container bg-white shadow-md rounded-lg p-6">
        <h3 className="mb-4 text-lg font-bold">Recent Orders</h3>
        <div className="flex-column">
          <RecentOrderCard />
          <RecentOrderCard />
          <RecentOrderCard />
          <RecentOrderCard />
          <RecentOrderCard />
          <RecentOrderCard />
          <RecentOrderCard />
          <RecentOrderCard />
          <RecentOrderCard />
        </div>
      </div>
    </div>
  );
};

export default RecentOrdersContainer;
