import React from "react";

const Headerofcomponents = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 px-6 rounded-lg">
      <span className="text-md font-semibold">New Inventory Item</span>
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
          Save & Publish
        </button>
      </div>
    </div>
  );
};

export default Headerofcomponents;
