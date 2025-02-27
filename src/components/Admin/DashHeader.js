import React from "react";

const DashHeader = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 w-full">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section */}
        <div className="w-full md:w-auto">
          <span className="text-lg font-bold text-gray-700">Dashboard</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-md flex items-center gap-2">
            Handmade
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 9l6 6 6-6"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashHeader;
