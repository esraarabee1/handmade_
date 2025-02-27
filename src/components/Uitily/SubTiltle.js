import React from "react";
import { Link } from "react-router-dom";

const SubTitle = ({ title, btntitle, pathText }) => {
  return (
    <div className="flex justify-between items-center pt-4">
      <div className="text-lg font-semibold">{title}</div>
      {btntitle && (
        <Link to={pathText} className=" ">
          <div className="flex gap-2 items-center px-4 py-2  text-black ">
            {btntitle}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
            >
              <path
                d="M1.375 0.75L6.625 6L1.375 11.25"
                stroke="#008ECC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </Link>
      )}
    </div>
  );
};

export default SubTitle;
