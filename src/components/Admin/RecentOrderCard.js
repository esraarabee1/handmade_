import React from "react";
import categorytw from "../../images/categorytw.png";

const RecentOrderCard = () => {
  return (
    <div className="  rounded-lg w-full max-w-7xl h-30 mx-auto flex items-center ">
      <div className="flex gap-4 w-full">
        <div>
          <img
            src={categorytw}
            alt="Product"
            className="w-24 h-24 object-cover rounded"
          />
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <h3 className="text-lg font-semibold">Peace Lily</h3>
          <span className="text-xl font-bold">$990</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-2 justify-center">
        <span className="text-sm text-gray-500">12 Sept 2024</span>
        <span className="text-yellow-500 font-medium">Pending</span>
      </div>
    </div>
  );
};

export default RecentOrderCard;
