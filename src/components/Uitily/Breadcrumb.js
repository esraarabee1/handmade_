import React from "react";

const Breadcrumb = () => {
  return (
    <div>
      <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
        <h4 className="flex items-center gap-1">
          Home
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="none"
          >
            <path
              d="M4.46 6.24L1.38 3.15C1.29 3.08 1.2 3.04 1.09 3.04c-.11 0-.21.04-.3.11a.38.38 0 00-.11.28c.01.11.05.21.13.29L3.64 6.55.81 9.38a.39.39 0 000 .56.39.39 0 00.55 0L4.41 6.86c.19-.25.21-.46.05-.62z"
              fill="#9CA3AF"
            />
          </svg>
        </h4>
        <span className="text-gray-400">Product details</span>
      </div>
    </div>
  );
};

export default Breadcrumb;
